import React, { Component } from "react";
import Slider from "react-slick";
import CarouselItem from "../CarouselItem";
import CarouselArrow from '../CarouselArrow'
import "./style.scss";

class LastestCarousel extends Component {
	render() {
		const settings = {
			infinite: false,

			speed: 300,
			slidesToShow: 4,
			responsive: [
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						arrows: true,
						dots: true
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						arrows: true,
						dots: true
					}
				}
			],
			nextArrow: <CarouselArrow />,
			prevArrow: <CarouselArrow />
		};
		return (
			<ul className="list-unstyled latest-carousel">
				<Slider ref={slider => (this.slider = slider)} {...settings}>
					<CarouselItem
						imagePath={require("../../../../images/5105-411_main_1.jpg")}
					/>
					<CarouselItem
						imagePath={require("../../../../images/5105-411_main_1.jpg")}
					/>
					<CarouselItem
						imagePath={require("../../../../images/5105-411_main_1.jpg")}
					/>
					<CarouselItem
						imagePath={require("../../../../images/5105-411_main_1.jpg")}
					/>
				</Slider>
			</ul>
		);
	}
}
export default LastestCarousel;
