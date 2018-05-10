import React from "react";
import "./Drinks.css";

const drinksList = require("../../drinksList.json");
const drinkIcon = require("../../images/featureIcon.png");

const Drinks = () => (
  <div className="drinks-content">
    <div className="grid-x medium-12">
    	{
    		drinksList.map((drink)=>(
    			<div className="cell medium-4">
	    			<img className="drinks-img" src={drinkIcon} alt=""/>
	    			<h4>{drink.name}</h4>
	    			{
	    				drink.types.map((drinkType)=>(
                            <div>
                                <h5>{drinkType.name}</h5>
                                <ul>
                                    {
                                        drinkType.list.map((drink)=>(
                                            <p>{drink}</p>
                                        ))
                                    }
                                </ul>
                            </div>
	    				))
	    			}
	    		</div>
    		))
    	}
    </div>
  </div>  
);

export default Drinks;