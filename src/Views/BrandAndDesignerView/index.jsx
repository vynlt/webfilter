import React, { Component } from "react";
import OverviewBrand from "./components/OverviewBrand";
import NavBar from "./components/NavBar";
import "./style.scss";

class BrandAndDesignerView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headItems: [
        {
          brandImage: require("../../images/Anthony_01.jpg"),
          headImage1: require("../../images/Anthony_03.jpg"),
          headImage2: require("../../images/Anthony_02.jpg"),
          title: "Anthony Cox",
          quote: "Innovation and Eclecticism",
          isDesigner: true
        },
        {
          brandImage: require("../../images/AL_01.jpg"),
          headImage1: require("../../images/AL_02.jpg"),
          headImage2: require("../../images/AL_03.jpg"),
          title: "Althorp Living History",
          quote: "500 Years of Living History",
          isDesigner: false
        },
        {
          brandImage: require("../../images/JD_01.jpg"),
          headImage1: require("../../images/JD_02.jpg"),
          headImage2: require("../../images/JD_03.jpg"),
          title: "Jamie Drake",
          quote: "An eclectic justaposition of materials",
          isDesigner: false
        },

        {
          brandImage: require("../../images/Keno-Bros_01.jpg"),
          headImage1: require("../../images/Keno-Bros_02.jpg"),
          headImage2: require("../../images/Keno-Bros_03.jpg"),
          title: "Keno Bros.",
          quote: "30 years in Americana",
          isDesigner: false
        },

        {
          brandImage: require("../../images/MB_01.jpg"),
          headImage1: require("../../images/MB_02.jpg"),
          headImage2: require("../../images/MB_03.jpg"),
          title: "Michael Berman",
          quote: "Quiet Luxury and Effortless Comfort",
          isDesigner: false
        },

        {
          brandImage: require("../../images/Stephen Church_01.jpg"),
          headImage1: require("../../images/Stephen Church_02.jpg"),
          headImage2: require("../../images/Stephen Church_03.jpg"),
          title: "Stephen Church",
          quote: "Quintessential British understatement",
          isDesigner: true
        },

        {
          brandImage: require("../../images/SLD_01.jpg"),
          headImage1: require("../../images/SLD_02.jpg"),
          headImage2: require("../../images/SLD_03.jpg"),
          title: "Steve Leung",
          quote: "Perfect proportions and rich tactile detailing",
          isDesigner: false
        },

        {
          brandImage: require("../../images/TA_01.jpg"),
          headImage1: require("../../images/TA_02.jpg"),
          headImage2: require("../../images/TA_03.jpg"),
          title: "Theodore Alexander",
          quote:
            "Unmatched craftsmanship, exquisite finishes and extraordinary design",
          isDesigner: false
        },

        {
          brandImage: require("../../images/Thor-Taber_01.jpg"),
          headImage1: require("../../images/Thor-Taber_02.jpg"),
          headImage2: require("../../images/Thor-Taber_03.jpg"),
          title: "Thor Taber",
          quote: "“I try to walk that fine line between past and present”",
          isDesigner: true
        }
      ]
    };
  }

  

  createOverviewBrands = () => {
    let table = [];
    for (let i = 0; i < 9; i++) {
      table.push(
        <OverviewBrand
          key={i}
          id={"cox" + i}
          headItem={this.state.headItems[i]}
        />
      );
    }
    return table;
  };

  render() {
    return (
      <div className="wrapper">
      
        <OverviewBrand id="cox-1" headItem={this.state.headItems[0]} />
        <OverviewBrand id="cox-1" headItem={this.state.headItems[0]} />
        <NavBar headItems={this.state.headItems} />
        {this.createOverviewBrands()}
      </div>
    );
  }
}

export default BrandAndDesignerView;
