const GET_STORAGE = 'SET_STORAGE';
const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const CLEAR_STORAGE = 'CLEAR_STORAGE'

export const getStorage = (dispatch, payload) => dispatch({ type: GET_STORAGE, payload });
export const addItem = (dispatch, payload) => dispatch({ type: ADD_ITEM, payload });
export const removeItem = (dispatch, payload) => dispatch({ type: REMOVE_ITEM, payload });
export const clearStorage = (dispatch) => dispatch({ type: CLEAR_STORAGE });

export const initialState = {};

export const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_STORAGE: {
      // console.log('GET STORAGE PAYLOAD', payload)
      let newState = initialState
      payload.forEach(image => {
        newState[image.id] = image
      })
      return newState
    }
    case ADD_ITEM: {
      return { ...state, [payload.id]: payload }
    }
    case REMOVE_ITEM: {
      let newState = { ...state }
      delete newState[payload.id]
      return newState
    }
    case CLEAR_STORAGE: {
      if (localStorage.getItem('picpicker')) localStorage.removeItem('picpicker')
      return initialState;
    }
    default:
      return state;
  }
};
