import {
  ENTER_HOME_VIEW,
  ENTER_LOGIN_VIEW,
  ENTER_SIMPLE_TABLES_VIEW,
  ENTER_BASIC_ELEMENTS_VIEW,
  ENTER_GENERAL_VIEW,
  ENTER_PAGE_NOT_FOUND_VIEW,
  ENTER_STATS_CARD_VIEW,
  ENTER_EARNING_GRAPH_VIEW,
  ENTER_NOTIFICATIONS_VIEW,
  ENTER_WORK_PROGRESS_VIEW,
  ENTER_TWITTER_FEED_VIEW,
  ENTER_TEAM_MATES_VIEW,
  ENTER_TODO_LIST_VIEW,
  ENTER_BREADCRUMB_VIEW,
  ENTER_STAT_VIEW,
  ENTER_BASIC_PROGRESS_BAR_VIEW,
  ENTER_TAB_PANEL_VIEW,
  ENTER_STRIPED_PROGRESS_BAR_VIEW,
  ENTER_ALERT_VIEW,
  ENTER_PAGINATION_VIEW,
  ENTER_PROTECTED_VIEW,
  LEAVE_HOME_VIEW,
  LEAVE_LOGIN_VIEW,
  LEAVE_SIMPLE_TABLES_VIEW,
  LEAVE_BASIC_ELEMENTS_VIEW,
  LEAVE_GENERAL_VIEW,
  LEAVE_PAGE_NOT_FOUND_VIEW,
  LEAVE_STATS_CARD_VIEW,
  LEAVE_EARNING_GRAPH_VIEW,
  LEAVE_NOTIFICATIONS_VIEW,
  LEAVE_WORK_PROGRESS_VIEW,
  LEAVE_TWITTER_FEED_VIEW,
  LEAVE_TEAM_MATES_VIEW,
  LEAVE_TODO_LIST_VIEW,
  LEAVE_BREADCRUMB_VIEW,
  LEAVE_STAT_VIEW,
  LEAVE_BASIC_PROGRESS_BAR_VIEW,
  LEAVE_TAB_PANEL_VIEW,
  LEAVE_STRIPED_PROGRESS_BAR_VIEW,
  LEAVE_ALERT_VIEW,
  LEAVE_PAGINATION_VIEW,
  LEAVE_PROTECTED_VIEW,
  GET_SIDE_MENU_TOGGLE_STATE_FROM_LOCALSTORAGE,
  OPEN_SIDE_MENU,
  CLOSE_SIDE_MENU,
  SIDEMU_IS_COLLAPSED_KEY,
  READ_LOCALSTORAGE,
  SIDEMU_IS_NOT_COLLAPSED_VALUE,
  WRITE_LOCALSTORAGE,
  ON_LOADER_SHOW,
  ON_LOADER_HIDE,
  ON_ICE_LOADER_SHOW,
  ON_ICE_LOADER_HIDE,
  ON_MODEL_LOADER_SHOW,
  ON_MODEL_LOADER_HIDE,
  ON_PART_LOADER_HIDE,
  ON_PART_LOADER_SHOW
} from "../../constants/actionTypes";

const INIT_STATE = {
  currentView: "home",
  enterTime: null,
  leaveTime: null,
  isCollapsed: false,
  time: "",
  sideMenuIsCollapsed: false,
  loader: true,
  iceLoader: true,
  modelLoader: true,
  partLoader: true
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case ENTER_HOME_VIEW:
    case ENTER_LOGIN_VIEW:
    case ENTER_SIMPLE_TABLES_VIEW:
    case ENTER_BASIC_ELEMENTS_VIEW:
    case ENTER_GENERAL_VIEW:
    case ENTER_PAGE_NOT_FOUND_VIEW:
    case ENTER_STATS_CARD_VIEW:
    case ENTER_EARNING_GRAPH_VIEW:
    case ENTER_NOTIFICATIONS_VIEW:
    case ENTER_WORK_PROGRESS_VIEW:
    case ENTER_TWITTER_FEED_VIEW:
    case ENTER_TEAM_MATES_VIEW:
    case ENTER_TODO_LIST_VIEW:
    case ENTER_BREADCRUMB_VIEW:
    case ENTER_STAT_VIEW:
    case ENTER_BASIC_PROGRESS_BAR_VIEW:
    case ENTER_TAB_PANEL_VIEW:
    case ENTER_STRIPED_PROGRESS_BAR_VIEW:
    case ENTER_ALERT_VIEW:
    case ENTER_PAGINATION_VIEW:
    case ENTER_PROTECTED_VIEW:
      // can't enter if you are already inside
      if (state.currentView !== action.currentView) {
        return {
          ...state,
          currentView: action.currentView,
          enterTime: action.enterTime,
          leaveTime: action.leaveTime
        };
      }
      return state;

    case LEAVE_HOME_VIEW:
    case LEAVE_LOGIN_VIEW:
    case LEAVE_SIMPLE_TABLES_VIEW:
    case LEAVE_BASIC_ELEMENTS_VIEW:
    case LEAVE_GENERAL_VIEW:
    case LEAVE_PAGE_NOT_FOUND_VIEW:
    case LEAVE_STATS_CARD_VIEW:
    case LEAVE_EARNING_GRAPH_VIEW:
    case LEAVE_NOTIFICATIONS_VIEW:
    case LEAVE_WORK_PROGRESS_VIEW:
    case LEAVE_TWITTER_FEED_VIEW:
    case LEAVE_TEAM_MATES_VIEW:
    case LEAVE_TODO_LIST_VIEW:
    case LEAVE_BREADCRUMB_VIEW:
    case LEAVE_STAT_VIEW:
    case LEAVE_BASIC_PROGRESS_BAR_VIEW:
    case LEAVE_TAB_PANEL_VIEW:
    case LEAVE_STRIPED_PROGRESS_BAR_VIEW:
    case LEAVE_ALERT_VIEW:
    case LEAVE_PAGINATION_VIEW:
    case LEAVE_PROTECTED_VIEW:
      // can't leave if you aren't already inside
      if (state.currentView === action.currentView) {
        return {
          ...state,
          currentView: action.currentView,
          enterTime: action.enterTime,
          leaveTime: action.leaveTime
        };
      }
      return state;
    case GET_SIDE_MENU_TOGGLE_STATE_FROM_LOCALSTORAGE: {
      const { permanentStore = { storeValue: false }, time } = action;

      return {
        isCollapsed: Boolean(permanentStore.storeValue),
        time
      };
    }

    case OPEN_SIDE_MENU: {
      const { isCollapsed, time } = action;

      return {
        ...state,
        isCollapsed,
        time
      };
    }

    case CLOSE_SIDE_MENU: {
      const { isCollapsed, time } = action;

      return {
        ...state,
        isCollapsed,
        time
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
