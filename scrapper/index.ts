import puppeteer from "puppeteer";
import { getAtcoderData } from "./atcoder";
import { getCodeforcesData } from "./codeforces";

const initBrowser = async () => {
  let browser;
  if(process.env.NODE_ENV === 'development'){
    browser = await puppeteer.launch({ headless: "new" });
  }else{
    browser = await puppeteer.connect({
      browserWSEndpoint: `wss://chrome.browserless.io?token=${process.env.BLESS_TOKEN}`,
    })
  }
  return browser
}

export const scrapper = async () =>{
 const browser = await initBrowser()

 const codeforcesData = await getCodeforcesData()
 const atCoderData = await getAtcoderData(browser)

return {
  codeforces: codeforcesData,
  atCoder: atCoderData,
  leetCode: {},
  codechef: {},
}
 
}
