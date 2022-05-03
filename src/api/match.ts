import instance from "@/api/instance";

export const leagueData = async () => {
  const {data:data} = await instance.post('league_v2.php',{
    match_id:2140,
    user_id:4,
    innings_type:'FULL_MATCH'
  })
  return data;
}