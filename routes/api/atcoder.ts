import { getAtcoderData } from "../../scrapper/atcoder"
export default eventHandler(async() => {
  return await getAtcoderData()
})
