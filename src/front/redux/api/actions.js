import { FETCH_FEATURE_IMPORTANCE } from '../../constants/actionTypes';

export const fetchFeatureImportance = () => {
  return {
    type: FETCH_FEATURE_IMPORTANCE,
  };
};

// export const createNewLocation = data => {
//   return {
//     type: CREATE_NEW_LOCATION,
//     payload: data,
//   };
// };
