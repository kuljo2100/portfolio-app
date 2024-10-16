import React, { createContext, useState } from 'react';

// Create the UserContext
export const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ username: '', isAdmin: false });

  // This function will allow you to update the user
  const login = (username, isAdmin) => {
    setUser({ username, isAdmin });
  };

  return (
    <UserContext.Provider value={{ user, login }}>
      {children}
    </UserContext.Provider>
  );
};
