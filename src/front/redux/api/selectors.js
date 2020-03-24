import { customSort } from "../../util/Utils";

export const importanceSelector = featureImportance => {
  let importanceData = [];
  let featImpTable = [];
  if (!!featureImportance) {
    const xCords = featureImportance.importance;
    const yCords = featureImportance.features;
    const desc = featureImportance.featureDescription;
    const featType = featureImportance.featType;
    if (!!xCords && !!yCords && !!desc && xCords.length == yCords.length) {
      xCords.forEach((data, index) => {
        featImpTable.push({
          feature: yCords[index],
          description: desc[index],
          type: featType[index]
        });
        importanceData.push({
          label: desc[index],
          y: xCords[index],
          name: desc[index],
          color: featType[index] === "original" ? "#3182bd" : "#9ecae1",
          desc: `If the <b>${
            desc[index]
          }</b> changes by 1 unit, <br />then the patient has a <b>${Math.round(
            parseFloat(xCords[index]) * 100.0
          )}</b>% increase <br />in the chance of diagnosing as positive, <br />provided the patients other crucial features remain unchanged.`
        });
      });
    }
  }
  return { importanceData, featImpTable };
};

export const iceSelector = featureIceCoords => {
  let iceCoords = [];
  let pdpPoints = [];
  if (!!featureIceCoords) {
    const { icePoints, featureName } = featureIceCoords;
    if (!!icePoints && icePoints.length > 0) {
      icePoints.forEach((points, index) => {
        iceCoords.push({
          type: "line",
          name: `Participant ${index + 1}`,
          dataPoints: points,
          color: "#9ecae1",
          markerType: "none"
        });
      });
      pdpPoints =
        !!featureIceCoords.pdpPoints && featureIceCoords.pdpPoints.length > 0
          ? {
              type: "line",
              name: `PDP for trend`,
              dataPoints: featureIceCoords.pdpPoints,
              color: "#3182bd",
              lineThickness: 20,
              markerType: "none",
              showInLegend: true,
              legendText: `Trend in participant changes for ${featureName[0]}`,
              legendMarkerColor: "#3182bd"
            }
          : [];
    }
  }
  return { iceCoords, pdpPoints };
};

const roundRuleFeatures = rule => {
  rule = rule.replace(/([0-9]\.[0-9]*)/g, str => {
    return parseFloat(str).toFixed(3);
  });
  return rule;
};

const classPrediction = {
  "0": "NEGATIVE",
  "1": "POSITIVE"
};

export const minimalChangeSelector = (minimalChange, featureImportance) => {
  let participant_changes = {};
  participant_changes.rulesData = [];
  if (!!minimalChange) {
    const { changes, rulesSet, prediction } = minimalChange;
    if (!!rulesSet) {
      customSort(rulesSet, "coefficient").forEach((rule, index) => {
        participant_changes.rulesData.push({
          label: roundRuleFeatures(rule.description),
          y: rule.coefficient,
          desc: `If <b>${roundRuleFeatures(
            rule.description
          )}</b> then the prediction changes by the factor of ${parseFloat(
            rule.coefficient
          ).toFixed(3)}`,
          color: rule.coefficient > 0 ? "#3182bd" : "#9ecae1"
        });
      });
    }
    if (!!changes) {
      let changeDescription = "";
      changes.forEach((change, index) => {
        let predChange = classPrediction[prediction[0]];
        if (predChange === "POSITIVE") {
          predChange = "NEGATIVE";
        } else {
          predChange = "POSITIVE";
        }
        if (!!change.minimalChange && change.minimalChange.length > 0) {
          changeDescription += `<p>Given the rule ${roundRuleFeatures(
            change.rule[0]
          )}, <br /><ul>`;
          change.minimalChange.forEach(val => {
            let featDesc = featureImportance.features.find((feat, index) => {
              if (feat === val.feature[0])
                return featureImportance.featureDescription[index];
            });
            changeDescription += `<li>As the participant's ${featDesc} <b>${
              val.value[0] > 0 ? "increases" : "decreases"
            }</b> by ${Math.abs(val.value[0]).toFixed(2)},<br />
          the diagnosis changes from ${
            classPrediction[prediction[0]]
          } to ${predChange} </li>`;
          });
          changeDescription += `</ul><br /></p>`;
        }
      });
      participant_changes.featChanges = changeDescription;
    }
  }
  return participant_changes;
};
