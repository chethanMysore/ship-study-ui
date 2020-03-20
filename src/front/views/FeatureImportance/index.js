// @flow

import React, { Component } from "react";
import { connect } from "react-redux";
import { AnimatedView } from "../../components";
import CustomModal from "../../newComponents/CustomModal";
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
    this.props.enterFeatureImportance();
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
          dataPoints: this.props.featureImportanceData.importanceData,
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
        <Card>
          <CardBody>
            <Row>
              <Col md="12">
                <Card>
                  <CardBody>
                    <CanvasJSChart
                      options={options}
                      /* onRef={ref => this.chart = ref} */
                    />
                  </CardBody>
                </Card>
              </Col>

              <Col md="12">
                <br />
                <br />
                <Card>
                  <CardBody>
                    <CardTitle>
                      <h4>
                        Observed set of features that are critical for diagnosis
                        of Hepatic Steatosis
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
          </CardBody>
        </Card>
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
