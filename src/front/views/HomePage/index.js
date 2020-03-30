import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Col,
  Row
} from "reactstrap";

import { Jumbotron, Container } from "reactstrap";
import { enterHome } from "../../redux/actions";
import { connect } from "react-redux";
import PomeraniaImg from "../../img/pomerania.jpg";
import IMLImg from "../../img/IML.png";
import "./_homePage.scss";

const items = [
  {
    src: PomeraniaImg,
    //altText: "Pomerania Map",
    //caption: "Pomerania Map",
    classname: "pomerania",
    key: 1
  },
  {
    src: IMLImg,
    // altText: "Problem Statement",
    // caption: "Problem Statement",
    classname: "iml",
    key: 2
  }
];

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      animating: false
    };
    this.setAnimating = this.setAnimating.bind(this);
    this.setActiveIndex = this.setActiveIndex.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
  }
  componentDidMount() {
    this.props.enterHome();
  }
  setActiveIndex(nextIndex) {
    this.setState({ activeIndex: nextIndex });
  }
  setAnimating(animating) {
    this.setState({ animating: animating });
  }
  next = () => {
    if (this.state.animating) {
      return;
    }
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setActiveIndex(nextIndex);
  };

  previous = () => {
    if (this.state.animating) {
      return;
    }
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setActiveIndex(nextIndex);
  };

  goToIndex = newIndex => {
    if (this.state.animating) {
      return;
    }
    this.setActiveIndex(newIndex);
  };

  render() {
    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={() => this.setAnimating(true)}
          onExited={() => this.setAnimating(false)}
          key={item.key}
        >
          {/* <Jumbotron fluid> */}
          <Container fluid>
            <Card className={`carousel-img ${item.classname}`}></Card>
          </Container>
          {/* </Jumbotron> */}
          <CarouselCaption captionHeader={item.caption} />
        </CarouselItem>
      );
    });
    return (
      <Row className="row home">
        <Col md="12">
          {/* <Jumbotron fluid> */}
          <Container fluid>
            <Carousel
              className="display-3"
              activeIndex={this.state.activeIndex}
              next={this.next}
              previous={this.previous}
            >
              <CarouselIndicators
                items={items}
                activeIndex={this.state.activeIndex}
                onClickHandler={this.goToIndex}
              />
              {slides}
              <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={this.previous}
              />
              <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={this.next}
              />
            </Carousel>
          </Container>
        </Col>

        {/* </Jumbotron> */}
        <Col md="12" className="mt-5">
          <Card>
            <CardHeader>
              <h4>Ship Study Dashboard</h4>
            </CardHeader>
            <CardBody>
              <blockquote className="blockquote mb-0">
                <i>
                  {" "}
                  "The ultimate question after conducting the cohort study and
                  collecting the data for the same is how much one can rely on
                  the historical data? The participant can develop a new
                  behaviour or lifestyle between the consecutive data collection
                  years or the state-of-art machines vary from one area to
                  other. The results of these epidemiological studies can be
                  enhanced by applying mining methods to identify factors that
                  could modulate the outcome. The dashboard is built with the
                  primary aim in identification of merits of the evolution
                  features towards classification accuracy improvements which
                  are susceptible to interpretability".{" "}
                </i>
              </blockquote>
            </CardBody>
          </Card>
        </Col>
        <Col md="12" className="mt-5">
          <Card>
            <CardHeader>
              <h4>About us!</h4>
            </CardHeader>
            <CardBody>
              <blockquote className="blockquote mb-0">
                <i>
                  {" "}
                  We live in a world of data, and many people have to make sense
                  of numbers. The trouble is that there can be a lot of friction
                  involved when mining the data. WE are a team of four students
                  who believe that this is where dashboards come into play: a
                  well-designed dashboard can save huge amounts of time, helping
                  people to quickly identify the numbers that matter, in order
                  to make insightful observations or to compile reports for end
                  users.{" "}
                </i>
              </blockquote>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({}) => {
  return {};
};

export default connect(mapStateToProps, {
  enterHome
})(HomePage);
