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
      rulesSet.forEach((rule, index) => {
        participant_changes.rulesData.push({
          label: roundRuleFeatures(rule.description),
          y: rule.coefficient,
          desc: `If <b>${roundRuleFeatures(
            rule.description
          )}</b> then the prediction changes by the factor of ${parseFloat(
            rule.coefficient
          ).toFixed(3)}`
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
