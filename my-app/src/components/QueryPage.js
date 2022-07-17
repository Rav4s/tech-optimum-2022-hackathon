
import { Link } from "react-router-dom"
import { checkForPreferences, getPreferences } from "./firebase"
import { autoSuggestPlace } from "../Modules/openMapTripAPI";
import { getCoordinates } from "../Modules/countryData";
import React from "react";
import '../styles/QueryPage.css'
export default function QueryPage(){
    const [keyword,setKeyWord] = React.useState("")
    const [range, setRange] = React.useState(0)
    const [list, setList] = React.useState(<div/>)

    function makeLink(lat, long) {
        return "https://www.google.com/maps/search/?api=1&query=" + lat + "," + long;
    }

    function handleOnClick(e){
        e.preventDefault();
        if("geolocation" in navigator){
            console.log("available")
        } else{
            console.log("Not Available");
            alert("We need location access to recommend travel options")
            return
        }
        checkForPreferences().then((d)=>{
            console.log(d)
            if(!d){
                alert("Please update preferences first")
                return
            }
        })
        setList(<h1>Loading your results...</h1>)
        getPreferences().then(d=>{
            console.log(d)
            let categoryParam = ""
            if(d.categoryTypes.length > 1){
                d.categoryTypes.map(i=>{
                    categoryParam += i + ','
                })
                categoryParam.slice(0,-1)
            } else{
                categoryParam = d.categoryTypes[0]
            }
            navigator.geolocation.getCurrentPosition(function(pos){
                
                autoSuggestPlace(keyword,range,pos.coords.longitude,pos.coords.latitude,categoryParam).then(dat=>{
                    if(dat.length > 0){
                        setList(
                            <dl className="list">
                                {dat.map(d=>{
                                    return(<>
                                    <dt className="list-item" style={{"font-weight": "bold"}}><a href={makeLink(d.point.lat, d.point.lon)}>{d.name}</a></dt>
                                    </>)
                                })}
                            </dl>
                        )
                    } else{
                        setList(<h1>Nothing found, try increasing range.</h1>)
                    }
                    console.log(dat)
                })
            },function(){
                alert("US default Coordinates being used")
                getCoordinates("United States").then(coords =>{
                    autoSuggestPlace(keyword,range,coords[1],coords[0],categoryParam).then(dat=>{
                        if(dat.length > 0){
                            setList(
                                <dl className="list">
                                    {dat.map(d=>{
                                        return(<>
                                        <dt className="list-item" style={{"font-weight": "bold"}}><a href={makeLink(d.point.lat, d.point.lon)}>{d.name}</a> </dt>
                                        </>)
                                    })}
                                </dl>
                            )
                        } else{
                            setList(<h1>Nothing found, try increasing range</h1>)
                        }
                        console.log(dat)
                    })
                })
            })
        })
        
        
    }
    return(
        <div className="query-container">
            <div className="header">
                <h1>Search for Destinations!</h1>
            </div>
            <div className="desc">
                <p>We can help you find your perfect travel destination using your personal preferences! Our prediction algorithm will recommend locations you should visit around the world. Try it out now!</p>
            </div>
            
            <h3>
                <Link to='/customize'>
                    Need to update preferences?
                </Link>
            </h3>
            <div>
                <form onSubmit={handleOnClick}>
                    <div className="query-item">
                    <label>
                        <h3 className="query-label">Keyword:  </h3>
                        <input type="text" name="keyword" onChange={e=>{
                            setKeyWord(e.target.value)
                        }}/>
                    </label>
                    </div>
                    <div className="query-item">
                    <label>
                    <h3 className="query-label">Range (km): </h3>
                        <input type="text" name="keyword" onChange={e=>{
                            setRange(e.target.value * 1000)
                        }}placeholder="in kilometers"/>
                    </label>
                    </div>
                    
                    <input type="submit" value="Search" />
                </form>

            </div>
            {list}
            
        </div>
    )
}