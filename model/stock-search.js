
import {stockApiKey,stockBaseAPIUrl,stockQuerys,searchStock} from "./apiEndpoints.js";




export async function searchInput(input){
    console.log(`${stockBaseAPIUrl}`+`${searchStock}` +`${input}`+ `${stockQuerys}`+`${stockApiKey}`);
    
    const searchURL = `${stockBaseAPIUrl}`+ `${searchStock}` +`${input}`+ `${stockQuerys}`+`${stockApiKey}`
    
    const response = await fetch(searchURL);
    if(!response){
        alert("There was a problem rcivieng data from the server, Try again")
        console.log("There was a problem rcivieng data from the API call");
        return;
    } 
    let data = await response.json();
    console.log(data);
    
} 