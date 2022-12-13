import localTypes from "./local.types";

export const setDrawerShown = () => async (dispatch) => {
  try {
    dispatch({
      type: localTypes.SHOW_DRAWER,
    });
  } catch (err) {
    console.log(err);
  }
};
