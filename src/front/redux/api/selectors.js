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
