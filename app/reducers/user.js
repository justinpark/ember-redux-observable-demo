import { ActionTypes } from '../actions/user';

/**
 * Define the schema
 */
const INITIAL_STATE = {

  /**
   * State for loading
   */
  loading: false,

  /**
   * State for loaded
   */
  loaded: false,

  /**
   * List the items in order
   */
  ids: [],

  /**
   * Items in hash map
   */
  entities: {}
};

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case ActionTypes.LOAD:
      return Object.assign(state, {
        loading: false,
        loaded: true,
      });

    case ActionTypes.LOADING:
      return Object.assign(state, {
        loading: true
      });
  }
  return state;
}
