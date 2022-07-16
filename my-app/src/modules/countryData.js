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


