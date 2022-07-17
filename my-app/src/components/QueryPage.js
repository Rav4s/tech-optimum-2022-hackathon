
import { Link } from "react-router-dom"
import { checkForPreferences } from "./firebase"

export default function QueryPage(){

    function handleOnClick(e){
        checkForPreferences().then((d)=>{
            if(!d){
                alert("Update Preferences First")
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