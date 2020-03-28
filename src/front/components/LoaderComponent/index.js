import React from "react";
import "./_loaderComponent.scss";

const LoaderComponent = () => (
  <div className="loader">
    <p className="loading-message">
      <i>Loading...</i>
    </p>
    <div className="spinner">
      <div className="dot1"></div>
      <div className="dot2"></div>
    </div>
  </div>
);

export default LoaderComponent;
