import { checkError, client } from './client';

export async function getTeams() {
  const resp = await client.from('teams').select('*');
  return checkError(resp);
}

export async function getTeamById(id) {
  const resp = await client.from('teams').select('*, players(*)').eq('id', id.toString()).single();
  return checkError(resp);
}
