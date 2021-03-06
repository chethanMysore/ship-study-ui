// @flow

/* eslint no-console: 0 */
import React, { Component } from "react";
import cx from "classnames";
import Menu from "./menu/Menu";

const AsideLeft = ({ isAnimated, isCollapsed, currentView, sideMenu }) => (
  <aside
    className={cx({
      "no-print": true,
      "left-side": true,
      "aside-left--fixed": true,
      "sidebar-offcanvas": true,
      "sidebar-animated": isAnimated,
      "collapse-left": isCollapsed
    })}
    // add overflow to left sidebar:
    style={{
      height: "100%",
      overflow: "auto",
      position: "fixed"
    }}
  >
    <section className="sidebar">
      {sideMenu.map(({ id, group, menus }, menuIdx) => {
        return (
          <Menu
            key={menuIdx}
            initialCollapseState={menuIdx === 0}
            headerTitle={group}
            headerBackColor="#283744"
            activeView={currentView}
            views={menus}
            id={id}
          />
        );
      })}
    </section>
  </aside>
);

AsideLeft.displayName = "AsideLeft";

export default AsideLeft;
