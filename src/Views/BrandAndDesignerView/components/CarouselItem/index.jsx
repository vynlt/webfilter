import React, { Component } from "react";
import "./style.scss";

class CarouselItem extends Component {
	render() {
		return (
			<li>
				<a
					href="/Products/Hillsdale-Cocktail"
					title="Hillsdale Cocktail"
				>
					<div class="img-wrap">
						<img
							class="img-responsive"
							src={this.props.imagePath}
							alt="Theodore Alexander"
						/>
					</div>

					<span class="name">
						Hillsdale Cocktail
						<span class="status">New</span>
					</span>
				</a>
			</li>
		);
	}
}
export default CarouselItem;
