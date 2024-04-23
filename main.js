const { default: puppeteer } = require('puppeteer/src/puppeteer.js')
const puppeteer = require("puppeteer")
const Crawler = require("./Crawler")

(async () => {
    // Start up the browser and pages,
    const browser = await puppeteer.launch();
    const pages = await browser.newPage();

    const crawl = new Crawler({

    })


})