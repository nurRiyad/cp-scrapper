// plugins/test.ts
import { updateLatestData } from "../scrapper";
export default defineNitroPlugin((nitroApp) => {
  const dayInMilliseconds = 1000 * 60 * 60 * 24;
  updateLatestData()
  setInterval(()=>{
    updateLatestData()
  },dayInMilliseconds)
})
