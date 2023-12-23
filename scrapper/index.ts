import puppeteer from "puppeteer";
import { getAtcoderData } from "./atcoder";
import { getCodechefData } from "./codechef";
import { getCodeforcesData } from "./codeforces";
import { getLeetCodeData } from "./leetcode";

const initBrowser = async () => {
  let browser;
  if (process.env.NODE_ENV === "development") {
    browser = await puppeteer.launch({ headless: "new" });
  } else {
    browser = await puppeteer.connect({
      browserWSEndpoint: `wss://chrome.browserless.io?token=${process.env.BLESS_TOKEN}`,
    });
  }
  return browser;
};

export const scrapper = async () => {
  const browser = await initBrowser();

  const codeforcesData = await getCodeforcesData();
  const leetcodeData = await getLeetCodeData();
  const atCoderData = await getAtcoderData(browser);
  const codechefData = await getCodechefData(browser);

  await browser.close();

  return {
    codeforces: codeforcesData,
    atCoder: atCoderData,
    leetCode: leetcodeData,
    codechef: codechefData,
  };
};
