import {
  FETCH_FEATURE_IMPORTANCE,
  FETCH_FEATURE_ICE_COORDS,
} from '../../constants/actionTypes';

export const fetchFeatureImportance = () => {
  return {
    type: FETCH_FEATURE_IMPORTANCE,
  };
};

export const fetchFeatureIceCoords = feature_name => {
  return {
    type: FETCH_FEATURE_ICE_COORDS,
    payload: { feature_name: feature_name },
  };
};

// export const createNewLocation = data => {
//   return {
//     type: CREATE_NEW_LOCATION,
//     payload: data,
//   };
// };
