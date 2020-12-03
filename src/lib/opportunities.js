import { get, post } from "./api";

export default async function getAllOpportunities(queryFilter) {
    queryFilter = queryFilter ? queryFilter.replace(' ','_') : '';

  try {
      settings = await get("opportunityType", null, cookies.get('token'));
      JSON.parse(response).sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
      })
      return response;
    } catch (e) {
      return  console.log('err at settings', e.toString());
    }
   
  }