import React, { Component } from "react";
import Slider from "react-slick";
import ReactDOM from "react-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";

class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isSticky: false,
			active: 0,
			activeSlide: 0
		};
		let isScrolling;
	}

	componentDidMount() {
		window.addEventListener("scroll", this.handleScroll, false);
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.handleScroll);
	}

	handleScroll = () => {
		window.clearTimeout(this.isScrolling);
		const heightToShow = ReactDOM.findDOMNode(this).offsetTop;
		let node =
			ReactDOM.findDOMNode(this).nextElementSibling ||
			ReactDOM.findDOMNode(this).nextSibling;
		for (var i = 0; i < 9; i++) {
			let itemOffset = ReactDOM.findDOMNode(node).offsetTop;
			let itemHeight = ReactDOM.findDOMNode(node).offsetHeight;
			if (
				window.pageYOffset >= itemOffset &&
				window.pageYOffset < itemOffset + itemHeight
			) {
				this.setState({ active: i });
			}
			node = node.nextElementSibling || node.nextSibling;
		}
		if (window.pageYOffset >= heightToShow) {
			this.setState({ isSticky: true });
		} else if (window.pageYOffset < heightToShow) {
			this.setState({ isSticky: false });
		}
		this.isScrolling = setTimeout(() => {
			
			if (window.innerWidth <= 1200) {
				this.slider.slickGoTo(this.state.active);
			}
		}, 66);
	};

	createNavTabs = () => {
		let table = [];
		for (let i = 0; i < 9; i++) {
			table.push(
				<li key={i} className={this.state.active === i ? "active" : ""}>
					<a className={"btn-scroll no-underline"} href={"#cox" + i}>
						{this.props.headItems[i].title}
					</a>
				</li>
			);
		}
		return table;
	};

	render() {
		const settings = {
			infinite: false,
			arrows: false,
			speed: 300,
			variableWidth: true,
			responsive: [
				{
					breakpoint: 1980,
					slidesToShow: 9,
				},
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			],
			afterChange: current => this.setState({ activeSlide: current })
		};
		return (
			<div className="list-brands">
				<div
					className={
						"outer " + (this.state.isSticky ? "navbar-fix" : "")
					}
				>
					<div className="container no-margin">
						<ul className="list-unstyled no-margin-bottom">
							<Slider
								ref={slider => (this.slider = slider)}
								{...settings}
							>
								{this.createNavTabs()}
							</Slider>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
export default NavBar;
