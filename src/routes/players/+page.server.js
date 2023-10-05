import { supabase } from "$lib";

export async function load() {
  const { data } = await supabase.from('players').select('*, country (region, name)');
  console.log(data);
  return { players: data };
}