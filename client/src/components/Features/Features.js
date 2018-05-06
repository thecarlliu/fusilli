import React from "react";
import "./Features.css";

const features = require("../../features.json");

const Features = () => (
	<div className="featuresArea grid-x medium-12">
		{
			features.map((feature)=>(
				<div className="feature cell medium-4">
					<a href={feature.name}>
						<h4>{feature.name}</h4>
					</a>
				</div>
			))
		}
	</div>
)

export default Features;