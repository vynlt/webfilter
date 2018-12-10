import React, { Component } from "react";
import ListFilterItem from "../ListFilterItem";

class Filter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filterData: [
				{
					id: "a",
					name: "Accent Furniture",
					subList: [
						{
							id: "a0",
							name: "Cabinets & Shelving",
							subList: [
								{
									id: "a00",
									name: "Cabinets & Shelving",
									subList: [
										{
											id: "a000",
											name: "Cabinets & Shelving",
											subList: [
												{
													id: "a0000",
													name: "Cabinets & Shelving"
												}
											]
										}
									]
								}
							]
						},
						{
							id: "a1",
							name: "Cabinets & Shelving"
						}
					]
				},
				{
					id: "b",
					name: "Accent Furniture",
					subList: [
						{
							id: "b0",
							name: "Cabinets & Shelving"
						}
					]
				},
				{
					id: "c",
					name: "Accent Furniture",
					subList: [
						{
							id: "c0",
							name: "Cabinets & Shelving"
						}
					]
				}
			],
			current: ""
		};
	}

	makeFilterList = () => {
		let filterList = [];

		for (let i = 0; i < this.state.filterData.length; i++) {
			filterList.push(
				<ListFilterItem
					key={"Room" + i}
					filterName={this.props.filterName}
					filterDataItem={this.state.filterData[i]}
					current={this.state.current}
					onClick={this.handleOnClick}
				/>
			);
		}
		return filterList;
	};

	handleOnClick = id => {
		this.setState({
			current: id
		});
	};

	render() {
		console.log(this.state.current);
		return (
			<div className="list-filter-links">
				<h4 className="type-head">
					<span
						className="head"
						data-toggle="collapse"
						data-target={"#" + this.props.filterName}
						aria-expanded="true"
					>
						{this.props.filterName}
					</span>
					<span className="collapse-icon">
						<a
							className="hidden-sm hidden-xs"
							href="javascript:void(0);"
							title={this.props.filterName}
							data-toggle="collapse"
							data-target={"#" + this.props.filterName}
							aria-expanded="true"
						>
							<span className="sr-only">Collapse</span>
							<span className="btn-collapse" />
						</a>
					</span>
				</h4>

				<div
					className="list-filter collapse in"
					data-list-filter=""
					id={this.props.filterName}
					aria-expanded="true"
				>
					{this.makeFilterList()}
				</div>
			</div>
		);
	}
}

export default Filter;
