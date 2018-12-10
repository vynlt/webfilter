import React, { Component } from "react";
import BrandHead from "../BrandHead";
import HeadImage from "../HeadImage";
import "./style.scss";

class HeadOverview extends Component {
	render() {
		return (
			<div className="head-overview row no-gutters">
				<div className="col-lg-6 col-md-8">
					<BrandHead headItem={this.props.headItem} />
				</div>
				<div className="col-lg-3 col-md-4 d-none d-md-block">
					<HeadImage headImage={this.props.headItem.headImage1} />
				</div>
				<div className="col-lg-3 d-none d-lg-block">
					<HeadImage headImage={this.props.headItem.headImage2} />
				</div>
			</div>
		);
	}
}
export default HeadOverview;
