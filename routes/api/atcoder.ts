import data from "../../data/cp.json";
export default eventHandler(async () => {
  return data.atCoder || {};
});
