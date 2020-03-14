import {
  FETCH_FEATURE_IMPORTANCE,
  FETCH_FEATURE_ICE_COORDS
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

// export const createNewLocation = data => {
//   return {
//     type: CREATE_NEW_LOCATION,
//     payload: data,
//   };
// };
