import { createContext, useEffect, useState } from "react";

export const ValuteContext = createContext();

export const ValuteProvider = ({ children }) => {
  const [valute, setValute] = useState(localStorage.getItem("valute"));

  useEffect(() => {
    localStorage.setItem("valute", valute);
  }, [valute]);

  return (
    <ValuteContext.Provider value={[valute, setValute]}>
      {children}
    </ValuteContext.Provider>
  );
};
