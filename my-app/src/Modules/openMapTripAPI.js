let apiKey = "5ae2e3f221c38a28845f05b6fb84e1655d2dfb8b81834c5283a5dfae"
let databaseURL = "http://api.opentripmap.com/0.1/en/places?"

export async function autoSuggestPlace(name, radius, lon, lat, category, callback){
    let requestURL = databaseURL + "name=" + name + "&radius="+radius+"&lon="+lon+"&lat=" + lat + "&kind=" + category + "&format=json" + "&apikey=" + apiKey
    let response = await fetch(requestURL)
    let data = await response.json()
    if(typeof(callback)=="function"){
        callback(data);
    } else{
        return data;
    }
}