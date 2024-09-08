const axios = require("axios");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const TurndownService = require("turndown");
const fs = require("fs");
const path = require("path");
const urlModule = require("url");

const url =
  "https://www.cisco.com/c/en/us/td/docs/dcn/whitepapers/tenant-routed-multicast-in-nexus9000-vxlan-bgp-evpn-fabrics.html";

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
    const turndownService = new TurndownService({
      headingStyle: "atx",
      codeBlockStyle: "fenced",
      bulletListMarker: "-",
      strongDelimiter: "**",
      linkStyle: "referenced",
    });

    // Directory to save images
    const imageDir = "./images";
    if (!fs.existsSync(imageDir)) {
      fs.mkdirSync(imageDir);
    }

    // Process images
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
          imgElement.innerHTML = htmlImage;
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
