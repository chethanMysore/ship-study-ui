// @flow

import React, { Component } from "react";
import { connect } from "react-redux";
import { AnimatedView, LoaderComponent } from "../../components";
import {
  fetchMinimalChanges,
  showPartLoader,
  enterParticipantAnalysis
} from "../../redux/actions";
import { minimalChangeSelector } from "../../redux/selectors";
import CanvasJSReact from "../../util/js/canvasjs.react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  Col
} from "reactstrap";
import {
  ON_PART_LOADER_HIDE,
  ON_PART_LOADER_SHOW
} from "../../constants/actionTypes";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class ParticipantAnalysis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      participantId: 1
    };
    this.onParticipantChange = this.onParticipantChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.props.enterParticipantAnalysis();
    this.props.fetchMinimalChanges(1, ON_PART_LOADER_HIDE);
  }
  onParticipantChange(e) {
    // this.setState({ participantId: e.target.value });
    this.handleSubmit(e.target.value);
  }
  handleSubmit(partId) {
    if (!!partId) {
      // this.props.showPartLoader();
      this.props.fetchMinimalChanges(parseInt(partId), ON_PART_LOADER_HIDE);
    }
  }
  render() {
    const options = {
      animationEnabled: true,
      theme: "light2",
      axisX: {
        title: "Extracted Rules",
        titleFontWeight: 700,
        margin: 20,
        interval: 1,
        reversed: true
      },
      axisY: {
        title: "Factor of Importance",
        margin: 20,
        titleFontWeight: 700
      },
      toolTip: {
        backgroundColor: "#eee"
      },
      data: [
        {
          type: "bar",
          dataPoints: this.props.minimalChange.rulesData,
          toolTipContent: "<span>{desc}</span>"
        }
      ]
    };
    return this.props.partLoader ? (
      <LoaderComponent />
    ) : (
      <AnimatedView>
        <Row>
          {!!this.props.minimalChange &&
            this.props.minimalChange.rulesData.length > 0 && (
              <Col md="12">
                <Card>
                  <CardBody>
                    <CardTitle>
                      {`Extracted rules and their importance factors`}
                    </CardTitle>
                    <CardSubtitle>
                      {`This plot illustrates the built machine learning model by describing the features as IF-THEN-RULES and their factors of importance.`}
                    </CardSubtitle>
                  </CardBody>
                  <CardBody>
                    <CanvasJSChart options={options} />
                  </CardBody>
                </Card>
              </Col>
            )}
          <Col md="4">
            <br />
            <br />
            <FormGroup>
              <Input
                type="text"
                name="partId"
                id="partId"
                placeholder={
                  "Search here with Participant ID in the range 1 to 582   e.g., 1"
                }
                onChange={this.onParticipantChange}
              />
              {/* <Button color="primary" size="sm" onClick={this.handleSubmit}>
                Submit
              </Button> */}
            </FormGroup>
          </Col>
          <Col md="12">
            {!!this.props.minimalChange &&
              !!this.props.minimalChange.featChanges && (
                <Card>
                  <CardBody>
                    <CardTitle>
                      {`Analysis of Participant ${this.props.participantId}`}
                    </CardTitle>
                  </CardBody>
                  <CardBody>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: this.props.minimalChange.featChanges
                      }}
                    ></div>
                  </CardBody>
                </Card>
              )}
          </Col>
        </Row>
      </AnimatedView>
    );
  }
}

const mapStateToProps = ({ api, settings }) => {
  const { featureImportanceData } = api;
  const minimalChange = minimalChangeSelector(
    api.minimalChange,
    featureImportanceData
  );
  const participantId = !!api.minimalChange.participantId
    ? api.minimalChange.participantId[0]
    : 1;
  const { partLoader } = settings;
  return { minimalChange, featureImportanceData, partLoader, participantId };
};

export default connect(mapStateToProps, {
  fetchMinimalChanges,
  showPartLoader,
  enterParticipantAnalysis
})(ParticipantAnalysis);
