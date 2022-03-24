import { checkError, client } from './client';

export async function getPlayers() {
  const resp = await client.from('players').select('*');
  return checkError(resp);
}

export async function getPlayerById(id) {
  const resp = await client.from('players').select('*, teams(*)').eq('id', id).single();
  console.log(resp);
  return checkError(resp);
}
