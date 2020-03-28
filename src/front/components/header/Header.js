// @flow

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "./button/Button";
import { Link } from "react-router-dom";

const FixedHeader = styled.header`
  position: fixed;

  @media screen and (max-width: 990px) {
    & a.logo {
      width: 0px !important;
    }

    & nav.navbar {
      margin: {
        left: 0px !important;
      }

      padding: {
        left: 0px !important;
      }
    }
  }
`;

const Header = ({ toggleSideMenu, appName }) => (
  <FixedHeader className="header fixed--header">
    <Link to="/" className="logo">
      {appName}
    </Link>
    <nav className="navbar navbar-static-top" role="navigation">
      <Button toggleSideMenu={toggleSideMenu} />
    </nav>
  </FixedHeader>
);

Header.displayName = "Header";

export default Header;
