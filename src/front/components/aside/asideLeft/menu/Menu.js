// @flow

import React, { Component } from "react";
import PropTypes from "prop-types";
import Collapse from "react-collapse";
import MenuHeader from "./menuHeader/MenuHeader";
import MenuLinks from "./menuLinks/MenuLinks";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: false,
      headerBackColor: "#283744"
    };
    this.setInitialCollapse = this.setInitialCollapse.bind(this);
    this.handlesCollapseClick = this.handlesCollapseClick.bind(this);
  }

  componentDidMount() {
    // const { initialCollapseState } = this.props;
    // if (typeof initialCollapseState === "boolean") {
    //   this.setInitialCollapse(initialCollapseState);
    // }
  }

  setInitialCollapse = value => {
    this.setState({ isCollapsed: value });
  };

  handlesCollapseClick = evt => {
    const { isCollapsed } = this.state;
    evt && evt.preventDefault();
    this.setState({ isCollapsed: !isCollapsed });
  };

  render() {
    const { headerTitle, headerBackColor, activeView, views } = this.props;
    const { isCollapsed } = this.state;

    return (
      <div>
        {/* <MenuHeader
          title={headerTitle}
          isCollapsed={!isCollapsed}
          onClick={this.handlesCollapseClick}
          backColor={
            !!headerBackColor ? headerBackColor : this.state.headerBackColor
          }
        /> */}
        {/* <Collapse isOpened={!isCollapsed}> */}
        <MenuLinks activeView={activeView} views={views} />
        {/* </Collapse> */}
      </div>
    );
  }
}

export default Menu;
