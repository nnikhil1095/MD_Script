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
      writer.on("finish", () => {
        console.log(`Image downloaded: ${outputPath}`);
        resolve(filename);
      });
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

    // Remove script, style, and other unwanted tags
    const removeUnwantedElements = () => {
      // Remove all <script> and <style> tags
      const scripts = document.querySelectorAll("script, style");
      scripts.forEach((el) => el.remove());

      // Optionally, remove other elements by class or id, like headers, footers, etc.
      const unwantedElements = document.querySelectorAll(
        "header, footer, nav, .advertisement, .sidebar, .cookie-banner"
      );
      unwantedElements.forEach((el) => el.remove());
    };

    // Initialize Turndown Service with custom rules
    const turndownService = new TurndownService();

    // Add a custom rule to handle image tags
    turndownService.addRule("image", {
      filter: "img",
      replacement: function (content, node) {
        const src = node.getAttribute("src");
        const alt = node.getAttribute("alt") || "Image";
        const filename = path.basename(src); // Use the actual filename from the src attribute
        return `![${alt}](./images/${filename})`;
      },
    });

    // Remove unwanted elements (like scripts, styles, and irrelevant sections)
    removeUnwantedElements();

    // Directory to save images
    const imageDir = "./images";
    if (!fs.existsSync(imageDir)) {
      fs.mkdirSync(imageDir);
    }

    // Extract the main content or fallback to the body if no specific container is found
    const contentCandidates = document.querySelectorAll(
      "article, main, section, div"
    );
    let largestContent = null;
    let largestSize = 0;

    contentCandidates.forEach((element) => {
      const textLength = element.textContent.length;
      if (textLength > largestSize) {
        largestSize = textLength;
        largestContent = element;
      }
    });

    const mainContent = largestContent || document.body;

    // Optionally extract the table of contents (if available)
    let toc = null;
    const tocCandidates = document.querySelectorAll(
      "nav, aside, .toc, #toc, #table-of-contents"
    );
    tocCandidates.forEach((element) => {
      const textLength = element.textContent.length;
      if (textLength > 20) {
        // Basic check to ensure it's not empty or trivial
        toc = element;
      }
    });

    // Extract the relevant HTML content (table of contents + main content)
    let relevantContent = "";
    if (toc) relevantContent += toc.outerHTML; // Add table of contents HTML if available
    if (mainContent) relevantContent += mainContent.outerHTML; // Add main content HTML

    // Process images: Download images and convert image tags to Markdown format
    const images = document.querySelectorAll("img");
    for (const img of images) {
      const src = img.getAttribute("src");
      if (src) {
        const alt = img.getAttribute("alt") || "Image";
        const imageUrl = new URL(src, url).href;
        const filename = await downloadImage(imageUrl, imageDir);
        if (filename) {
          const markdownImage = `![${alt}](./images/${filename})`;
          const imgElement = document.createElement("span");
          imgElement.textContent = markdownImage;
          img.replaceWith(imgElement);
        } else {
          const markdownImage = `![${alt}](${src})`;
          const imgElement = document.createElement("span");
          imgElement.textContent = markdownImage;
          img.replaceWith(imgElement);
        }
      }
    }

    // Convert the relevant HTML content to Markdown
    const markdown = turndownService.turndown(relevantContent);

    // Save the Markdown to a file (replace 'output.md' with your desired file path)
    fs.writeFile("outputChat.md", markdown, (err) => {
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
