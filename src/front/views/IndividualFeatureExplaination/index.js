// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AnimatedView } from '../../components';
import { fetchFeatureIceCoords } from '../../redux/actions';

class IndividualFeatureExplaination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFeature:
        !!this.props.featureImportanceData &&
        this.props.featureImportanceData.features
          ? this.props.featureImportanceData.features[0]
          : '',
      features:
        !!this.props.featureImportanceData &&
        this.props.featureImportanceData.features
          ? this.props.featureImportanceData.features
          : [],
    };
  }
  componentDidMount() {
    if (
      !!this.props.featureImportanceData &&
      this.props.featureImportanceData.features
    ) {
      const defaultFeature = this.props.featureImportanceData.features[0];
      this.props.fetchFeatureIceCoords(defaultFeature);
    }
  }
  render() {
    const { features, selectedFeature } = this.state;
    const options = {
      animationEnabled: true,
      theme: 'light2',
      axisX: {
        title: `${selectedFeature} values`,
        titleFontWeight: 700,
        margin: 20,
        interval: 1,
        reversed: true,
      },
      axisY: {
        title: 'Predicted Liver Fat Percentage',
        margin: 20,
        titleFontWeight: 700,
        // labelFormatter: addSymbols,
      },
      toolTip: {
        backgroundColor: '#eee',
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
      <div />
      // <AnimatedView>
      //   <div>
      //     <Card>
      //       <CardBody>
      //         <CardTitle>{`Effect of ${(
      //           <strong>{selectedFeature}</strong>
      //         )} over all participants`}</CardTitle>
      //         <CardSubtitle>{`ICE plot below demonstrates the change in model prediction with respect to the change in the values of ${(
      //           <strong>{selectedFeature}</strong>
      //         )} while keeping all other contributing features constant`}</CardSubtitle>
      //       </CardBody>
      //       <img width="100%" src="/assets/318x180.svg" alt="Card image cap" />
      //       <CardBody>
      //         <CanvasJSChart
      //           options={options}
      //           /* onRef={ref => this.chart = ref} */
      //         />
      //         <CardLink href="#">Card Link</CardLink>
      //         <CardLink href="#">Another Link</CardLink>
      //       </CardBody>
      //     </Card>
      //   </div>
      // </AnimatedView>
    );
  }
}
const mapStateToProps = ({ api }) => {
  const { featureIceCoords, featureImportanceData } = api;
  return { featureIceCoords, featureImportanceData };
};

export default connect(mapStateToProps, { fetchFeatureIceCoords })(
  IndividualFeatureExplaination,
);
