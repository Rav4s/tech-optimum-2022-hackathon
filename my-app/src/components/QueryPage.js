
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

    function handleOnClick(e){
        e.preventDefault();
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
        setList(<h1>Loading...</h1>)
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
                                    <dt className="list-item" style={{"font-weight": "bold"}}>{d.name} </dt>
                                    <dd> - Longitude: {d.point.lon}, Latitude: {d.point.lat}</dd>
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
                                        <dt className="list-item" style={{"font-weight": "bold"}}>{d.name} </dt>
                                        <dd> - Longitude: {d.point.lon}, Latitude: {d.point.lat}</dd>
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
            <div>
            <h1 className="header">
                Search for Destinations!
            </h1>
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
                    <h3 className="query-label">Range: </h3>
                        <input type="text" name="keyword" onChange={e=>{
                            setRange(e.target.value)
                        }}placeholder="in meters"/>
                    </label>
                    </div>
                    
                    <input type="submit" value="Search" />
                </form>

            </div>
            {list}
            
        </div>
    )
}