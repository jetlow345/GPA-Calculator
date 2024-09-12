// src/components/UserContext/UserContext.jsx
import React, { createContext, useContext, useState } from 'react';

// Create the context
const UserContext = createContext();

// Provider component to wrap around parts of the app where the context is needed
export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState({
        name: '',
        university: '',
        degree: '',
        scoreGoal: '',
        age: '',
        location: '',
        objective: '',
    });

    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook to use the UserContext
export const useUserContext = () => useContext(UserContext);