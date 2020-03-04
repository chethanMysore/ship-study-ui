import { format } from 'date-fns';
import { type Dispatch, type GetState } from '../../types/redux-thunk';
import { type State } from '../../types/redux/modules/sideMenu';
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
} from '../../constants/actionTypes';

type PermanentStore = {
  required: boolean,
  storeKey: string,
  storeValue: boolean,
  ReadOrWrite: boolean, // write key / value to localStorage
};

export function enterHome(time: Date = format(new Date())) {
  return {
    type: ENTER_HOME_VIEW,
    currentView: 'Home',
    enterTime: time,
    leaveTime: null,
  };
}

export function leaveHome(time: Date = format(new Date())) {
  return {
    type: LEAVE_HOME_VIEW,
    currentView: 'Home',
    enterTime: null,
    leaveTime: time,
  };
}

export function enterSimpleTables(time: Date = format(new Date())) {
  return {
    type: ENTER_SIMPLE_TABLES_VIEW,
    currentView: 'SimpleTables',
    enterTime: time,
    leaveTime: null,
  };
}

export function leaveSimpleTables(time: Date = format(new Date())) {
  return {
    type: LEAVE_SIMPLE_TABLES_VIEW,
    currentView: 'SimpleTables',
    enterTime: null,
    leaveTime: time,
  };
}

export function enterBasicElements(time: Date = format(new Date())) {
  return {
    type: ENTER_BASIC_ELEMENTS_VIEW,
    currentView: 'BasicElements',
    enterTime: time,
    leaveTime: null,
  };
}

export function leaveBasicElements(time: Date = format(new Date())) {
  return {
    type: LEAVE_BASIC_ELEMENTS_VIEW,
    currentView: 'BasicElements',
    enterTime: null,
    leaveTime: time,
  };
}

export function enterGeneral(time: Date = format(new Date())) {
  return {
    type: ENTER_GENERAL_VIEW,
    currentView: 'General',
    enterTime: time,
    leaveTime: null,
  };
}

export function leaveGeneral(time: Date = format(new Date())) {
  return {
    type: LEAVE_GENERAL_VIEW,
    currentView: 'General',
    enterTime: null,
    leaveTime: time,
  };
}

export function enterPageNotFound(time: Date = format(new Date())) {
  return {
    type: ENTER_PAGE_NOT_FOUND_VIEW,
    currentView: 'PageNotFound',
    enterTime: time,
    leaveTime: null,
  };
}

export function leavePageNotFound(time: Date = format(new Date())) {
  return {
    type: LEAVE_PAGE_NOT_FOUND_VIEW,
    currentView: 'PageNotFound',
    enterTime: null,
    leaveTime: time,
  };
}

export function enterStatsCard(time: Date = format(new Date())) {
  return {
    type: ENTER_STATS_CARD_VIEW,
    currentView: 'StatsCard',
    enterTime: time,
    leaveTime: null,
  };
}

export function leaveStatsCard(time: Date = format(new Date())) {
  return {
    type: LEAVE_STATS_CARD_VIEW,
    currentView: 'StatsCard',
    enterTime: null,
    leaveTime: time,
  };
}

export function enterEarningGraph(time: Date = format(new Date())) {
  return {
    type: ENTER_EARNING_GRAPH_VIEW,
    currentView: 'EarningGraph',
    enterTime: time,
    leaveTime: null,
  };
}

export function leaveEarningGraph(time: Date = format(new Date())) {
  return {
    type: LEAVE_EARNING_GRAPH_VIEW,
    currentView: 'EarningGraph',
    enterTime: null,
    leaveTime: time,
  };
}

export function enterNotifications(time: Date = format(new Date())) {
  return {
    type: ENTER_NOTIFICATIONS_VIEW,
    currentView: 'Notifications',
    enterTime: time,
    leaveTime: null,
  };
}

export function leaveNotifications(time: Date = format(new Date())) {
  return {
    type: LEAVE_NOTIFICATIONS_VIEW,
    currentView: 'Notifications',
    enterTime: null,
    leaveTime: time,
  };
}

