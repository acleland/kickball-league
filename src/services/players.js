import { checkError, client } from './client';

export async function getPlayers() {
  const resp = await client.from('players').select('*');
  return checkError(resp);
}
