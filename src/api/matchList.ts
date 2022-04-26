import instance from "@/api/instance";
import store from "@/store/store";
var querystring = require('querystring')

export const matchList = async () => {
  const {data:data} = await instance.post('get_match_list_v1.php',querystring.stringify({      
    match_type: 'UPCOMING'
  }))
  return data;
}