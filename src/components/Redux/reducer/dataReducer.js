import { FETCH, SENDDATAOK } from "../action/dataAction";

const initialState = {
  pasien: [],
  isLoading: false,
  error: null,
};

function dataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        isLoading: true,
      };
    case SENDDATAOK:
      return {
        ...state,
        pasien: action.payload,
        isLoading: false,
      };
      console.log(action);
    default:
      return state;
  }
}

export default dataReducer;
