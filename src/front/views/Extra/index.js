// @flow
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
import { Card, Button, CardTitle, CardText, Col, Row } from 'reactstrap';

class Extra extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const optionsTrain = {
			animationEnabled: true,
			title: {
				text: "Model Performance on Training"
			},
			subtitles: [{
				text: "71% Accuracy",
				verticalAlign: "center",
				fontSize: 24,
				dockInsidePlotArea: true
			}],
			data: [{
				type: "doughnut",
				showInLegend: true,
				indexLabel: "{name}: {y}",
				yValueFormatString: "#,###'%'",
				dataPoints: [
					{ name: "Sensitivity", y: 5 },
					{ name: "Specificity", y: 31 },
					{ name: "Positive Predicted Class", y: 40 },
					{ name: "Kappa", y: 17 },
					{ name: "Some other param", y: 7 }
				]
      }]
    }
    
    
      const optionsTest = {
        animationEnabled: true,
        title: {
          text: "Model Performance on Test Set"
        },
        subtitles: [{
          text: "74% Accuracy",
          verticalAlign: "center",
          fontSize: 24,
          dockInsidePlotArea: true
        }],
        data: [{
          type: "doughnut",
          showInLegend: true,
          indexLabel: "{name}: {y}",
          yValueFormatString: "#,###'%'",
          dataPoints: [
            { name: "Sensitivity", y: 5 },
            { name: "Specificity", y: 31 },
            { name: "Positive Predicted Class", y: 40 },
            { name: "Kappa", y: 17 },
            { name: "Some other param", y: 7 }
          ]
        }]
      }

		return (
		<div>
      <Row>
      <Col sm="6">
      <Card> 
        <CanvasJSChart options = {optionsTrain}
      
      /* onRef={ref => this.chart = ref} */
    />
    </Card>
    </Col >
   
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      <Col sm="6">
<Card>
  <CanvasJSChart options = {optionsTest}
      
      /* onRef={ref => this.chart = ref} */
    />
    </Card>
    </Col>
    </Row>
		</div>
		);
  }
}
const mapStateToProps = ({}) => {
  // const { isCollapsed, currentView } = settings;
  return {};
};

export default connect(mapStateToProps, {})(Extra);
