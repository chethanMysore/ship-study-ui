// @flow

import React, { Component } from "react";
import { connect } from "react-redux";
import { AnimatedView, Label, StatsCard } from "../../components";
import CustomModal from "../../newComponents/CustomModal";
import CanvasJSReact from "../../util/js/canvasjs.react";
import { fetchFeatureImportance } from "../../redux/actions";
import { addSymbols } from "../../util/Utils";
import { importanceSelector } from "../../redux/selectors";
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class FeatureImportance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      selectedBin: null,
      title: "Feature Description"
    };
    // Uncomment this for modal
    // this.toggle = this.toggle.bind(this);
  }
  // Uncomment this for modal
  // toggle(e) {
  //   console.log('e', e);
  //   this.setState({
  //     modal: !this.state.modal,
  //     selectedBin:
  //       !!e && !!e.datapoint ? e.datapoint.y : this.state.selectedBin,
  //   });
  // }
  componentDidMount() {
    // this.props.fetchFeatureImportance(ON_LOADER_HIDE);
  }

  render() {
    const width = Math.round(window.screen.width) * 0.8;
    const height = Math.round(window.screen.height) * 0.8;
    const options = {
      animationEnabled: true,
      theme: "light2",
      // height: height,
      // width: width,
      title: {
        text: "Importance of Crucial Factors on Diagnosis of Hepatic Steatosis",
        padding: 30
      },
      axisX: {
        title: "Features",
        titleFontWeight: 700,
        margin: 20,
        interval: 1,
        reversed: true
      },
      axisY: {
        title: "Feature Importance",
        margin: 20,
        titleFontWeight: 700
        // labelFormatter: addSymbols,
      },
      toolTip: {
        backgroundColor: "#eee"
      },
      data: [
        {
          type: "bar",
          // click: this.toggle,
          dataPoints: this.props.featureImportanceData,
          // dataPoints: [
          //   { y: 2200000000, label: 'Facebook' },
          //   { y: 1800000000, label: 'YouTube' },
          //   { y: 800000000, label: 'Instagram' },
          //   { y: 563000000, label: 'Qzone' },
          //   { y: 376000000, label: 'Weibo' },
          //   { y: 336000000, label: 'Twitter' },
          //   { y: 330000000, label: 'Reddit' },
          // ],
          toolTipContent: "<span>{desc}</span>"
        }
      ]
    };

    return (
      <AnimatedView>
        <div>
          <CanvasJSChart
            options={options}
            /* onRef={ref => this.chart = ref} */
          />
        </div>
      </AnimatedView>
    );
  }
}

const mapStateToProps = ({ api }) => {
  const featureImportanceData = importanceSelector(api.featureImportanceData);
  return { featureImportanceData };
};

export default connect(mapStateToProps, {
  fetchFeatureImportance
})(FeatureImportance);
