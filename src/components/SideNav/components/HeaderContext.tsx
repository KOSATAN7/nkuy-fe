import React, { createContext, useContext, useState } from "react";

interface HeaderContextProps {
  title: string;
  setTitle: (title: string) => void;
  buttonLabel: string;
  setButtonLabel: (label: string) => void;
  buttonLink: string;
  setButtonLink: (link: string) => void;
}

const HeaderContext = createContext<HeaderContextProps | undefined>(undefined);

export const HeaderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [title, setTitle] = useState("Default Title");
  const [buttonLabel, setButtonLabel] = useState("Default Button");
  const [buttonLink, setButtonLink] = useState("/");

  return (
    <HeaderContext.Provider
      value={{ title, setTitle, buttonLabel, setButtonLabel, buttonLink, setButtonLink }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeaderContext = () => {
  const context = useContext(HeaderContext);
  if (!context) throw new Error("useHeaderContext must be used within HeaderProvider");
  return context;
};
