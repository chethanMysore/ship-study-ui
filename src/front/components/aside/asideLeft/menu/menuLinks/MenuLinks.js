// @flow

import React from "react";
import PropTypes from "prop-types";
import ViewLink from "./viewLink/ViewLink";

function MenuLinks({ activeView, views }) {
  return (
    <ul className="sidebar-menu sidebar-menu__marginTop">
      {views.map(({ name, linkTo, faIconName, itemCount, pathname }, idx) => {
        return (
          <ViewLink
            className="js-menulinks-viewlinks"
            key={idx}
            isActive={activeView === pathname}
            linkTo={linkTo}
            viewName={name}
            faIconName={faIconName}
            itemCount={itemCount ? itemCount : 0}
          />
        );
      })}
    </ul>
  );
}

MenuLinks.displayName = "MenuLinks";

export default MenuLinks;
