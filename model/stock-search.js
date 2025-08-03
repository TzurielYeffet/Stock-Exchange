
import {stockApiKey,stockBaseAPIUrl,stockQuerys} from "./apiEndpoints.js";




export async function searchInput(input){
    console.log(`${stockBaseAPIUrl}`+`${input}`+ `${stockQuerys}`+`${stockApiKey}`);
    
    const baseURL = `${stockBaseAPIUrl}`+`${input}`+ `${stockQuerys}`+`${stockApiKey}`
    
    const response = await fetch(baseURL);
    if(!response){
        alert("There was a problem rcivieng data from the server, Try again")
        console.log("There was a problem rcivieng data from the API call");
        return;
    } 
    let data = await response.json();
    console.log(data);
    
} 