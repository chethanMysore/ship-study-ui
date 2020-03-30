import axios from "axios";

import {
  apiBasePath,
  featureImportancePath,
  featureICECoordsPath,
  modelPerformancePath,
  minimalParticipantChangePath
} from "../../constants/defaultValues";

import {
  FEATURE_IMPORTANCE_DATA,
  FEATURE_ICE_COORDS,
  MODEL_PERFORMANCE,
  MINIMAL_PARTICIPANT_CHANGE
} from "../../constants/actionTypes";

/**
 * Builds final Url by adding query params
 * @param {*} url
 * @param {*} params
 */
const BuildUrlQuery = (url, params) => {
  let query = "";
  params.forEach((param, i) => {
    i == 0
      ? (query += `?${param.key}=${param.value}`)
      : (query += `&${param.key}=${param.value}`);
  });
  url += query;
  return url;
};

/**
 * Makes ger request to api to get data from respective entity data table
 */
const getRequest = (
  entityName,
  options = { byId: false, id: "", queryParams: [] }
) => {
  return new Promise((resolve, reject) => {
    let entityPath = "";
    switch (entityName) {
      case FEATURE_IMPORTANCE_DATA:
        entityPath = featureImportancePath;
        break;
      case MODEL_PERFORMANCE:
        entityPath = modelPerformancePath;
        break;
      default:
        entityPath = "";
    }
    let requestUrl = `${apiBasePath}${entityPath}`;
    if (!!options && options.byId) {
      requestUrl += `/${options.id}`;
    }
    if (!!options && !!options.queryParams && options.queryParams.length > 0) {
      requestUrl = BuildUrlQuery(requestUrl, options.queryParams);
    }
    const request = axios.create();
    // request.defaults.headers.common.Authorization = `Bearer ${token}`;
    request
      .get(requestUrl)
      .then(res => resolve(res.data))
      .catch(err => {
        err.isError = true;
        reject(err);
      });
  });
};

/**
 * Dispatches user action
 * @param {*} token
 * @param {*} entityName
 * @param {*} payload
 */
const dispatchUserAction = (entityName, payload) => {
  return new Promise((resolve, reject) => {
    let entityPath = "";
    const options = { byId: false, id: "", queryParams: [] };
    const contentType = "application/json";
    switch (entityName) {
      case FEATURE_ICE_COORDS:
        entityPath = featureICECoordsPath;
        break;
      case MINIMAL_PARTICIPANT_CHANGE:
        entityPath = minimalParticipantChangePath;
        break;
      default:
        entityPath = "";
    }
    let requestUrl = `${apiBasePath}${entityPath}`;
    if (!!options && !!options.queryParams && options.queryParams.length > 0) {
      requestUrl = BuildUrlQuery(requestUrl, options.queryParams);
    }
    const request = axios.create();
    // request.defaults.headers.common.Authorization = `Bearer ${token}`;
    request.defaults.headers.common.ContentType = contentType;
    axios({
      method: "post",
      url: requestUrl,
      data: payload
    })
      .then(res => resolve(res.data))
      .catch(err => {
        err.isError = true;
        reject(err);
      });
  });
};

/**
 * GET Call for Entities
 * @param {*} entityName is the name of the entity to be queried e.g.,CUSTOMER_TABLE_DATA
 * @param {*} options is the query options. byId and id are for Get(id)
 * and queryParams is for retrieving views
 */
export const fetchTableData = (
  entityName,
  options = { byId: false, id: "", queryParams: [] }
) => {
  return new Promise(async (resolve, reject) => {
    getRequest(entityName, options)
      .then(data => resolve(data))
      .catch(err => {
        err.isError = true;
        reject(err);
      });
  });
};

/**
 * Dispatches user actions
 * @param {*} entityName is the name of the entity e.g.,CUSTOMER_TABLE_DATA
 * @param {*} payload to dispatch
 */
export const dispatchAction = (entityName, payload) => {
  return new Promise(async (resolve, reject) => {
    dispatchUserAction(entityName, payload)
      .then(res => resolve(res))
      .catch(err => {
        err.isError = true;
        reject(err);
      });
  });
};
