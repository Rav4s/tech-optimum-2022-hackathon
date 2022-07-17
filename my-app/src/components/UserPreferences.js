import React from "react"
const budgetTypes = {
    '$':{
        val: "low",
    },
    '$$':{
        val:'medium'
    },
    '$$$':{
        val: 'high'
    }
}

const travelTypes = {
    'car/bus':{
        val: 'land'
    },
    'Airplane':{
        val:'air'
    },
    'Cruise':{
        val:'water'
    }
}

export default function UserPreferences(){
    const [travelType,setTravelType] = React.useState("air")
    const [budget, setBudget] = React.useState("medium")

    function handleSubmit(e){
        console.log([travelType, budget])
        e.preventDefault();
    }


    return(
        <div>
            <h1>User Preferences</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Budget Type:
                        <select value={budget} onChange={(e)=>{setBudget(e.target.value)}}>
                            {Object.keys(budgetTypes).map((i)=>{
                                console.log(i)
                                console.log(budgetTypes[i].val);
                                return <option key={i} value = {budgetTypes[i].val}>{i}</option>
                            })}
                        </select>
                    </label>                   
                </div>
                <div>
                    <label>
                        Travel Type:
                        <select value={travelType} onChange={(e)=>{setTravelType(e.target.value)}}>
                            {Object.keys(travelTypes).map((i)=>{
                                console.log(i)
                                console.log(travelTypes[i].val);
                                return <option key={i} value = {travelTypes[i].val}>{i}</option>
                            })}
                        </select>
                    </label>
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}