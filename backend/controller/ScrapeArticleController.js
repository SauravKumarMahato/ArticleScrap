const puppeteer = require('puppeteer-core');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

// puppeteer.use(StealthPlugin());

const dotenv = require('dotenv');
dotenv.config();

const TOKEN = process.env.TOKEN;
const BROWSERLESS_PORT = process.env.BROWSERLESS_PORT;
const browserWSEndpoint = `ws://127.0.0.1:${BROWSERLESS_PORT}?token=${TOKEN}`

const scrapeArticles = async (query) => {
  const browser = await puppeteer.connect({
    browserWSEndpoint: browserWSEndpoint
  });

  // const browser = await puppeteer.launch({
  //   headless: true,
  //   defaultViewport: null
  // });

  console.log('Browser launched', query);
  
  const page = await browser.newPage();
  await page.goto('https://scholar.google.com/', { waitUntil: 'domcontentloaded' });

  // Wait for the input field to be available
  await page.waitForSelector('input[name="q"]');

  // Type the query into the input field
  await page.type('#gs_hdr_tsi',query);

  // Click the search button
  await page.click('button[type="submit"]');


  // await page.waitForTimeout(3000);
  
  // Wait for the search results to load
  await page.waitForSelector('.gs_r.gs_or.gs_scl');

  // Extract information from the search results
  const articles = await page.evaluate(() => {
    const articlesData = Array.from(document.querySelectorAll('.gs_r.gs_or.gs_scl'));
    return articlesData.map(article => {
      const titleElement = article.querySelector('.gs_rt a');
      const title = titleElement ? titleElement.innerText : 'N/A';
      

      const linkElement = article.querySelector('.gs_or_ggsm a');
      const link = linkElement ? linkElement.href : 'N/A';

      const webLinkElement = article.querySelector('.gs_rt a');
      const webLink = webLinkElement ? webLinkElement.href : 'N/A';
      return { title, link, webLink };
    });
  });

  // await browser.close();
  // console.log(articles)
  return articles;
};

exports.getArticles = async (req, res) => {
  try {
    const query = req.query.input; // Assuming you pass the query from the frontend
    const articles = await scrapeArticles(query);
    // console.log('get request success = ',query)

    res.send(articles);
  } catch (error) {
    console.error('Error: occured',error );
    // res.status(500).json({ error: 'Internal Server Error' });
  }
};
