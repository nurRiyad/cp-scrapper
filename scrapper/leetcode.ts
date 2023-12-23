export async function getLeetCodeData() {
  const data = await $fetch<Record<string,unknown>>('https://leetcode-stats-api.herokuapp.com/nur_riyad')

  return {
    totalSolved: data.totalSolved || '',
    contributionPoints: data.contributionPoints || '',
    ranking: data.ranking || '',
    rank: data.rank || '',
    maxRank: data.maxRank || '',
  }
}


