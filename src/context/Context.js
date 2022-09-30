import React, { useState, createContext } from 'react';

export const SocialMediaStore = createContext();

export const SocialMediaProvider = ({ children }) => {
    let initialState;
    const data = JSON.parse(localStorage.getItem('authData'))

    if (data) {
        initialState = {
            name: data.result.name,
            id: data.result.googleId || data.result._id,
            imageUrl: data.result.imageUrl,
            isLoggedIn: true
        }
    } else {
        initialState = { name: '', id: '', imageUrl: '', isLoggedIn: false }
    }
    const [isEditing, setisEditing] = useState(false);
    const [currentId, setCurrentId] = useState(null);
    const [alertMessage, setAlertMessage] = useState({
        open: false,
        message: '',
        severity: '',
    });
    const [pagination, setPagination] = useState({ page: 1, limit: 6 });
    const [user, setUser] = useState(initialState)

    return (
        <SocialMediaStore.Provider value={{
            isEditing, setisEditing,
            currentId, setCurrentId,
            alertMessage, setAlertMessage,
            pagination, setPagination,
            user, setUser
        }}>
            {children}
        </SocialMediaStore.Provider>
    );
}