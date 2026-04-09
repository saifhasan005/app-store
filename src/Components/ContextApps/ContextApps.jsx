import React, { Children, createContext, useState } from 'react';
export const InstallAppsContext = createContext();
const ContextApps = ({ children }) => {
    const [installApp, setinstallApp] = useState([]);
    const data = {
        installApp, setinstallApp
    }
    return <InstallAppsContext.Provider value={data}>{children}</InstallAppsContext.Provider>
};

export default ContextApps;