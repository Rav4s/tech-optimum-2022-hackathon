const URL = "https://restcountries.com/v3.1/name/";
//returns all info about country
async function getDataByName(countryName) {
    const requestURL = URL + countryName;
    let response = await fetch(requestURL);
    let data = await response.json();
    return data;
}

//returns array with lat and lng
export async function getCoordinates(countryName) {
    let data = await getDataByName(countryName);
    return data[0].latlng;
}

//returns an array of all currencies given a country name
export async function getCurrency(countryName) {
    let data = await getDataByName(countryName);
    return Object.values(data[0].currencies);
}

//returns an array with languages used
export async function getLanguages(countryName) {
    let data = await getDataByName(countryName);
    return Object.values(data[0].languages);
}

//returns an svg of the given country's flag
export async function getFlagSVG(countryName) {
    let data = await getDataByName(countryName);
    return data[0].flags[0];
}

//returns a string of the capital city name
export async function getCapitalCity(countryName) {
    let data = await getDataByName(countryName);
    return data[0].capital;
}

//returns the region name of the country
export async function getRegion(countryName) {
    let data = await getDataByName(countryName);
    return data[0].subregion;
}

//returns true if the given nation has access to the ocean
export async function hasOceanAccess(countryName) {
    let data = await getDataByName(countryName);
    return (!data[0].landlocked);
}