import React, { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [userType, setUserType] = useState(null);
  const [chat, setChat] = useState([]);
  const [resume, setResume] = useState({});
  const [recommendList, setRecommendList] = useState([]);
  return (
    <AppContext.Provider value={{
      userType, setUserType,
      chat, setChat,
      resume, setResume,
      recommendList, setRecommendList
    }}>
      {children}
    </AppContext.Provider>
  );
} 