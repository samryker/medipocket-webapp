import userTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: false,
  signInSuccess: false,
  signUpSuccess: false,
  resetPasswordSuccess: false,
  userD: null,
  doctorD: null,
  profileD: null,
  prevRoute: null,
  token: null,
  errors: [],
  // SC
  age: null,
  gender: null,
  pregnant: null,
  country: null,
  region: null,
  describe: null,
  // doctor
  filter: "*",
  filterUpdateSuccess: false,
  appointment: null,
  appointmentUpdateSuccess: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // AUTH
    case userTypes.SET_CURRENT_USER_OUT:
      return {
        ...state,
        currentUser: false,
      };
    // SIGN
    case userTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        signInSuccess: true,
        currentUser: true,
        userD: action.payload,
      };
    case userTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpSuccess: true,
        userD: action.payload,
      };
    case userTypes.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetPasswordSuccess: action.payload,
      };
    // USER
    case userTypes.SET_USERNAME:
      return {
        ...state,
        userD: action.payload,
      };
    case userTypes.SET_USER:
      return {
        ...state,
        userD: action.payload,
      };
    case userTypes.SET_DOCTOR:
      return {
        ...state,
        doctorD: action.payload,
      };
    case userTypes.SET_PROFILE_DATA:
      return {
        ...state,
        profileD: action.payload,
      };
    case userTypes.SET_PREV_ROUTE:
      return {
        ...state,
        prevRoute: action.payload,
      };

    // TOKEN
    case userTypes.SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case userTypes.RESET_TOKEN:
      return {
        ...state,
        token: null,
      };
    // SC
    case userTypes.UPDATE_SC_AGE:
      return {
        ...state,
        age: action.payload,
      };
    case userTypes.UPDATE_SC_GENDER:
      return {
        ...state,
        gender: action.payload,
      };
    case userTypes.UPDATE_SC_PREGNANT:
      return {
        ...state,
        pregnant: action.payload,
      };
    case userTypes.UPDATE_SC_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };
    case userTypes.UPDATE_SC_REGION:
      return {
        ...state,
        region: action.payload,
      };
    case userTypes.UPDATE_SC_DESCRIBE:
      return {
        ...state,
        describe: action.payload,
      };
    case userTypes.RESET_SC:
      return {
        ...state,
        age: null,
        gender: null,
        pregnant: null,
        country: null,
        region: null,
        describe: null,
      };
    // DOCTOR
    case userTypes.UPDATE_DOCTOR_FILTER:
      return {
        ...state,
        filter: action.payload,
        filterUpdateSuccess: true,
      };
    case userTypes.RESET_DOCTORS_FILTER_SUCCESS:
      return {
        ...state,
        filterUpdateSuccess: false,
      };
    case userTypes.UPDATE_DOCTOR_APPOINTMENT:
      return {
        ...state,
        appointment: action.payload,
        appointmentUpdateSuccess: true,
      };
    case userTypes.RESET_DOCTORS_APPOINTMENT_SUCCESS:
      return {
        ...state,
        appointmentUpdateSuccess: false,
      };
    case userTypes.RESET_DOCTORS:
      return {
        ...state,
        filter: "*",
        filterUpdateSuccess: false,
        appointment: null,
        appointmentUpdateSuccess: false,
      };
    // ERRORS
    case userTypes.RESET_ERRORSSTATE_FORMS:
      return {
        ...state,
        errors: [],
      };
    case userTypes.SET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
    case userTypes.RESET_STATES:
      return {
        // currentUser: false,
        signInSuccess: false,
        signUpSuccess: false,
        resetPasswordSuccess: false,
        userD: null,
        doctorD: null,
        profileD: null,
        prevRoute: null,
        token: null,
        errors: [],
      };
    // DEFAULT
    default:
      return state;
  }
};
export default userReducer;
