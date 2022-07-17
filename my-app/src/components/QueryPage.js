
import { Link } from "react-router-dom"
import { checkForPreferences } from "./firebase"
import { autoSuggestPlace } from "../Modules/openMapTripAPI";

export default function QueryPage(){

    function handleOnClick(e){
        if("geolocation" in navigator){
            console.log("available")
        } else{
            console.log("Not Available");
            alert("Allow Geo Location for Application to work")
            return
        }
        checkForPreferences().then((d)=>{
            console.log(d)
            if(!d){
                alert("Update Preferences First")
                return
            }
        })

    }
    return(
        <div>
            <h1>
                Search for Destinations!
            </h1>
            <h3>
                <Link to='/customize'>
                    Need to update preferences?
                </Link>
            </h3>
            <div>
                <button onClick={handleOnClick}>
                    Search
                </button>
            </div>
            
        </div>
    )
}