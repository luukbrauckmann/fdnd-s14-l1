import { supabase } from "$lib";

export async function load() {
  const { data } = await supabase.from('teams').select('*, country (*)');
  return { teams: data };
}