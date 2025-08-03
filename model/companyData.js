import {stockBaseAPIUrl,companyProfileAPI,stockApiKey,stockHistory} from "./apiEndpoints.js"


const params = new URLSearchParams(window.location.search);
const symbol  = params.get("symbol");

const companyProfileURL = `${stockBaseAPIUrl}${companyProfileAPI}${symbol}?apikey=${stockApiKey}`;
const stockHistoryURL = `${stockHistory}${symbol}&apikey=${stockApiKey}`;
export async function getCompanyProfile(){
    const response = await fetch(companyProfileURL);
     if(!response){
        alert("There was a problem rcivieng data from the server, Try again")
        console.log("There was a problem rcivieng data from the company profile API call");
        return;
    }

    const data = await response.json();
    return data;

}

export async function getChartInfo(){
    const response = await fetch(stockHistoryURL);
       if(!response){
        alert("There was a problem rcivieng data from the server, Try again")
        console.log("There was a problem rcivieng data from the stock History API call");
        return;
    }

    const data = await response.json();
    return data;
} 