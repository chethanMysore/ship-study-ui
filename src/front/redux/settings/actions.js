import {
  ENTER_HOME_VIEW,
  ENTER_PAGE_NOT_FOUND_VIEW,
  LEAVE_HOME_VIEW,
  LEAVE_PAGE_NOT_FOUND_VIEW,
  OPEN_SIDE_MENU,
  CLOSE_SIDE_MENU,
  ON_LOADER_SHOW,
  ON_LOADER_HIDE,
  ON_ICE_LOADER_SHOW,
  ON_ICE_LOADER_HIDE,
  ON_MODEL_LOADER_HIDE,
  ON_MODEL_LOADER_SHOW,
  ON_PART_LOADER_HIDE,
  ON_PART_LOADER_SHOW,
  ENTER_PROJECT_OVERVIEW,
  ENTER_FEATURE_IMPORTANCE,
  ENTER_FEATURE_EXPLANATIONS,
  ENTER_PARTICIPANT_ANALYSIS,
  ENTER_MODEL_PERFORMANCE
} from "../../constants/actionTypes";

/**
 * Dispatches action to change active view
 */
export function enterHome() {
  return {
    type: ENTER_HOME_VIEW,
    currentView: "Home",
    leaveTime: null
  };
}

/**
 * Dispatches action to change active view
 */
export function leaveHome() {
  return {
    type: LEAVE_HOME_VIEW,
    currentView: "Home",
    enterTime: null
  };
}

/**
 * Dispatches action to change active view
 */
export function enterPageNotFound() {
  return {
    type: ENTER_PAGE_NOT_FOUND_VIEW,
    currentView: "PageNotFound",
    leaveTime: null
  };
}

/**
 * Dispatches action to change active view
 */
export function leavePageNotFound() {
  return {
    type: LEAVE_PAGE_NOT_FOUND_VIEW,
    currentView: "PageNotFound",
    enterTime: null
  };
}

/**
 * Dispatches action to change active view
 */
export function enterProjectOverview() {
  return {
    type: ENTER_PROJECT_OVERVIEW,
    currentView: "ProjectOverview"
  };
}

/**
 * Dispatches action to change active view
 */
export function enterFeatureImportance() {
  return {
    type: ENTER_FEATURE_IMPORTANCE,
    currentView: "FeatureImportance"
  };
}

/**
 * Dispatches action to change active view
 */
export function enterFeatureExplanations() {
  return {
    type: ENTER_FEATURE_EXPLANATIONS,
    currentView: "FeatureExplanations"
  };
}

/**
 * Dispatches action to change active view
 */
export function enterParticipantAnalysis() {
  return {
    type: ENTER_PARTICIPANT_ANALYSIS,
    currentView: "ParticipantAnalysis"
  };
}

/**
 * Dispatches action to change active view
 */
export function enterModelPerformance() {
  return {
    type: ENTER_MODEL_PERFORMANCE,
    currentView: "ModelPerformance"
  };
}

/**
 * Dispatches action to change active view
 */
export const showLoader = () => {
  return {
    type: ON_LOADER_SHOW
  };
};

/**
 * Dispatches action to change active view
 */
export const hideLoader = () => {
  return {
    type: ON_LOADER_HIDE
  };
};

/**
 * Dispatches action to change active view
 */
export const showIceLoader = () => {
  return {
    type: ON_ICE_LOADER_SHOW
  };
};

/**
 * Dispatches action to change active view
 */
export const hideIceLoader = () => {
  return {
    type: ON_ICE_LOADER_HIDE
  };
};

/**
 * Dispatches action to change active view
 */
export const hideModelLoader = () => {
  return {
    type: ON_MODEL_LOADER_HIDE
  };
};

/**
 * Dispatches action to change active view
 */
export const showModelLoader = () => {
  return {
    type: ON_MODEL_LOADER_SHOW
  };
};

/**
 * Dispatches action to change active view
 */
export const showPartLoader = () => {
  return {
    type: ON_PART_LOADER_SHOW
  };
};

/**
 * Dispatches action to change active view
 */
export const hidePartLoader = () => {
  return {
    type: ON_PART_LOADER_HIDE
  };
};

/**
 * Dispatches action to change active view
 */
export function openSideMenu() {
  return {
    type: OPEN_SIDE_MENU,
    isCollapsed: false
  };
}

/**
 * Dispatches action to change active view
 */
export function closeSideMenu() {
  return {
    type: CLOSE_SIDE_MENU,
    isCollapsed: true
  };
}
