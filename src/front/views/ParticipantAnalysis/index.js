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
import "./_participantAnalysis.scss";

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
        reversed: true,
        labelAutoFit: true
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
          type: "stackedBar",
          dataPoints: this.props.minimalChange.rulesData,
          toolTipContent: "<span>{desc}</span>",
          showInLegend: true,
          legendText: "Positively impacting rules",
          legendMarkerColor: "#3182bd"
        },
        {
          type: "stackedBar",
          dataPoints: [{ y: 0, label: "" }],
          showInLegend: true,
          legendText: "Negatively impacting rules",
          legendMarkerColor: "#9ecae1"
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
                      <h3>{`Extracted rules and their importance factors`}</h3>
                    </CardTitle>
                    <CardSubtitle>
                      <p>{`This plot illustrates the built machine learning model by describing the features as IF-THEN-RULES and their factors of importance.`}</p>
                    </CardSubtitle>
                  </CardBody>
                  <CardBody>
                    <CanvasJSChart options={options} />
                  </CardBody>
                </Card>
              </Col>
            )}
          <Col md="8" xs="12" xl="6" className="mt-5">
            <FormGroup>
              <Input
                type="text"
                name="partId"
                id="partId"
                placeholder={
                  "Search here with Participant ID in the range 1 to 582   e.g., 1"
                }
                onChange={this.onParticipantChange}
                className="search-bar"
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
