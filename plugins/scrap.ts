import fs from 'node:fs/promises';
import path from 'node:path';
import { scrapper } from "../scrapper";

const updateLatestData = async () =>{
  try {
    const content = await scrapper()
    const fullPath = path.join(process.cwd(), 'data', 'cp.json')
    await fs.writeFile(fullPath, JSON.stringify(content));
  } catch (err) {
    console.log(err);
  }
}

export default defineNitroPlugin((nitroApp) => {
  const dayInMilliseconds = 1000 * 60 * 60 * 24;
  updateLatestData()
  setInterval(()=>{
    updateLatestData()
  },5000)
})
