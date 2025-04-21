import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  
  const login = (username, userId) => {
    setUser({ 
      username, 
      userId,
      
    });
  };

  // Add user's role for a specific project
  const setProjectRole = (projectId, role) => {
    setUser(prevUser => ({
      ...prevUser,
      projects: {
        ...prevUser?.projects,
        [projectId]: { role }
      }
    }));
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, setProjectRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);