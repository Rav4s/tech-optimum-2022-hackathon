import React from "react";
import { updateUserPreferences } from "./firebase";
import "../styles/UserPreferences.css";

const budgetTypes = {
    '$': {
        val: "low",
    },
    '$$': {
        val: 'medium'
    },
    '$$$': {
        val: 'high'
    }
}

const travelTypes = {
    'car/bus': {
        val: 'land'
    },
    'Airplane': {
        val: 'air'
    },
    'Cruise': {
        val: 'water'
    }
}

const categoryTypes = {
    'Natural': {
        val: 'natural'
    },
    'Architecture': {
        val: 'architecture'
    },
    'Cultural': {
        val: 'cultural'
    },
    'Historic': {
        val: 'historic'
    }
}

export default function UserPreferences() {
    const [travelType, setTravelType] = React.useState("air")
    const [budget, setBudget] = React.useState("medium")
    const [categories, setCategories] = React.useState([])

    function handleSubmit(e) {
        updateUserPreferences({
            travelType: travelType,
            budgetType: budget,
            categoryTypes: categories
        })
        e.preventDefault();
    }


    return (
        <>
            <div className="prefs-container">
            <div className="header">
                <h1>User Preferences</h1>
            </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>
                            Budget Type:
                            <select value={budget} onChange={(e) => { setBudget(e.target.value) }}>
                                {Object.keys(budgetTypes).map((i) => {
                                    return <option key={i} value={budgetTypes[i].val}>{i}</option>
                                })}
                            </select>
                        </label>
                    </div>
                    <div>
                        <label>
                            Travel Type:
                            <select value={travelType} onChange={(e) => { setTravelType(e.target.value) }}>
                                {Object.keys(travelTypes).map((i) => {
                                    return <option key={i} value={travelTypes[i].val}>{i}</option>
                                })}
                            </select>
                        </label>
                    </div>
                    <div>
                        <label for="categories">
                            Categories Select:
                            {Object.keys(categoryTypes).map((i) => {
                                return (
                                    <div>
                                        {i}
                                        <input type="checkbox" id={i} name={i} value={categoryTypes[i].val} onChange={(e) => {
                                            if (e.target.checked) {
                                                setCategories(old => {
                                                    return [...old, e.target.value]
                                                })
                                            } else {
                                                setCategories(categories.filter(data => data != e.target.value))
                                            }
                                        }} />
                                    </div>)
                            })}
                            {/* <select name="categories" id = "categories" onChange={(e)=>{
                            console.log(e)
                            setCategories(e.target.value)}} multiple>
                            {Object.keys(categoryTypes).map((i)=>{
                                console.log(i)
                                console.log(categoryTypes[i].val);
                                return <option key={i} value = {categoryTypes[i].val}>{i}</option>
                            })}
                        </select> */}
                        </label>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </>
    )
}