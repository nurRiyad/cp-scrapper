import puppeteer from "puppeteer";

export async function getAtcoderData() {

  let browser;

  if(process.env.NODE_ENV === 'development'){
    browser = await puppeteer.launch({ headless: "new" });
  }else{
    browser = await puppeteer.connect({
      browserWSEndpoint: `wss://chrome.browserless.io?token=${process.env.BLESS_TOKEN}`,
    })
  }
  
  const page = await browser.newPage();
  await page.goto("https://atcoder.jp/users/nur_riyad");

  const title = await page.evaluate(() => {
    const allElements = document.querySelectorAll("#main-container .row .col-md-9 tr");
    const obj: Record<string,unknown> = {};
    allElements.forEach((el) => {
      const type = el.querySelector("th").innerText;

      if (type === "Rating") obj.currentRatting = el.querySelector("td").innerText;
      if (type === "Highest Rating") obj.heightRatting = el.querySelector("td .user-green").innerText;
      if (type === "Rated Matches ") obj.totalMatches = el.querySelector("td").innerText;
      if (type === "Last Competed") obj.lastMatch = el.querySelector("td").innerText;
    });

    return obj;
  });
  await browser.close();

  return title
}


