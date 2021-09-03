import { useState, useEffect } from "react";
import { HISTORIC_KEY_STORAGE } from "../utils/constants/appConstants";

function usePersistedState(initialState) {
  const [state, setState] = useState([]);

  useEffect(() => {
    const loadState = () => {
      const item = localStorage.getItem(HISTORIC_KEY_STORAGE);
      setState(item ? JSON.parse(item) : initialState);

      localStorage.removeItem(HISTORIC_KEY_STORAGE);
    };

    loadState();
  }, []);

  useEffect(() => {
    const storeState = () => {
      localStorage.setItem(HISTORIC_KEY_STORAGE, JSON.stringify(state));
    };

    if (state?.length) {
      storeState();
    }
  }, [state]);

  return [state, setState];
}

export default usePersistedState;
