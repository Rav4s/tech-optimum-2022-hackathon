
import { Link } from "react-router-dom"
export default function QueryPage(){
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
        </div>
    )
}