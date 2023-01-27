import React, { useEffect, useState } from 'react';

export const OptionContext = React.createContext();

const OptionContextProvider = ({ children }) => {
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);

  return (
    <OptionContext.Provider
      value={{
        isAdminPanelOpen,
        setIsAdminPanelOpen,
      }}
    >
      {children}
    </OptionContext.Provider>
  );
};

export default OptionContextProvider;
