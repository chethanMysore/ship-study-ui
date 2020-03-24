import CanvasJSReact from "./js/canvasjs.react";
const CanvasJS = CanvasJSReact.CanvasJS;

export const addSymbols = e => {
  var suffixes = ["", "K", "M", "B"];
  var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
  if (order > suffixes.length - 1) {
    order = suffixes.length - 1;
  }
  var suffix = suffixes[order];
  return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
};

export const toPercentage = val => {
  let percentage = 0;
  if (!!val) {
    percentage = Math.round(parseFloat(val) * 100);
  }
  return percentage;
};

export const customSort = (
  data,
  sortBy = "",
  order = "desc",
  innerSortParam = null
) => {
  data = data.sort((a, b) => {
    let res = 0;
    let left = 0;
    let right = 0;
    if (typeof a !== "object") {
      left = a;
      right = b;
    } else if (typeof (a[sortBy] === "object") && !!innerSortParam) {
      let obja = a[sortBy];
      let objb = b[sortBy];
      left =
        typeof obja[innerSortParam] !== "string"
          ? Math.abs(obja[innerSortParam])
          : obja[innerSortParam];
      right =
        typeof objb[innerSortParam] !== "string"
          ? Math.abs(objb[innerSortParam])
          : objb[innerSortParam];
    } else {
      left = typeof (a[sortBy] !== "string") ? Math.abs(a[sortBy]) : a[sortBy];
      right = typeof (b[sortBy] !== "string") ? Math.abs(b[sortBy]) : b[sortBy];
    }
    if (order === "desc") {
      if (left > right) res = -1;
      else if (left < right) res = 1;
      else res = 0;
    } else {
      if (left < right) res = -1;
      else if (left > right) res = 1;
      else res = 0;
    }

    return res;
  });
  return data;
};
