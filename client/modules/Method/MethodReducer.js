import { FETCH_METHODS } from './MethodActions';

// Initial State
const initialState = { data: [] };

const MethodReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_METHODS :
      return {
        data: action.methods,
      };

    default:
      return state;
  }
};

/* Selectors */
export const getMethods = state => state.methods.data;

// Export Reducer
export default MethodReducer;
