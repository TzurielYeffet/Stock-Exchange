import { STOCK_API_KEY } from "../config.js";

export const stockApiKey = STOCK_API_KEY;
export const stockBaseAPIUrl =
  "https://financialmodelingprep.com//api/v3/";

export const searchStock = "search?query=";
export const stockQuerys = "&limit=10&exchange=NASDAQ&apikey=";

export const companyProfileAPI = "company/profile/";
export const stockHistory = "https://financialmodelingprep.com/stable/historical-price-eod/light?symbol=" 
export const listOfStocks = "stock/list?apikey="