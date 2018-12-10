import React, { Component } from "react";
import $ from "jquery";
import "jquery-ui/themes/base/core.css";
import "jquery-ui/themes/base/theme.css";
import "jquery-ui/themes/base/slider.css";
import "jquery-ui/ui/core";
import "jquery-ui/ui/widgets/slider";

class SlideFilter extends Component {
    componentDidMount = () => {
        $("#width-inches").slider({
            range: true,
            min: 0,
            max: 500,
            values: [75, 300],
            slide: function(event, ui) {
                $("#inch-width-min").val(ui.values[0]);
                $("#inch-width-max").val(ui.values[1]);
            }
        });
        
        $("#width-inches span:nth-of-type(1)").append(
            "<input data-item-filter='size' data-target='#cm' data-type-size='cm' name='Width' id='inch-width-min' type='text' style='left: 50%;' />"
        );
        $("#width-inches span:nth-of-type(2)").append(
            "<input data-item-filter='size' data-target='#cm' data-type-size='cm' name='Width' id='inch-width-max' type='text' style='left: 50%;' />"
        );
        $("#inch-width-min").val($("#width-inches").slider("values", 0));
         $("#inch-width-max").val($("#width-inches").slider("values", 1));
    };
    render() {
        return (
            <div className="list-filter-links block-size">
                <div className="type-head">
                    <div className="head">
                        <label data-toggle="collapse" data-target={"#" + this.props.filterName}>
                            {" "}
                            {this.props.filterName}
                        </label>
                        <button
                            className="active"
                            data-toggle-size="inches"
                            type="button"
                            data-target="#size-inches"
                            data-input="#inches"
                        >
                            Inches
                        </button>
                        <button
                            data-toggle-size="cm"
                            type="button"
                            data-target="#size-cm"
                            data-input="#cm"
                        >
                            cm
                        </button>
                    </div>
                    <span className="collapse-icon">
                        <a
                            className="hidden-sm hidden-xs"
                            href="/"
                            title="Size"
                            data-toggle="collapse"
                            data-target={"#" + this.props.filterName}
                        >
                            <span className="sr-only">Collapse</span>
                            <span className="btn-collapse" />
                        </a>
                    </span>
                </div>
                <div
                    className="list-filter collapse in"
                    data-list-filter=""
                    id="Size"
                >
                    <input
                        type="hidden"
                        name="cm"
                        value="false"
                        id="cm"
                        data-item-filter="object"
                    />
                    <input
                        type="hidden"
                        name="inches"
                        value="true"
                        id="inches"
                        data-item-filter="object"
                    />

                    <div
                        className="tab-size active"
                        id="size-inches"
                        data-content-size=""
                    >
                        <div className="form-group">
                            <div className="title-group">Width</div>
                            <div className="slider-range" id="width-inches" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SlideFilter;
