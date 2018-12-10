import React, { Component } from "react";

class HeadImage extends Component {
	render() {
		return (
			<img
				src={this.props.headImage}
				className="img-fluid"
				alt="Anthony_03"
				width="347"
				height="382"
			/>
		);
	}
}
export default HeadImage;
