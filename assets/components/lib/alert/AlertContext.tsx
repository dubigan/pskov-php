import React, { useState, useContext } from 'react';

export type TError = {
  type: string;
  message: string;
};
export type TAlertsState = {
  messages: any; //Array<TError>;
};

type TAlertsContext = TAlertsState & {
  setAlerts: any; //React.SetStateAction<TAlertsState>;
};

export const AlertContext = React.createContext<TAlertsContext>({
  messages: [],
  setAlerts: null,
  //show: false,
  //timeout: 5000,
});

export type TContextProps = {
  children?: React.ReactNode;
};

export const useAlerts = () => {
  return useContext(AlertContext);
};

export const AlertProvider = ({ children }: TContextProps) => {
  const [messages, setMessages] = useState<TAlertsState>({
    messages: [],
    //show: false,
  });
  const setAlerts = (messages: any): any => {
    //console.log('AlertProvider.setAlerts', name, contextName);
    setMessages(messages);
  };
  //console.log('AlertProvider.alerts', messages);
  return <AlertContext.Provider value={{ messages, setAlerts }}>{children}</AlertContext.Provider>;
};
