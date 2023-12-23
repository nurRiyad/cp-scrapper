import fs from 'node:fs/promises';
import path from 'node:path';
import { getAtcoderData } from './atcoder';

export const updateLatestData = async () =>{
  try {
    const content = await getAtcoderData()
    const fullPath = path.join(process.cwd(), 'data', 'cp.json')
    await fs.writeFile(fullPath, JSON.stringify(content));
  } catch (err) {
    console.log(err);
  }
}