export function enterWorkProgress(time: Date = format(new Date())) {
  return {
    type: ENTER_WORK_PROGRESS_VIEW,
    currentView: 'WorkProgress',
    enterTime: time,
    leaveTime: null,
  };
}

export function leaveWorkProgress(time: Date = format(new Date())) {
  return {
    type: LEAVE_WORK_PROGRESS_VIEW,
    currentView: 'WorkProgress',
    enterTime: null,
    leaveTime: time,
  };
}

export function enterTwitterFeed(time: Date = format(new Date())) {
  return {
    type: ENTER_TWITTER_FEED_VIEW,
    currentView: 'TwitterFeed',
    enterTime: time,
    leaveTime: null,
  };
}

export function leaveTwitterFeed(time: Date = format(new Date())) {
  return {
    type: LEAVE_TWITTER_FEED_VIEW,
    currentView: 'TwitterFeed',
    enterTime: null,
    leaveTime: time,
  };
}

export function enterTeamMatesView(time: Date = format(new Date())) {
  return {
    type: ENTER_TEAM_MATES_VIEW,
    currentView: 'TeamMatesView',
    enterTime: time,
    leaveTime: null,
  };
}

export function leaveTeamMatesView(time: Date = format(new Date())) {
  return {
    type: LEAVE_TEAM_MATES_VIEW,
    currentView: 'TeamMatesView',
    enterTime: null,
    leaveTime: time,
  };
}

export function enterTodoListView(time: Date = format(new Date())) {
  return {
    type: ENTER_TODO_LIST_VIEW,
    currentView: 'TodoListView',
    enterTime: time,
    leaveTime: null,
  };
}

export function leaveTodoListView(time: Date = format(new Date())) {
  return {
    type: LEAVE_TODO_LIST_VIEW,
    currentView: 'TodoListView',
    enterTime: null,
    leaveTime: time,
  };
}

export function enterBreadcrumb(time: Date = format(new Date())) {
  return {
    type: ENTER_BREADCRUMB_VIEW,
    currentView: 'BreadcrumbView',
    enterTime: time,
    leaveTime: null,
  };
}

export function leaveBreadcrumb(time: Date = format(new Date())) {
  return {
    type: LEAVE_BREADCRUMB_VIEW,
    currentView: 'BreadcrumbView',
    enterTime: null,
    leaveTime: time,
  };
}

export function enterStat(time: Date = format(new Date())) {
  return {
    type: ENTER_STAT_VIEW,
    currentView: 'StatView',
    enterTime: time,
    leaveTime: null,
  };
}

export function leaveStat(time: Date = format(new Date())) {
  return {
    type: LEAVE_STAT_VIEW,
    currentView: 'StatView',
    enterTime: null,
    leaveTime: time,
  };
}

export function enterBasicProgressBar(time: Date = format(new Date())) {
  return {
    type: ENTER_BASIC_PROGRESS_BAR_VIEW,
    currentView: 'BasicProgressBarView',
    enterTime: time,
    leaveTime: null,
  };
}

export function leaveBasicProgressBar(time: Date = format(new Date())) {
  return {
    type: LEAVE_BASIC_PROGRESS_BAR_VIEW,
    currentView: 'BasicProgressBarView',
    enterTime: null,
    leaveTime: time,
  };
}

export function enterTabPanel(time: Date = format(new Date())) {
  return {
    type: ENTER_TAB_PANEL_VIEW,
    currentView: 'TabPanel',
    enterTime: time,
    leaveTime: null,
  };
}

export function leaveTabPanel(time: Date = format(new Date())) {
  return {
    type: LEAVE_TAB_PANEL_VIEW,
    currentView: 'TabPanel',
    enterTime: null,
    leaveTime: time,
  };
}

export function enterStripedProgressBar(time: Date = format(new Date())) {
  return {
    type: ENTER_STRIPED_PROGRESS_BAR_VIEW,
    currentView: 'StripedProgressBarView',
    enterTime: time,
    leaveTime: null,
  };
}

