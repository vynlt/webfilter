import React, { Component } from "react";

class CheckboxFilter extends Component {
	render() {
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
					class="list-filter collapse in"
					data-list-filter=""
					id="Colour"
				>
					<div class="form-group">
						<div class="checkbox">
							<input
								id="check-black"
								type="checkbox"
								value="check-black"
								name="Colour"
							/>
							<label for="check-black">
								Black
							</label>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CheckboxFilter;
