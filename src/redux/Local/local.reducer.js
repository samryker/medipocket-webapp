import localTypes from "./local.types";

const INITIAL_STATE = {
  isDrawerShown: false,
};

const localReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // AUTH
    case localTypes.SHOW_DRAWER:
      return {
        ...state,
        isDrawerShown: !state.isDrawerShown,
      };
    case localTypes.RESET_STATES:
      return {
        isDrawerShown: false,
      };
    // DEFAULT
    default:
      return state;
  }
};

export default localReducer;
