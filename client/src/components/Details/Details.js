import React from "react";
import "./Details.css";

const contactInfo = require("../../contactInfo.json");

const Details = () => (
	<div className="detailsArea grid-x medium-12">
        <div className="cell-x medium-4"></div>
        <div className="cell-x medium-4"></div>
		<div className="contactInfo cell-x medium-4">
			<p>{contactInfo.name}</p>
			<p>{contactInfo.street}</p>
			<p>{contactInfo.cityStateZip}</p>
			<p>{contactInfo.phone}</p>
		</div>
	</div>
)

export default Details;