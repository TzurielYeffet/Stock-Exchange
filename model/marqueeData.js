import { stockBaseAPIUrl,listOfStocks,stockApiKey } from "./apiEndpoints.js";

export async function getListOfStock(){
    try{
        const response  = await fetch(`${stockBaseAPIUrl}${listOfStocks}${stockApiKey}`)
        console.log(response);
        
        if(!response.ok){
            throw new Error("Error accessing the server");
        }
        let data = await response.json();
        console.log(data.slice(0,50));
        
        return data.slice(0,50);
    }catch(error){
        alert("There was a problem rcivieng data from the API call")
        console.error("Fetch error: ",error);
        return null
    }

}