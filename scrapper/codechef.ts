const getDataFromHTML = () => {
  const handle = (document.querySelector(".m-username--link") as HTMLElement).innerText;
  const ratting = (document.querySelector(".rating-number") as HTMLElement).innerText;
  const maxRating = (document.querySelector(".rating-header small") as HTMLElement).innerText;
  const totalStar = (document.querySelector(".rating") as HTMLElement).innerText;
  const totalContest = (document.querySelector(".contest-participated-count b") as HTMLElement).innerText;
  return { ratting, maxRating, totalContest, totalStar, handle };
};

export async function getCodechefData(browser) {
  const page = await browser.newPage();
  await page.goto("https://www.codechef.com/users/nur_riyad");

  const title = await page.evaluate(getDataFromHTML);
  return title;
}
