import React, { Component } from "react";
import "./style.scss";

const CarouselArrow = props => {
	const { className, style, onClick } = props;
	return (
		<button
			className={className}
			style={{ ...style }}
			onClick={onClick}
		/>
	);
}

export default CarouselArrow;