// @flow

import React, { Component } from "react";
import { connect } from "react-redux";
import { AnimatedView, LoaderComponent } from "../../components";
import { fetchFeatureIceCoords, showIceLoader } from "../../redux/actions";
import { ON_ICE_LOADER_HIDE } from "../../constants/actionTypes";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import CanvasJSReact from "../../util/js/canvasjs.react";
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class IndividualFeatureExplaination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFeature: ""
    };
    this.setSelectedFeature = this.setSelectedFeature.bind(this);
  }
  componentDidMount() {
    if (
      !!this.props.featureImportanceData &&
      !!this.props.featureImportanceData.features &&
      !!this.props.fetchFeatureIceCoords
    ) {
      const defaultFeature = this.props.featureImportanceData.features[0];
      this.props.fetchFeatureIceCoords(defaultFeature, ON_ICE_LOADER_HIDE);
    }
  }

  setSelectedFeature(e) {
    const selectedFeature = e.target.value;
    this.props.fetchFeatureIceCoords(selectedFeature);
    this.setState({ selectedFeature });
  }

  render() {
    console.log("featureImportance", this.props.featureImportanceData);
    const features =
      !!this.props.featureImportanceData &&
      !!this.props.featureImportanceData.features
        ? this.props.featureImportanceData.features
        : [];
    const options = {
      animationEnabled: true,
      theme: "light2",
      axisX: {
        title: !!this.state.selectedFeature
          ? `${this.state.selectedFeature} values`
          : `Feature Values`,
        titleFontWeight: 700,
        margin: 20,
        interval: 1,
        reversed: true
      },
      axisY: {
        title: "Predicted Liver Fat Percentage",
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
          // dataPoints: this.props.featureImportanceData,
          dataPoints: [
            { y: 2200000000, label: "Facebook" },
            { y: 1800000000, label: "YouTube" },
            { y: 800000000, label: "Instagram" },
            { y: 563000000, label: "Qzone" },
            { y: 376000000, label: "Weibo" },
            { y: 336000000, label: "Twitter" },
            { y: 330000000, label: "Reddit" }
          ],
          toolTipContent: "<span>{desc}</span>"
        }
      ]
    };
    return this.props.iceLoader ? (
      <LoaderComponent />
    ) : (
      <AnimatedView>
        <div>
          <FormGroup>
            <Label for="exampleSelect">Select a feature</Label>
            <Input
              type="select"
              name="feature"
              id="selectedFeature"
              onChange={this.setSelectedFeature}
            >
              {features.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </Input>
          </FormGroup>
          {!!this.state.selectedFeature && (
            <Card>
              <CardBody>
                <CardTitle>
                  {`Effect of `} <strong>{this.state.selectedFeature}</strong>
                  {` over all participants`}
                </CardTitle>
                <CardSubtitle>
                  {`ICE plot below demonstrates the change in model prediction with respect to the change in the values of `}
                  <strong>{this.state.selectedFeature}</strong>
                  {` while keeping all other contributing features constant`}
                </CardSubtitle>
              </CardBody>
              <CardBody>
                <CanvasJSChart
                  options={options}
                  /* onRef={ref => this.chart = ref} */
                />
              </CardBody>
            </Card>
          )}
        </div>
      </AnimatedView>
    );
  }
}
const mapStateToProps = ({ api, settings }) => {
  const { featureIceCoords, featureImportanceData } = api;
  const { iceLoader } = settings;
  return { featureIceCoords, featureImportanceData, iceLoader };
};

export default connect(mapStateToProps, {
  fetchFeatureIceCoords,
  showIceLoader
})(IndividualFeatureExplaination);
