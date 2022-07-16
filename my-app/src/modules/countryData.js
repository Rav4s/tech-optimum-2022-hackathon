const URL = "https://restcountries.com/v3.1/name/";
//returns all info about country
export async function getDataByName(countryName) {
    const requestURL = URL + countryName;
    let response = await fetch(requestURL);
    let data = await response.json();
    return data;
}

//returns array with lat and lng
export async function getCoordinates(countryName) {
    const requestURL = URL + countryName;
    let response = await fetch(requestURL);
    let data = await response.json();
    return data[0].latlng;
}

//returns a json object of all currencies given a country name
export async function getCurrency(countryName) {
    const requestURL = URL + countryName;
    let response = await fetch(requestURL);
    let data = await response.json();
    return data[0].currencies;
}

//returns 
export async function getLanguages(countryName) {

}

//returns an svg of the given country's flag
export async function getFlagSVG(countryName) {

}

//returns a string of the capital city name
export async function getCapitalCity(countryName) {

}

//returns the region name of the country
export async function getRegion(countryName) {

}

//returns true if the given nation has access to the ocean
export async function hasOceanAccess(countryName) {

}