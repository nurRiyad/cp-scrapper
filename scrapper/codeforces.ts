export async function getCodeforcesData() {
  const resp = await $fetch<Record<string,unknown>>('https://codeforces.com/api/user.info?handles=nur_riyad')
  const dataArray = resp.result as Array<Record<string,unknown>>
  const data = dataArray[0]

  return {
    handle: data.handle || '',
    ratting: data.ratting || '',
    maxRating: data.maxRating || '',
    rank: data.rank || '',
    maxRank: data.maxRank || '',
  }
}


