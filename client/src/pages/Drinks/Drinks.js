import React from "react";
import "./Drinks.css";

const drinksList = require("../../drinksList.json");

const Drinks = () => (
  <div>
    <div className="grid-x medium-12">
    	{
    		drinksList.map((drink)=>(
    			<div className="cell medium-4">
	    			<img src={drink.image} alt=""/>
	    			<h4>{drink.name}</h4>
	    			{
	    				drink.types.map((drinkType)=>(
                            <div>
                                <h5>{drinkType.name}</h5>
                                <ul>
                                    {
                                        drinkType.list.map((drink)=>(
                                            <li>{drink}</li>
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