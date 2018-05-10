import React from "react";
import "./Features.css";

const features = require("../../features.json");
const featureIcon = require("../../images/featureIcon.png");

const Features = () => (
	<div className="featuresArea grid-x medium-12">
		{
			features.map((feature)=>(
				<div className="feature cell medium-4">
                    <img className="feature-icon" src={featureIcon} alt=""/>
					<a href={feature.name}>
						<h4>{feature.name}</h4>
					</a>
				</div>
			))
		}
	</div>
)

export default Features;