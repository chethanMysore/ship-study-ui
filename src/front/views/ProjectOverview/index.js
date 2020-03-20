// @flow

import React, { Component } from "react";
import {
  Container,
  Card,
  CardHeader,
  CardBody,
  CardText,
  CardTitle,
  CardLink,
  CardSubtitle,
  Row,
  Col
} from "reactstrap";
import { connect } from "react-redux";
import { AnimatedView } from "../../components";
import { enterProjectOverview } from "../../redux/actions";

class ProjectOverview extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.enterProjectOverview();
  }
  render() {
    return (
      <AnimatedView>
        {/* <Container className="themed-container" fluid="xl"> */}

        <Row>
          <Col md="12" xl="6">
            <Card>
              <CardBody>
                <CardTitle>
                  {" "}
                  <h3>
                    <b>SHIP Objectives</b>
                  </h3>
                </CardTitle>

                <CardText>
                  The Study of Health In Pomerania has two main objectives:{" "}
                  <br />
                  <b>
                    1. to assess prevalence and incidence of common risk
                    factors, subclinical disorders and clinical diseases <br />{" "}
                    2. to investigate the complex associations among risk
                    factors, subclinical disorders and clinical diseases.{" "}
                  </b>
                  <br />
                  <br />A particular characteristic of the SHIP is that it does
                  not focus on a selected disease; it rather attempts to
                  describe health-related conditions with the widest focus
                  possible. Important medical areas of investigation include
                  cardiovascular diseases, diabetes mellitus, liver and biliary
                  tract diseases, neurological diseases, thyroid diseases,
                  dental diseases, lung diseases, addiction and risk behaviour,
                  among others.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md="12" xl="6">
            <Card>
              <CardBody>
                <CardTitle>
                  <h3>
                    <b>Dataset Study Timeline</b>
                  </h3>
                </CardTitle>

                <CardText>
                  <b> SHIP Cohort 0</b>
                  <br />
                  SHIP-0 examinations were conducted between the 16th of October
                  1997 and the 19th of May 2001. Examinations included four
                  parts: medical examination, oral health examination, health-
                  interview and questionnaire.
                  <br />
                  <b>
                    {" "}
                    SHIP Cohort 1<br />
                  </b>
                  The 5-year follow-up commenced on the 23rd of October 2002 and
                  was completed on September 1st, 2006. Examinations included
                  four parts: medical examination, oral health examination,
                  health- interview and questionnaire.
                  <br />
                  <b>
                    SHIP Cohort 2<br />
                  </b>
                  The 11-year follow-up commenced on the June 25th, 2008 and was
                  completed on September 27th, 2012. Examinations included four
                  parts: medical examination, oral health examination, health-
                  interview and questionnaire. Of particular importance was the
                  whole-body MRI.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <br />
        <br />

        <Row>
          <Col md="12" xl="6">
            <Card>
              <CardBody>
                <CardTitle>
                  {" "}
                  <h3>
                    <b>Research Questions</b>
                  </h3>
                </CardTitle>

                <CardText>
                  <b>
                    1. What is the minimal set of evolution features that would
                    result in better predictive performance?
                    <br />
                    <br />
                    2. What is the merit of an evolution feature towards
                    classification accuracy improvement?
                    <br />
                    <br />
                    3. What is the effect of evolution feature on predicted
                    class? <br />
                    <br />
                    4. What is the minimal change in the participant such that
                    the predicted class label changes?
                  </b>
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md="12" xl="6">
            <Card>
              <CardBody>
                <CardTitle>
                  <h3>
                    <b>An Overview of Approach</b>
                  </h3>
                </CardTitle>

                <CardText>
                  The very first step is to preprocess the SHIP dataset. This
                  would include handling missing values and feature removal if
                  the missingness is above a threshold. Next step is to encode
                  categorical data and normalize the dataset. This data is then
                  augmented to extract evolution features by the framework. The
                  original features and the evolution features are then used as
                  inputs for a black box model. Now, using any one of the
                  suitable model agnostic methods, we observe the variance in
                  target output for variations in feature values that are given
                  as inputs. We also observe the variations in target output
                  corresponding to the variations in specific feature values
                  while ignoring the effects of other features.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* </Container> */}
      </AnimatedView>
    );
  }
}

const mapStateToProps = ({}) => {
  // const { isCollapsed, currentView } = settings;
  return {};
};

export default connect(mapStateToProps, { enterProjectOverview })(
  ProjectOverview
);
