// First, install the required libraries using npm
// npm install axios jsdom turndown

const axios = require("axios");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const TurndownService = require("turndown");
const fs = require("fs");
const path = require("path");
const urlModule = require("url");

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

    // Initialize Turndown Service with custom rules
    const turndownService = new TurndownService();

    // Add a custom rule to handle image tags
    turndownService.addRule("image", {
      filter: "img",
      replacement: function (content, node) {
        const src = node.getAttribute("src");
        const alt = node.getAttribute("alt") || "Image";
        const imageUrl = new URL(src, url).href;
        const filename = path.basename(urlModule.parse(imageUrl).pathname);
        return `![${alt}](./images/${filename})`;
      },
    });

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

        const filename = await downloadImage(imageUrl, imageDir);
        if (filename) {
          console.log(`alt: ![${alt}]`);
          console.log(`filename: ${filename}`);
          const htmlImage = `<img src="./images/${filename}" alt="${alt}">`;
          console.log(`Replacing image src: ${src} with ${htmlImage}`);
          const imgElement = document.createElement("span");
          imgElement.innerHTML = htmlImage; // Use innerHTML instead of textContent
          console.log(`HTML output: ${imgElement.outerHTML}`);
          img.replaceWith(imgElement);
        } else {
          // If image download fails, replace with an empty alt text image placeholder
          const markdownImage = `![${alt}](${src})`;
          console.log(`Replacing image src: ${src} with ${markdownImage}`);
          const imgElement = document.createElement("span");
          imgElement.textContent = markdownImage;
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
