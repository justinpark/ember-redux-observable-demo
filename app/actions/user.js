import { type } from './util';

/**
 * Define the action types
 */
export const ActionTypes = {
  REQUEST_READ: type('[User] Request Read'),
  LOAD: type('[User] Load'),
  LOADING: type('[User] Loading'),
  REQUEST_FAIL: type('[User] Request Fail'),
};

function request(params) {
  return {
    type: ActionTypes.REQUEST_READ,
    payload: {
      params,
      source: 'search'
    }
  };
}

function loading() {
  return {
    type: ActionTypes.LOADING
  };
}

function loadUser(response) {
  return {
    type: ActionTypes.LOAD,
    payload: response
  };
}

function requestFail() {
  return {
    type: ActionTypes.REQUEST_FAIL,
  };
}

export const Actions = {
  request,
  loading,
  loadUser,
  requestFail
};