import {stockBaseAPIUrl,companyProfileAPI,stockApiKey,stockHistory} from "./apiEndpoints.js"


const params = new URLSearchParams(window.location.search);
const symbol  = params.get("symbol");

const companyProfileURL = `${stockBaseAPIUrl}${companyProfileAPI}${symbol}?apikey=${stockApiKey}`;
const stockHistoryURL = `${stockHistory}${symbol}&apikey=${stockApiKey}`;
export async function getCompanyProfile(){
    try{

        const response = await fetch(companyProfileURL);
        if(!response.ok){
        throw new Error("Bad response from server");

        }
        
        const data = await response.json();
        return data;
    }catch(error){
            alert("There was a problem rcivieng data from the server, Try again")
            console.log("There was a problem rcivieng data from the company profile API call");
            console.error("Fetch error:", error)
            return null;
    }

}

export async function getBulkCompanyData(symbolsArr) {
  const symbols = symbolsArr.map(symbol => symbol.symbol).join(",");
  const companyBulkProfileURL = `${stockBaseAPIUrl}${companyProfileAPI}${symbols}?apikey=${stockApiKey}`;

  try {
    const response = await fetch(companyBulkProfileURL);

    if (!response.ok) {
      throw new Error("Bad response from server");
    }

    const data = await response.json();
    return data;

  } catch (error) {
    alert("There was a problem receiving data from the server. Try again.");
    console.error("Fetch error:", error);
    return null;
  }
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