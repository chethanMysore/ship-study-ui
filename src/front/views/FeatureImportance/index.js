// @flow

import React, { Component } from "react";
import { connect } from "react-redux";
import { AnimatedView } from "../../components";
import CanvasJSReact from "../../util/js/canvasjs.react";
import {
  fetchFeatureImportance,
  enterFeatureImportance
} from "../../redux/actions";
import { addSymbols } from "../../util/Utils";
import { importanceSelector } from "../../redux/selectors";
const CanvasJSChart = CanvasJSReact.CanvasJSChart;
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Card, CardBody, Row, Col, CardTitle } from "reactstrap";

const featureImpColumns = [
  {
    Header: "Feature Name",
    accessor: "feature"
  },
  {
    Header: "Feature Description",
    accessor: "description"
  },
  {
    id: "featType",
    Header: "Feature Type",
    accessor: "type",
    cell: props =>
      props === "original" ? "Original Feature" : "Evolutionary Feature"
  }
];

class FeatureImportance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      selectedBin: null,
      title: "Feature Description"
    };
  }

  componentDidMount() {
    this.props.enterFeatureImportance();
  }

  render() {
    const width = Math.round(window.screen.width) * 0.8;
    const height = Math.round(window.screen.height) * 0.8;
    const options = {
      animationEnabled: true,
      theme: "dark2",
      backgroundColor: "#979494",
      height: 500,
      title: {
        text: "Importance of Crucial Factors on Diagnosis of Hepatic Steatosis",
        fontColor: "black",
        fontSize: 24,
        fontWeight: 700,
        padding: 30
      },
      axisX: {
        title: "Features",
        titleFontWeight: 700,
        titleFontColor: "black",
        titleFontSize: 24,
        margin: 20,
        interval: 1,
        reversed: true,
        tickColor: "black",
        lineColor: "black",
        labelFontColor: "black",
        labelFontSize: 12
      },
      axisY: {
        title: "Feature Importance",
        margin: 20,
        titleFontWeight: 700,
        titleFontColor: "black",
        titleFontSize: 24,
        gridColor: "black",
        tickColor: "black",
        labelFontColor: "black",
        labelFontSize: 12
      },
      toolTip: {
        backgroundColor: "#eee",
        fontColor: "black"
      },
      legend: {
        fontColor: "black"
      },
      data: [
        {
          type: "bar",
          showInLegend: true,
          legendText: "Original Features",
          legendMarkerColor: "#3182bd",
          indexLabelFontColor: "white",
          indexLabelFontSize: 14,
          dataPoints: this.props.featureImportanceData.importanceData,
          toolTipContent: "<span>{desc}</span>"
        },
        {
          type: "stackedBar",
          showInLegend: true,
          legendText: "Evolutionary Features",
          legendMarkerColor: "#9ecae1",
          dataPoints: [{ y: 0, label: "" }] // hack to display multiple legendtexts for the same data series
        }
      ]
    };

    return (
      <AnimatedView>
        <Row>
          <Col md="12">
            <Card>
              <CardBody>
                <CanvasJSChart options={options} />
              </CardBody>
            </Card>
          </Col>

          <Col md="12" className="mt-5">
            <Card>
              <CardBody>
                <CardTitle>
                  <h4>
                    Observed set of features that are critical for diagnosis of
                    Hepatic Steatosis
                  </h4>
                </CardTitle>
              </CardBody>
              <CardBody>
                <ReactTable
                  data={this.props.featureImportanceData.featImpTable}
                  columns={featureImpColumns}
                  filterable={true}
                  showPagination={false}
                  defaultPageSize={14}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </AnimatedView>
    );
  }
}

const mapStateToProps = ({ api }) => {
  const featureImportanceData = importanceSelector(api.featureImportanceData);
  return { featureImportanceData };
};

export default connect(mapStateToProps, {
  fetchFeatureImportance,
  enterFeatureImportance
})(FeatureImportance);
