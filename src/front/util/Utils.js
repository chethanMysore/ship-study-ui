import CanvasJSReact from './js/canvasjs.react';
const CanvasJS = CanvasJSReact.CanvasJS;

export const addSymbols = e => {
  var suffixes = ['', 'K', 'M', 'B'];
  var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
  if (order > suffixes.length - 1) {
    order = suffixes.length - 1;
  }
  var suffix = suffixes[order];
  return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
};
