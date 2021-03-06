import {
  ADD_CLASS,
  DELETE_CLASS,
  FOUND_CLASSES,
  IS_LOADING,
  EDIT_CLASS,
  FAILURE,
} from "../actions/instructorActions";

const initialState = {
  classes: [],
  class: {},
  error: "",
  isLoading: false,
};

const instructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CLASS:
      return {
        ...state,
        classes: action.payload,
      };
    case DELETE_CLASS:
      return state;
    case FOUND_CLASSES:
      return {
        ...state,
        isLoading: false,
        classes: action.payload,
      };
    case EDIT_CLASS:
      return {
        ...state,
        class: action.payload,
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default instructorReducer;
