import {
  ENTER_HOME_VIEW,
  ENTER_FEATURE_IMPORTANCE,
  ENTER_PROJECT_OVERVIEW,
  ENTER_FEATURE_EXPLANATIONS,
  ENTER_PARTICIPANT_ANALYSIS,
  ENTER_MODEL_PERFORMANCE,
  LEAVE_HOME_VIEW,
  OPEN_SIDE_MENU,
  CLOSE_SIDE_MENU,
  ON_LOADER_SHOW,
  ON_LOADER_HIDE,
  ON_ICE_LOADER_SHOW,
  ON_ICE_LOADER_HIDE,
  ON_MODEL_LOADER_SHOW,
  ON_MODEL_LOADER_HIDE,
  ON_PART_LOADER_HIDE,
  ON_PART_LOADER_SHOW
} from "../../constants/actionTypes";

/**
 * This is the state container for page settings
 */
const INIT_STATE = {
  currentView: "home", // stores current active view
  isCollapsed: false,
  time: "",
  sideMenuIsCollapsed: false,
  loader: true,
  iceLoader: true,
  modelLoader: true,
  partLoader: true
};

/**
 * This is the state reducer for updating the respective states on corresponding actions
 */
export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LEAVE_HOME_VIEW:
    case ENTER_HOME_VIEW:
    case ENTER_PROJECT_OVERVIEW:
    case ENTER_FEATURE_IMPORTANCE:
    case ENTER_FEATURE_EXPLANATIONS:
    case ENTER_PARTICIPANT_ANALYSIS:
    case ENTER_MODEL_PERFORMANCE:
      if (state.currentView !== action.currentView) {
        return {
          ...state,
          currentView: action.currentView
        };
      }
      return state;

    case OPEN_SIDE_MENU: {
      const { isCollapsed } = action;

      return {
        ...state,
        isCollapsed
      };
    }

    case CLOSE_SIDE_MENU: {
      const { isCollapsed } = action;

      return {
        ...state,
        isCollapsed
      };
    }

    case ON_LOADER_SHOW: {
      return {
        ...state,
        loader: true
      };
    }

    case ON_LOADER_HIDE: {
      return {
        ...state,
        loader: false
      };
    }

    case ON_ICE_LOADER_SHOW: {
      return {
        ...state,
        iceLoader: true
      };
    }

    case ON_ICE_LOADER_HIDE: {
      return {
        ...state,
        iceLoader: false
      };
    }

    case ON_MODEL_LOADER_SHOW: {
      return {
        ...state,
        modelLoader: true
      };
    }

    case ON_MODEL_LOADER_HIDE: {
      return {
        ...state,
        modelLoader: false
      };
    }

    case ON_PART_LOADER_SHOW: {
      return {
        ...state,
        partLoader: true
      };
    }

    case ON_PART_LOADER_HIDE: {
      return {
        ...state,
        partLoader: false
      };
    }

    default:
      return state;
  }
};
