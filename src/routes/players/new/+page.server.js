// import { teams } from './dummydata.js';

// export function load() {
// 	return {
// 		teamInfo: teams.map((team) => ({
// 			name: team.teamName,
//             logo: team.teamLogo
// 		}))
// 	};
// }


import { supabase } from "$lib";

export async function load() {
  const { data } = await supabase.from('teams').select('*, country (*)');
  return { teams: data };
}