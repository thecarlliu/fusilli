import React from "react";
import "./Menu.css";

const menuList = require("../../menuList.json");
const menuIcon = require("../../images/featureIcon.png");

const Menu = () => (
  <div className="menu-content">
    <div className="grid-x medium-12">
    	{
    		menuList.map((menu)=> (
    			<div className="cell medium-4">
	    			<img className="menu-img" src={menuIcon} alt=""/>
	    			<h4>{menu.name}</h4>
                    { menu.name==="Desserts" ? (
                    <div>
                     { menu.list.map((item)=>(
                         <p>{item}</p>
                            ))
                        }
                        </div>
                    ) : (menu.types.map((menuType)=>(
                                <div>
                                <h5>{menuType.name}</h5>
                                <ul>
                                {
                                    menuType.list.map((item) => (
                                        <p>{item}</p>
                                    ))
                                }
                                </ul>
                                </div>
                            ))
                        )
                    }
	    		</div>
	    	))
	    }		
    </div>
  </div>
);

export default Menu;