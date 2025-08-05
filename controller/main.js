// import {searchInput} from "../model/stock-search.js";
import {mockCompanyProfile,mockSearchData,mockBulkProfileData} from "../model/mockRequestData.js";
import {showResults} from  "../view/stockSearchResults.js"
import {stockBaseAPIUrl,companyProfileAPI,stockApiKey,stockQuerys,searchStock} from "../model/apiEndpoints.js"
// import { searchInput } from "../model/stock-search.js";
const mockCompanyProfileResults = mockCompanyProfile
const mockSearchResponse = mockSearchData
const mockBulkProfilesData = mockBulkProfileData

export async function searchInput(input) {
  console.log(
    `${stockBaseAPIUrl}` +
      `${searchStock}` +
      `${input}` +
      `${stockQuerys}` +
      `${stockApiKey}`
  );

  const searchURL =
    `${stockBaseAPIUrl}` +
    `${searchStock}` +
    `${input}` +
    `${stockQuerys}` +
    `${stockApiKey}`;
  try {
    const response = await fetch(searchURL);
    if (!response.ok) {
      throw new Error("Bad response from server");
    }
    let data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    alert("There was a problem rcivieng data from the server, Try again");
    console.log("There was a problem rcivieng data from the API call");
    console.error("Fetch error: ", error);
    return null;
  }
}

let  debounceTimer;
$(".stock-search-input").on("input",async function(){
    clearTimeout(debounceTimer);
    let results;
    const input = $(this).val().trim().toUpperCase();
    console.log(input);
    
    // results = await searchInput(input);
    
    // showResults(mockSearchResponse); 
    // Remove at when finish dev
    // debounceTimer = setTimeout(()=>{
    //     results = await searchInput(input);
    // },500)-> Uncomment when finish
    // const copmanyProfileData = await getBulkCompanyData(results)
    // showResults(combinedStockObject(results,copmanyProfileData))-> Uncomment when finish
    const combinedStockArr = combinedStockObject(mockSearchResponse,mockBulkProfilesData.companyProfiles)
  })
  
  const combinedStockArr = combinedStockObject(mockSearchResponse,mockBulkProfilesData.companyProfiles)
  console.log(`combinedStockArr = ${combinedStockArr}`);
  
    showResults(combinedStockArr)




function combinedStockObject(results, profileData) {
  console.log(`results = ${results}`);
  console.log(`profileData = ${profileData}`);

  
  const combinedArr = [];
  results.forEach((item) => {
  console.log(`item = ${item.symbol}`);
    
    const profile = profileData.find((p) => p.symbol === item.symbol);
    if (profile) {
      combinedArr.push({
        symbol: item.symbol,
        name: item.name,
        image: profile.profile.image,
        changes: profile.profile.changes,
      });
    }
  });

  return combinedArr;
}


