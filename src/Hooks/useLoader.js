import { useReducer } from "react";

export const useLoader = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setLoading = () => dispatch({ type: onLoading });
  const setComplete = () => dispatch({ type: onComplete });
  const setError = () => dispatch({ type: onError });

  return {
    loading: state.loading,
    complete: state.complete,
    error: state.error,
    setLoading,
    setComplete,
    setError,
  };
};

const onComplete = "ON_COMPLETE";
const onLoading = "ON_COMPLETE";
const onError = "ON_ERROR";

const reducer = (state, action) => {
  switch (action.type) {
    case onComplete: {
      return {
        loading: false,
        complete: true,
        error: false,
      };
    }
    case onLoading: {
      return initialState;
    }
    case onError: {
      return {
        loading: false,
        complete: true,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
};

const initialState = {
  loading: true,
  complete: false,
  error: false,
};
