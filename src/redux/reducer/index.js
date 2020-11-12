import { GET_PROJECT_PROPERTIES } from "../constants/action-type";

const initialState = {
  projectProperties: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PROJECT_PROPERTIES:
      return {
        ...state,
        projectProperties: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
