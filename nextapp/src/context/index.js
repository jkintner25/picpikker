import { createContext, useContext, useReducer } from 'react';
import { reducer, initialState } from '@/store';

const AppContext = createContext();

const initializer = (initialState) => {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('picpicker')) {
      let current = localStorage.getItem('picpicker')
      let data = JSON.parse(current)
      return data
    } else {
      return initialState;
    }
  }
}

export function AppWrapper({ children }) {
  const [imageStore, dispatch] = useReducer(reducer, initialState, initializer);

  return (
    <AppContext.Provider value={{imageStore, dispatch}}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
