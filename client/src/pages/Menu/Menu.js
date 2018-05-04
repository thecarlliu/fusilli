import React from "react";
import "./Menu.css";

const menuList = require ("../../menuList.json");

const Menu = () => (
  <div>
    <div className="grid-x medium-12">
    	{
    		drinksList.map((menu)=>(
    			<div className="cell medium-4">
	    			<img src={menu.image} alt=""/>
	    			<h4>{menu.name}</h4>
	    			{
	    				menu.types.map((menuType)=>(
	    					<h5>{menuType.menu}</h5>
	    					<ul>
	    						{
	    							menuType.list.map((menu)=>(
	    								<li>{menu}</li>
	    							))
	    						}
	    					</ul>
	    				))
	    			}
	    		</div>
    		))
    	}
    </div>
  </div>
    
);





export default Menu;