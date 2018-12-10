import React, { Component } from "react";
import SubFilterLink from "../SubFilterLink";
import "./style.scss";

class ListFilterItem extends Component {

	render() {
		return (
			<div className="form-group">
				<div className="checkbox no-icon">
					<input
						id={this.props.filterDataItem.id}
						type="checkbox"
						value={this.props.filterDataItem.id}
						name="Room"
						data-item-filter="object-value"
					/>
					<label
						className="hidden"
						forhtml={this.props.filterDataItem.id}
					>
						Accent Furniture
					</label>
					<a
						href="#"
						className={
							(this.props.current.charAt(0) ===
							this.props.filterDataItem.id
								? "active"
								: "") + " no-underlined"
						}
						title={this.props.filterDataItem.name}
						onClick={() =>
							this.props.onClick(this.props.filterDataItem.id)
						}
					>
						{this.props.filterDataItem.name}
					</a>
					{this.props.current.charAt(0) ===
					this.props.filterDataItem.id ? (
						<SubFilterLink
							subList={this.props.filterDataItem.subList}
							onClick={this.props.onClick}
							current={this.props.current}
						/>
					) : (
						""
					)}
				</div>
			</div>
		);
	}
}

export default ListFilterItem;
