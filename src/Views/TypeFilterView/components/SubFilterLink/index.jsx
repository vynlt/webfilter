import React, { Component } from "react";
import "./style.scss";

class SubFilterLink extends Component {
	constructor(props) {
		super(props);
		this.state = {
			subList: this.props.subList
		};
	}
	makeSubFilterList = subList => {
		let filterList = [];

		if (
			this.props.current.substring(0, subList[0].id.length - 1) !==
			subList[0].id.substring(0, subList[0].id.length - 1)
		)
			return "";

		for (let i = 0; i < subList.length; i++) {
			filterList.push(
				<li id={i}>
					<input
						className="hidden"
						id={subList[i].id}
						type="checkbox"
						value={subList[i].id}
						name="Category"
					/>
					<label className="hidden" htmlfor={subList[i].id}>
						{subList[i].name}
					</label>

					<a
						href="#"
						className={
							(this.props.current.substring(
								0,
								subList[i].id.length
							) === subList[i].id
								? "active"
								: "") + " no-underlined"
						}
						title="Cabinets &amp; Shelving"
						onClick={() => {
							this.props.onClick(subList[i].id);
						}}
					>
						{subList[i].name === undefined
							? subList[i]
							: subList[i].name}
					</a>
					{this.props.current.substring(0, subList[i].id.length) ===
						subList[i].id && subList[i].subList !== undefined
						? this.makeSubFilterList(subList[i].subList)
						: ""}
				</li>
			);
		}

		return (
			<ul className="list-unstyled sub-filter-links"> {filterList}</ul>
		);
	};

	render() {
		return this.makeSubFilterList(this.state.subList);
	}
}

export default SubFilterLink;
