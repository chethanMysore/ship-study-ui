import {
  FETCH_FEATURE_IMPORTANCE,
  FETCH_FEATURE_ICE_COORDS,
  FETCH_MODEL_PERFORMANCE
} from "../../constants/actionTypes";

export const fetchFeatureImportance = loader => {
  return {
    type: FETCH_FEATURE_IMPORTANCE,
    payload: loader
  };
};

export const fetchFeatureIceCoords = (feature_name, loader) => {
  return {
    type: FETCH_FEATURE_ICE_COORDS,
    payload: { requestData: { feature_name: feature_name }, loader }
  };
};

export const fetchModelPerformance = loader => {
  return {
    type: FETCH_MODEL_PERFORMANCE,
    payload: loader
  };
};
