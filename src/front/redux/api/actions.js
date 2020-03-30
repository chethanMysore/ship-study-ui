import {
  FETCH_FEATURE_IMPORTANCE,
  FETCH_FEATURE_ICE_COORDS,
  FETCH_MODEL_PERFORMANCE,
  FETCH_MINIMAL_PARTICIPANT_CHANGE
} from "../../constants/actionTypes";

/**
 * Dispatches action to fetch feature importance from api call
 * @param {*} loader
 */
export const fetchFeatureImportance = loader => {
  return {
    type: FETCH_FEATURE_IMPORTANCE,
    payload: loader
  };
};

/**
 * Dispatches action to fetch ice co-ordinates from api call
 * @param {*} feature_name
 * @param {*} loader
 */
export const fetchFeatureIceCoords = (feature_name, loader) => {
  return {
    type: FETCH_FEATURE_ICE_COORDS,
    payload: { requestData: { feature_name: feature_name }, loader }
  };
};

/**
 * Dispatches action to model performance from api call
 * @param {*} loader
 */
export const fetchModelPerformance = loader => {
  return {
    type: FETCH_MODEL_PERFORMANCE,
    payload: loader
  };
};

/**
 * Dispatches action to fetch minimal changes of a participant from api call
 * @param {*} participant_id
 * @param {*} loader
 */
export const fetchMinimalChanges = (participant_id, loader) => {
  return {
    type: FETCH_MINIMAL_PARTICIPANT_CHANGE,
    payload: { requestData: { participant_id: participant_id }, loader }
  };
};
