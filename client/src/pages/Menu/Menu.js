import React from "react";
import "./Menu.css";

const menuList = require("../../menuList.json");

const Menu = () => (
  <div>
    <div className="grid-x medium-12">
    	{
    		menuList.map((menu)=>(
    			<div className="cell medium-4">
	    			<img src={menu.image} alt=""/>
	    			<h4>{menu.name}</h4>
                    {
                        if (menu.name==="Desserts") {
                            menu.list.map((item)=>(
                                <li>{item}</li>
                            ))
                        }

                        else {
                            menu.types.map((menuType)=>(
                                <div>
                                <h5>{menuType.name}</h5>
                                <ul>
                                {
                                    menuType.list.map((item) => (
                                        <li>{item}</li>
                                    ))
                                }
                                </ul>
                                </div>
                            ))
                        }
                    }
	    		</div>
	    	))
	    }		
    </div>
  </div>
);

export default Menu;