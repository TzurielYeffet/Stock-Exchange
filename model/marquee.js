import { stockBaseAPIUrl,listOfStocks,stockApiKey } from "./apiEndpoints.js";

export async function getListOfStock(){
    try{
        const response  = await fetch(`${stockBaseAPIUrl}${listOfStocks}${stockApiKey}`)
        console.log(response);
        
        if(!response.ok){
            throw new Error("Error accessing the server");
        }
        let data = await response.json();
        return data;
    }catch(error){
        alert("There was a problem rcivieng data from the API call")
        console.error("Fetch error: ",error);
        return null
    }

}