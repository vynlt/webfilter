import React, { Component } from "react";
import "./style.scss";

class BrandHead extends Component {
	render() {
		return (
			<div className="inner">
				<img
					src={this.props.headItem.brandImage}
					className="img-fluid"
					alt="$name"
					width="694"
					height="382"
				/>
				<div className="caption text-center">
					<div className="title">{this.props.headItem.title}</div>
					<p className="desc">{this.props.headItem.quote}</p>{" "}
					<a
						className="text-uppercase no-underline"
						href="/Brands-and-Designers/Anthony-Cox"
						title="See Designer"
					>
						{this.props.headItem.isDesigner ? "See Designer" : "See Brand"}
					</a>
				</div>
			</div>
		);
	}
}
export default BrandHead;
