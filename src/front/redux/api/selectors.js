export const importanceSelector = featureImportance => {
  let importanceData = [];
  if (!!featureImportance) {
    const xCords = featureImportance.importance;
    const yCords = featureImportance.features;
    const desc = featureImportance.featureDescription;
    if (!!xCords && !!yCords && !!desc && xCords.length == yCords.length) {
      xCords.forEach((data, index) => {
        importanceData.push({
          label: desc[index],
          y: xCords[index],
          name: desc[index],
          desc: `If the <b>${
            desc[index]
          }</b> changes by 1 unit, <br />then the patient has a <b>${Math.round(
            parseFloat(xCords[index]) * 100.0
          )}</b>% increase <br />in the chance of diagnosing as positive, <br />provided the patients other crucial features remain unchanged.`
        });
      });
    }
  }
  return importanceData;
};

export const iceSelector = featureIceCoords => {
  let iceCoords = [];
  let pdp_points = [];
  if (!!featureIceCoords) {
    const { ice_points } = featureIceCoords;
    if (!!ice_points && ice_points.length > 0) {
      ice_points.forEach((points, index) => {
        iceCoords.push({
          type: "line",
          name: `Participant ${index + 1}`,
          showInLegend: false,
          dataPoints: points
        });
      });
      pdp_points =
        !!featureIceCoords.pdp_points && featureIceCoords.pdp_points.length > 0
          ? {
              type: "line",
              name: `PDP for trend`,
              dataPoints: featureIceCoords.pdp_points,
              color: "#80091d"
            }
          : [];
    }
  }
  return { iceCoords, pdp_points };
};
