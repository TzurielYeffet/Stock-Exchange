// import {searchInput} from "../model/stock-search.js";
import {
  mockCompanyProfile,
  mockSearchData,
  mockBulkProfileData,
   mockStockListData,
} from "../model/mockRequestData.js";
import { showResults } from "../view/stockSearchResults.js";
import { getListOfStock } from "../model/marqueeData.js";
import { Marquee } from "../view/Marquee.js";

// import { searchInput } from "../model/stock-search.js";
const mockCompanyProfileResults = mockCompanyProfile;
const mockSearchResponse = mockSearchData;
const mockBulkProfilesData = mockBulkProfileData;

const $marquee = $("#marquee")
const marquee = new Marquee($marquee);
const listOfStocks = await getListOfStock();
marquee.render(listOfStocks)

let debounceTimer;
$(".stock-search-input").on("input", async function () {
  clearTimeout(debounceTimer);
  let results;
  const input = $(this).val().trim().toUpperCase();
  console.log(input);

  // showResults(mockSearchResponse);
  // Remove at when finish dev
  // debounceTimer = setTimeout(()=>{
  //     results = await searchInput(input);
  // },500)-> Uncomment when finish
  // const copmanyProfileData = await getBulkCompanyData(results)
  // showResults(combinedStockObject(results,copmanyProfileData))-> Uncomment when finish
  const combinedStockArr = combinedStockObject(
    mockSearchResponse,
    mockBulkProfilesData.companyProfiles
  );
});

const combinedStockArr = combinedStockObject(
  mockSearchResponse,
  mockBulkProfilesData.companyProfiles
);
// console.log(`combinedStockArr = ${combinedStockArr}`);

showResults(combinedStockArr);

function combinedStockObject(results, profileData) {
  const combinedArr = [];
  results.forEach((item) => {
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
