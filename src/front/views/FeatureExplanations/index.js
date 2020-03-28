// @flow

import React, { Component } from "react";
import { connect } from "react-redux";
import { AnimatedView, LoaderComponent } from "../../components";
import {
  fetchFeatureIceCoords,
  showIceLoader,
  enterFeatureExplanations
} from "../../redux/actions";
import { ON_ICE_LOADER_HIDE } from "../../constants/actionTypes";
import { iceSelector } from "../../redux/selectors";
import { customSort } from "../../util/Utils";
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

class FeatureExplanations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFeature:
        !!this.props.featureImportanceData &&
        !!this.props.featureImportanceData.featureDescription
          ? this.props.featureImportanceData.featureDescription[0]
          : ""
    };
    this.setSelectedFeature = this.setSelectedFeature.bind(this);
  }
  componentDidMount() {
    this.props.enterFeatureExplanations();
    if (
      !!this.props.featureImportanceData &&
      !!this.props.featureImportanceData.features
    ) {
      const defaultFeature = this.props.featureImportanceData.features[0];
      this.props.fetchFeatureIceCoords(defaultFeature, ON_ICE_LOADER_HIDE);
    }
  }

  setSelectedFeature(e) {
    const selectedFeature = e.target.value;
    const selectedIndex = this.props.featureImportanceData.featureDescription.findIndex(
      feat => {
        if (feat === selectedFeature) return feat;
      }
    );
    if (selectedIndex >= 0) {
      this.props.showIceLoader();
      this.props.fetchFeatureIceCoords(
        this.props.featureImportanceData.features[selectedIndex],
        ON_ICE_LOADER_HIDE
      );
      this.setState({ selectedFeature });
    }
  }

  render() {
    const features = customSort(
      !!this.props.featureImportanceData &&
        !!this.props.featureImportanceData.featureDescription
        ? this.props.featureImportanceData.featureDescription
        : [],
      "",
      "asc"
    );
    const options = {
      zoomEnabled: true,
      animationEnabled: true,
      theme: "dark2",
      backgroundColor: "#979494",
      axisX: {
        title: !!this.state.selectedFeature
          ? `${this.state.selectedFeature} values`
          : `Feature Values`,
        titleFontWeight: 700,
        titleFontColor: "black",
        titleFontSize: 24,
        margin: 20,
        tickColor: "black",
        lineColor: "black",
        labelFontColor: "black",
        labelFontSize: 12
      },
      axisY: {
        title: "Predicted Hepatic Steatosis Probability",
        margin: 20,
        titleFontWeight: 700,
        titleFontColor: "black",
        titleFontSize: 24,
        tickColor: "black",
        lineColor: "black",
        gridColor: "black",
        labelFontColor: "black",
        labelFontSize: 12
      },
      toolTip: {
        backgroundColor: "#eee",
        enabled: false
      },
      legend: {
        fontColor: "black"
      },
      data: [
        ...this.props.featureIceCoords.iceCoords,
        this.props.featureIceCoords.pdpPoints,
        // hack to display legend for multiple lines
        {
          type: "line",
          dataPoints: [
            {
              x: 0,
              y: 0
            }
          ],
          showInLegend: true,
          legendText: `ICE Curves for ${this.props.featureIceCoords.iceCoords.length} participants`,
          markerType: "none",
          color: "#9ecae1",
          legendMarkerColor: "#9ecae1"
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
              defaultValue={this.state.selectedFeature}
              onChange={this.setSelectedFeature}
            >
              {features.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </Input>
          </FormGroup>
          {!!this.state.selectedFeature &&
            !!this.props.featureIceCoords &&
            this.props.featureIceCoords.iceCoords.length > 0 && (
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
  const { featureImportanceData } = api;
  const featureIceCoords = iceSelector(api.featureIceCoords);
  const { iceLoader } = settings;
  return { featureIceCoords, featureImportanceData, iceLoader };
};

export default connect(mapStateToProps, {
  fetchFeatureIceCoords,
  showIceLoader,
  enterFeatureExplanations
})(FeatureExplanations);
