const axios = require("axios");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const TurndownService = require("turndown");
const fs = require("fs");
const path = require("path");
const urlModule = require("url");

const dom = new JSDOM(html);
const document = dom.window.document;

const testElement = document.createElement("span");
testElement.textContent = "![alt](./images/filename.jpg)";
document.body.appendChild(testElement);
