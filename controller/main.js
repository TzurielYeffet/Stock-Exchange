import {searchInput} from "../model/stock-search.js";
import {mockData} from "../model/mockRequestData.js";
import {showResults} from  "../view/stockSearchResults.js"

const mockResponse = mockData
$(".stock-search-btn").on("click",function(){
    const input = $(".stock-search-input").val();
    console.log(input);
    showResults(mockResponse);
    // searchInput(input);
})