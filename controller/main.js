// import {searchInput} from "../model/stock-search.js";
import {mockCompanyProfile} from "../model/mockRequestData.js";
import {showResults} from  "../view/stockSearchResults.js"
import {stockBaseAPIUrl,companyProfileAPI,stockApiKey} from "../model/apiEndpoints.js"

const mockResponse = mockSearchData
$(".stock-search-btn").on("click",function(){
    const input = $(".stock-search-input").val();
    console.log(input);
    showResults(mockResponse);
    // searchInput(input);
})


const url = "https://financialmodelingprep.com/stable/analyst-estimates?symbol=GOOG&period=annual&apikey=qBgfM5MuUV98OZm3QWYklAuCO4x4A9Qm"
async function fetchData(url){
    const res = await fetch()
}



