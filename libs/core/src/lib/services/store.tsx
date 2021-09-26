import React, { useState } from "react";
import { useContext } from "react";
import { Drugstore } from '@farmapp2/core';

const StoreContext = React.createContext<any>({});
export const useStore = () => useContext(StoreContext);

export const Provider: React.FC = ({ children }) => {
  const [drugstores, setDrugstores] = useState<Drugstore[]>([]);

  const value = {
    drugstores,
    updateDrugstore: setDrugstores,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
