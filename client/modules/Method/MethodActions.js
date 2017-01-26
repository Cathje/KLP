import callApi from '../../util/apiCaller';

// Export Constants
export const FETCH_METHODS = 'FETCH_METHODS';

// Export Actions
export function fetchMethods() {
  return (dispatch) => {
    return callApi('methods').then(res => {
      dispatch({
        type: FETCH_METHODS,
        methods: res.methods,
      });
    });
  };
}

