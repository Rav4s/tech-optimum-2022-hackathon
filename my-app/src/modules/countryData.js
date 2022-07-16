const URL = "https://restcountries.com/v3.1/name/";
//returns all info about country
export async function getDataByName(countryName) {
    const requestURL = URL + countryName;
    let response = await fetch(requestURL);
    let data = await response.json();
    return data;
}

export async function getCoordinates(countryName) {
    const requestURL = URL + countryName;
    let response = await fetch(requestURL);
    let data = await response.json();
    let json = JSON.parse(data);
    console.log(json.latlng);
    console.log(data[2]);
}