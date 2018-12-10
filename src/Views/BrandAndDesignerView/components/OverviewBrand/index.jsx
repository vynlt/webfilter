import React, { Component } from "react";
import HeadOverview from '../HeadOverview'
import LastestCarousel from '../LastestCarousel';
import "./style.scss";

class OverviewBrand extends Component {
	render() {
		return (
			<div className="overview-brands" id={this.props.id} >
				<div className="container no-limit-sm">
						<HeadOverview headItem={this.props.headItem}/>	
						<LastestCarousel />	
				</div>

			</div>
			)
	}
}

export default OverviewBrand;