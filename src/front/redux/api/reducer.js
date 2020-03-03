import {} from '../../constants/actionTypes';

/** ToDo: This is the static data. Remove after testing */

const INIT_STATE = {
  // locationData: [], // set to locationsData.data for static data, // Store for Locations (contains both bussiness locations and readpoints distinguished by 'readpoint' boolean attribute)
};

export default (state = INIT_STATE, { type, data }) => {
  switch (type) {
    // case LOCATION_DATA: {
    //   return Object.assign({}, state, { locationData: data });
    // }
    default:
      return { ...state };
  }
};
