import { supabase } from "$lib";

export async function load() {
  const { data } = await supabase.from('players').select('*');
  console.log(data);
  return { players: data };
}