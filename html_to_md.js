// First, install the required libraries using npm
// npm install axios jsdom turndown

const axios = require("axios");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const TurndownService = require("turndown");
const fs = require("fs");
const path = require("path");
const urlModule = require("url");
const { Console, log } = require("console");

// Replace 'your-web-page-url' with the URL of the web page you want to convert
const url =
  "https://www.cisco.com/c/en/us/td/docs/dcn/nx-os/nexus9000/103x/configuration/vxlan/cisco-nexus-9000-series-nx-os-vxlan-configuration-guide-release-103x/m_configuring_tenant_routed_multicast_93x.html";

async function downloadImage(imageUrl, outputDir) {
  const urlObj = urlModule.parse(imageUrl);
  const filename = path.basename(urlObj.pathname);
  const outputPath = path.join(outputDir, filename);

  try {
    const response = await axios({
      url: imageUrl,
      responseType: "stream",
    });

    const writer = fs.createWriteStream(outputPath);
    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on("finish", () => resolve(filename));
      writer.on("error", reject);
    });
  } catch (error) {
    console.error(`Failed to download image ${imageUrl}:`, error);
    return null;
  }
}

axios
  .get(url)
  .then(async (response) => {
    const html = response.data;

    // Create a DOM from the HTML content
    const dom = new JSDOM(html);
    const document = dom.window.document;

    // Initialize Turndown Service
    const turndownService = new TurndownService();

    // Directory to save images
    const imageDir = "./images";
    if (!fs.existsSync(imageDir)) {
      fs.mkdirSync(imageDir);
    }

    // Process images: Download images and convert image tags to Markdown format
    const images = document.querySelectorAll("img");
    for (const img of images) {
      const src = img.getAttribute("src");
      if (src) {
        const alt = img.getAttribute("alt") || "Image";
        const imageUrl = new URL(src, url).href;
        console.log(imageUrl);
        const filename = await downloadImage(imageUrl, imageDir);
        console.log(filename);
        if (filename) {
          const markdownImage = `![${alt}](./images/${filename})`;
          console.log(markdownImage);
          const imgElement = document.createElement("span");
          console.log(imgElement);

          imgElement.textContent = markdownImage;
          console.log(imgElement);
          img.replaceWith(imgElement);
        } else {
          // If image download fails, replace with an empty alt text image placeholder
          const imgElement = document.createElement("span");
          imgElement.textContent = `![${alt}](${src})`;
          img.replaceWith(imgElement);
        }
      }
    }

    // Convert HTML to Markdown
    const markdown = turndownService.turndown(document.body.innerHTML);

    // Save the Markdown to a file (replace 'output.md' with your desired file path)
    fs.writeFile("output.md", markdown, (err) => {
      if (err) {
        console.error("Error writing the Markdown file:", err);
      } else {
        console.log("Markdown file has been saved!");
      }
    });
  })
  .catch((error) => {
    console.error("Error fetching the web page:", error);
  });