export function leaveStripedProgressBar(time: Date = format(new Date())) {
  return {
    type: LEAVE_STRIPED_PROGRESS_BAR_VIEW,
    currentView: 'StripedProgressBarView',
    enterTime: null,
    leaveTime: time,
  };
}

export function enterAlert(time: Date = format(new Date())) {
  return {
    type: ENTER_ALERT_VIEW,
    currentView: 'AlertView',
    enterTime: time,
    leaveTime: null,
  };
}

export function leaveAlert(time: Date = format(new Date())) {
  return {
    type: LEAVE_ALERT_VIEW,
    currentView: 'AlertView',
    enterTime: null,
    leaveTime: time,
  };
}

export function enterPagination(time: Date = format(new Date())) {
  return {
    type: ENTER_PAGINATION_VIEW,
    currentView: 'PaginationView',
    enterTime: time,
    leaveTime: null,
  };
}

export function leavePagination(time: Date = format(new Date())) {
  return {
    type: LEAVE_PAGINATION_VIEW,
    currentView: 'PaginationView',
    enterTime: null,
    leaveTime: time,
  };
}

export function enterLogin(time: Date = format(new Date())) {
  return {
    type: ENTER_LOGIN_VIEW,
    currentView: 'Login',
    enterTime: time,
    leaveTime: null,
  };
}

export function leaveLogin(time: Date = format(new Date())) {
  return {
    type: LEAVE_LOGIN_VIEW,
    currentView: 'Login',
    enterTime: null,
    leaveTime: time,
  };
}

export function enterProtected(time: Date = format(new Date())) {
  return {
    type: ENTER_PROTECTED_VIEW,
    currentView: 'Protected',
    enterTime: time,
    leaveTime: null,
  };
}

export function leaveProtected(time: Date = format(new Date())) {
  return {
    type: LEAVE_PROTECTED_VIEW,
    currentView: 'Protected',
    enterTime: null,
    leaveTime: time,
  };
}

export function getSideMenuCollpasedStateFromLocalStorage(
  time?: string = format(new Date()),
): Action {
  return {
    type: GET_SIDE_MENU_TOGGLE_STATE_FROM_LOCALSTORAGE,
    time,
    // for localStorageManager middleware
    permanentStore: {
      required: true,
      storeKey: SIDEMU_IS_COLLAPSED_KEY,
      storeValue: false, // set default to false
      ReadOrWrite: READ_LOCALSTORAGE, // write key / value to localStorage
    },
  };
}
export function openSideMenu(time?: string = format(new Date())): Action {
  return {
    type: OPEN_SIDE_MENU,
    isCollapsed: false,
    time,
    // for localStorageManager middleware
    permanentStore: {
      required: true,
      storeKey: SIDEMU_IS_COLLAPSED_KEY,
      storeValue: SIDEMU_IS_NOT_COLLAPSED_VALUE,
      ReadOrWrite: WRITE_LOCALSTORAGE, // write key / value to localStorage
    },
  };
}
export function closeSideMenu(time?: string = format(new Date())): Action {
  return {
    type: CLOSE_SIDE_MENU,
    isCollapsed: true,
    time,
    // for localStorageManager middleware
    permanentStore: {
      required: true,
      storeKey: SIDEMU_IS_COLLAPSED_KEY,
      storeValue: SIDEMU_IS_COLLAPSED_VALUE,
      ReadOrWrite: WRITE_LOCALSTORAGE, // write key / value to localStorage
    },
  };
}
export function toggleSideMenu() {
  return (
    dispatch: Dispatch<Action>,
    getState: GetState<{ sideMenu: State }>,
  ) => {
    const state = getState();
    const sideMenuStore = state.sideMenu;

    if (sideMenuStore.isCollapsed) {
      return dispatch(openSideMenu());
    }

    dispatch(closeSideMenu());
  };
}