// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AnimatedView } from '../../components';
import CanvasJSReact from '../../util/js/canvasjs.react';
import { fetchFeatureImportance } from '../../redux/actions';
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const importanceSelector = featureImportance => {
  let importanceData = [];
  const xCords = featureImportance[0];
  const yCords = featureImportance[1];
  if (
    !!featureImportance &&
    featureImportance.length > 0 &&
    !!xCords &&
    !!yCords &&
    xCords.length == yCords.length
  ) {
    xCords.forEach((data, index) => {
      importanceData.push({ label: xCords[index], y: yCords[index] });
    });
  }
  return importanceData;
};

class FeatureImportance extends Component {
  constructor(props) {
    super(props);
    this.addSymbols = this.addSymbols.bind(this);
  }
  componentDidMount() {
    this.props.fetchFeatureImportance();
  }
  addSymbols(e) {
    var suffixes = ['', 'K', 'M', 'B'];
    var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
    if (order > suffixes.length - 1) {
      order = suffixes.length - 1;
    }
    var suffix = suffixes[order];
    return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
  }
  render() {
    console.log(
      'this.props.fetchFeatureImportance',
      this.props.fetchFeatureImportance,
    );
    const options = {
      animationEnabled: true,
      theme: 'light2',
      title: {
        text: 'Most Popular Social Networking Sites',
      },
      axisX: {
        title: 'Social Network',
        reversed: true,
      },
      axisY: {
        title: 'Monthly Active Users',
        labelFormatter: this.addSymbols,
      },
      data: [
        {
          type: 'bar',
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
        },
      ],
    };

    return (
      <AnimatedView>
        <div>
          <CanvasJSChart
            options={options}
            /* onRef={ref => this.chart = ref} */
          />
          {/* You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
        </div>
      </AnimatedView>
    );
  }
}

const mapStateToProps = ({ api }) => {
  const featureImportanceData = importanceSelector(api.featureImportanceData);
  return { featureImportanceData };
};

export default connect(mapStateToProps, { fetchFeatureImportance })(
  FeatureImportance,
);
