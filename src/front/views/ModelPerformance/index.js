// @flow
// @flow

import React, { Component } from "react";
import { connect } from "react-redux";
import CanvasJSReact from "../../util/js/canvasjs.react";
import {
  fetchModelPerformance,
  enterModelPerformance
} from "../../redux/actions";
import { toPercentage } from "../../util/Utils";
const CanvasJSChart = CanvasJSReact.CanvasJSChart;
import {
  Card,
  Button,
  CardTitle,
  CardText,
  Col,
  Row,
  CardBody
} from "reactstrap";
import { AnimatedView, LoaderComponent } from "../../components";
import { ON_MODEL_LOADER_HIDE } from "../../constants/actionTypes";

class ModelPerformance extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.enterModelPerformance();
    this.props.fetchModelPerformance(ON_MODEL_LOADER_HIDE);
  }
  render() {
    const { trainPerformance, testPerformance } = this.props.modelPerformance;
    const optionsTrain =
      !!trainPerformance &&
      !!testPerformance &&
      trainPerformance.length > 0 &&
      testPerformance.length > 0
        ? {
            animationEnabled: true,
            title: {
              text: "Model Performance on Training Set"
            },
            subtitles: [
              {
                text: `${toPercentage(trainPerformance[0].accuracy)}% Accuracy`,
                verticalAlign: "center",
                fontSize: 24,
                dockInsidePlotArea: true
              }
            ],
            data: [
              {
                type: "doughnut",
                showInLegend: true,
                indexLabel: "{name}: {y}",
                yValueFormatString: "#'%'",
                dataPoints: [
                  {
                    name: "Sensitivity",
                    y: toPercentage(trainPerformance[0].sensitivity)
                  },
                  {
                    name: "Specificity",
                    y: toPercentage(trainPerformance[0].specificity)
                  },
                  {
                    name: "Positive Prediction Value",
                    y: toPercentage(trainPerformance[0].positivePredictionValue)
                  },
                  {
                    name: "Kappa",
                    y: toPercentage(trainPerformance[0].kappa)
                  },
                  {
                    name: "F1 - Measure",
                    y: toPercentage(trainPerformance[0].f1)
                  }
                ]
              }
            ]
          }
        : {};

    const optionsTest =
      !!trainPerformance &&
      !!testPerformance &&
      trainPerformance.length > 0 &&
      testPerformance.length > 0
        ? {
            animationEnabled: true,
            title: {
              text: "Model Performance on Test Set"
            },
            subtitles: [
              {
                text: !!testPerformance
                  ? `${toPercentage(testPerformance[0].accuracy)}% Accuracy`
                  : "Info not available",
                verticalAlign: "center",
                fontSize: 24,
                dockInsidePlotArea: true
              }
            ],
            data: [
              {
                type: "doughnut",
                showInLegend: true,
                indexLabel: "{name}: {y}",
                yValueFormatString: "#'%'",
                dataPoints: [
                  {
                    name: "Sensitivity",
                    y: toPercentage(testPerformance[0].sensitivity)
                  },
                  {
                    name: "Specificity",
                    y: toPercentage(testPerformance[0].specificity)
                  },
                  {
                    name: "Positive Prediction Value",
                    y: toPercentage(testPerformance[0].positivePredictionValue)
                  },
                  {
                    name: "Kappa",
                    y: toPercentage(testPerformance[0].kappa)
                  },
                  {
                    name: "F1 - Measure",
                    y: toPercentage(testPerformance[0].f1)
                  }
                ]
              }
            ]
          }
        : {};

    return this.props.modelLoader ? (
      <LoaderComponent />
    ) : (
      <AnimatedView>
        <Card>
          <CardBody>
            {!!this.props.modelPerformance &&
            this.props.modelPerformance.trainPerformance &&
            this.props.modelPerformance.testPerformance ? (
              <Row>
                <Col sm="12" xl="6" md="12">
                  <Card>
                    <CardBody>
                      <CanvasJSChart
                        options={optionsTrain}

                        /* onRef={ref => this.chart = ref} */
                      />
                    </CardBody>
                  </Card>
                </Col>

                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
                <Col sm="12" xl="6" md="12">
                  <Card>
                    <CardBody>
                      <CanvasJSChart
                        options={optionsTest}

                        /* onRef={ref => this.chart = ref} */
                      />
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            ) : (
              "Information Not Available"
            )}
          </CardBody>
        </Card>
      </AnimatedView>
    );
  }
}
const mapStateToProps = ({ api, settings }) => {
  const { modelLoader } = settings;
  const { modelPerformance } = api;
  return { modelLoader, modelPerformance };
};

export default connect(mapStateToProps, {
  fetchModelPerformance,
  enterModelPerformance
})(ModelPerformance);
