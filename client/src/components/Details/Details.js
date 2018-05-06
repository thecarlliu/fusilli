import React from "react";
import "./Details.css";

const contactInfo = require("../../contactInfo.json");

const Details = () => (
	<div className="detailsArea grid-x medium-12">
		<div className="contactInfo cell-x medium-6">
			<p>{contactInfo.name}</p>
			<p>{contactInfo.street}</p>
			<p>{contactInfo.cityStateZip}</p>
			<p>{contactInfo.phone}</p>
		</div>
	</div>
)

export default Details;