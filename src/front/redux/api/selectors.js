export const importanceSelector = featureImportance => {
  let importanceData = [];
  const xCords = featureImportance[0];
  const yCords = featureImportance[1];
  const desc = featureImportance[2];
  if (
    !!featureImportance &&
    featureImportance.length > 0 &&
    !!xCords &&
    !!yCords &&
    !!desc &&
    xCords.length == yCords.length
  ) {
    xCords.forEach((data, index) => {
      importanceData.push({
        label: desc[index],
        y: xCords[index],
        name: desc[index],
        desc: `If the <b>${
          desc[index]
        }</b> changes by 1 unit, <br />then the patient has a <b>${Math.round(
          parseFloat(xCords[index]) * 100.0,
        )}</b>% increase <br />in the chance of diagnosing as positive, <br />provided the patients other crucial features remain unchanged.`,
      });
    });
  }
  return importanceData;
};
