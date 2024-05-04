"use client";

import { useModal } from "@/hook/use-modal";
import React, { createContext, useContext } from "react";

interface ContextType {
  isOpen?: boolean;
  handleOpen?: () => void;
  handleClose?: () => void;
}

interface MainContextProviderProps
  extends React.PropsWithChildren,
    ContextType {}

const MainContext = createContext<ContextType>({});

const MainContextProvider = ({ children }: MainContextProviderProps) => {
  const [isOpen, handleOpen, handleClose] = useModal();

  return (
    <MainContext.Provider
      value={{
        isOpen,
        handleOpen,
        handleClose,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = () => {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error("useMainContext must be used within a MainContextProvider");
  }
  return context;
};

export default MainContextProvider;
