import cookie from "react-cookies";
import axios from "axios";

import {
  apiBasePath,
  tokenPath,
  defaultAuth,
  grantType,
  oauthUsername,
  oauthPassword,
  featureImportancePath,
  featureICECoordsPath,
  modelPerformancePath
} from "../../constants/defaultValues";

import {
  FEATURE_IMPORTANCE_DATA,
  FEATURE_ICE_COORDS,
  MODEL_PERFORMANCE
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
 * Makes update request to edit entities
 */
const updateEntitiesRequest = (token, entityName, id, updateData) => {
  return new Promise((resolve, reject) => {
    let entityPath = "";
    switch (entityName) {
      // case USER_ACCOUNT_DATA:
      //   entityPath = userDataPath;
      //   break;
      default:
        entityPath = "";
    }
    const requestUrl = `${apiBasePath}${entityPath}/${id}`;
    const request = axios.create();
    request.defaults.headers.common.Authorization = `Bearer ${token}`;
    request.defaults.headers.common.ContentType = "application/json";
    request
      .put(requestUrl, updateData)
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
      // config: {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //     'Content-Type': contentType,
      //   },
      // },
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
 * Creates new data instance
 * @param {*} token
 * @param {*} entityName
 * @param {*} newData
 */
const createDataInstance = (token, entityName, newData) => {
  return new Promise((resolve, reject) => {
    let entityPath = "";
    switch (entityName) {
      // case LOCATION_DATA:
      //   entityPath = locationDataPath;
      //   break;
      default:
        entityPath = "";
    }
    const requestUrl = `${apiBasePath}${entityPath}`;
    const request = axios.create();
    request.defaults.headers.common.Authorization = `Bearer ${token}`;
    request.defaults.headers.common.ContentType = "application/json";
    request
      .post(requestUrl, newData)
      .then(res => resolve(res.data))
      .catch(err => {
        err.isError = true;
        reject(err);
      });
  });
};

/**
 *  Makes request to api to fetch the OAuth token
 */
const getTokenFromApi = (username = username, password = password) => {
  return new Promise((resolve, reject) => {
    const bodyFormData = new FormData();
    bodyFormData.set("grant_type", grantType);
    bodyFormData.set("username", username);
    bodyFormData.set("password", password);

    axios({
      method: "post",
      url: `${apiBasePath}${tokenPath}`,
      config: {
        headers: {
          Authorization: `Basic ${defaultAuth}`,
          "Content-Type": "application/x-www-form-urlencoded"
        }
      },
      auth: {
        username: oauthUsername,
        password: oauthPassword
      },
      data: bodyFormData
    })
      .then(res => resolve(res.data))
      .catch(err => {
        err.isError = true;
        reject(err);
      });
  });
};

/**
 * Refresh the saved OAuth token
 * @param {*} refreshToken
 */
const refreshExpiredOAuthToken = refreshToken => {
  return new Promise((resolve, reject) => {
    const bodyFormData = new FormData();
    bodyFormData.set("grant_type", refreshGrantType);
    bodyFormData.set("refresh_token", refreshToken);
    axios({
      method: "post",
      url: `${apiBasePath}${tokenPath}`,
      config: {
        headers: {
          Authorization: `Basic ${defaultAuth}`,
          "Content-Type": "application/x-www-form-urlencoded"
        }
      },
      auth: {
        username: oauthUsername,
        password: oauthPassword
      },
      data: bodyFormData
    })
      .then(res => resolve(res.data))
      .catch(err => {
        // If refresh token is expired get new token
        getTokenFromApi()
          .then(res => resolve(res))
          .catch(err => {
            err.isError = true;
            reject(err);
          });
      });
  });
};

/**
 *  Looks for authtoken in the cookie and validates it
 */
const fetchOAuthToken = () => {
  return new Promise(async (resolve, reject) => {
    const accessToken = cookie.load("access_token");
    if (
      !!accessToken &&
      !!accessToken.token &&
      !!accessToken.expires_in &&
      accessToken.expires_in > new Date().getTime()
    ) {
      resolve(atob(accessToken.token));
    } else {
      getTokenFromApi()
        .then(accessToken => {
          saveToken(accessToken);
          resolve(accessToken.access_token);
        })
        .catch(err => {
          err.isError = true;
          reject(err);
        });
    }
  });
};

/**
 * Saves OAuth token
 * @param {*} token save OAuth token in local storage
 */
const saveToken = token => {
  cookie.save(
    "access_token",
    {
      token: btoa(token.access_token),
      expires_in: parseInt(
        new Date().getTime() + parseInt(token.expires_in * 1000)
      ),
      refreshToken: btoa(token.refresh_token)
    },
    { path: "/" }
  );
};

/**
 * Performs Authentication by creating or looking up existing OAuth token
 * @param {*} username
 * @param {*} password
 */
export const userLookUp = (username, password) => {
  return new Promise((resolve, reject) => {
    getTokenFromApi(username, password)
      .then(authToken => {
        saveToken(authToken);
        getRequest(authToken.access_token, USER_ACCOUNT_DATA)
          .then(res => {
            const authUser = res.find(user => {
              return user.login === username;
            });
            resolve(authUser);
          })
          .catch(err => {
            err.isError = true;
            reject(err);
          });
      })
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
 * PUT call for Entities
 * @param {*} entityName is the entity to be updated e.g.,CUSTOMER_TABLE_DATA
 * @param {*} id is the entityId of the record to be updated
 * @param {*} updateData is the new data to update the record
 */
export const updateTableData = (entityName, id, updateData) => {
  return new Promise(async (resolve, reject) => {
    fetchOAuthToken()
      .then(accessToken => {
        updateEntitiesRequest(accessToken, entityName, id, updateData)
          .then(res => resolve(res))
          .catch(err => {
            err.isError = true;
            reject(err);
          });
      })
      .catch(err => {
        err.isError = true;
        reject(err);
      });
  });
};

/**
 * Creates new record for the specified entity
 * @param {*} entityName is the name of the entity e.g.,CUSTOMER_TABLE_DATA
 * @param {*} data is the data to be created as an instance of the entity
 */
export const createNewDataInstance = (entityName, data) => {
  return new Promise(async (resolve, reject) => {
    fetchOAuthToken()
      .then(accessToken => {
        createDataInstance(accessToken, entityName, data)
          .then(res => resolve(res))
          .catch(err => {
            err.isError = true;
            reject(err);
          });
      })
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
