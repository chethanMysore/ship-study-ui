// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AnimatedView, Label, StatsCard } from '../../components';
import CustomModal from '../../newComponents/CustomModal';
import CanvasJSReact from '../../util/js/canvasjs.react';
import { fetchFeatureImportance } from '../../redux/actions';
import { addSymbols } from '../../util/Utils';
import { importanceSelector } from '../../redux/selectors';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class FeatureImportance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      selectedBin: null,
      title: 'Feature Description',
    };

    this.toggle = this.toggle.bind(this);
  }
  toggle(e) {
    console.log('e', e);
    this.setState({
      modal: !this.state.modal,
      selectedBin:
        !!e && !!e.datapoint ? e.datapoint.y : this.state.selectedBin,
    });
  }
  componentDidMount() {
    this.props.fetchFeatureImportance();
  }
  render() {
    const options = {
      animationEnabled: true,
      theme: 'light2',
      title: {
        text: 'Importance of crucial factors on diagnosis of Hepatic Steatosis',
      },
      axisX: {
        title: 'Feature Importance',
        interval: 1,
        reversed: true,
      },
      axisY: {
        title: 'Features',
        // labelFormatter: addSymbols,
      },
      data: [
        {
          type: 'bar',
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
          toolTipContent: '<span>{desc}</span>',
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
          {/* <CustomModal
            title={this.state.title}
            modal={this.state.modal}
            toggle={this.toggle}
          >
            <StatsCard statValue={''} statLabel={'title'} backColor={'green'} />
          </CustomModal> */}
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
