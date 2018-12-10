import React, { Component } from "react";
import Filter from './components/Filter';
import SlideFilter from './components/SlideFilter';
import CheckboxFilter from './components/CheckboxFilter'

import "./style.scss";

class TypeFilterView extends Component {

	render() {
		return (
			<div className="col-lg-3 .d-none .d-md-block">
				<Filter filterName="Room" />
				<SlideFilter filterName="Size" />
				<CheckboxFilter filterName="Colour" />
			</div>
		);
	}
}

export default TypeFilterView;
