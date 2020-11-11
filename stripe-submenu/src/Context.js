import React, { useContext, useState } from "react";

const SubContext = React.createContext();
export const Context = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [navData, setNavData] = useState({});
  console.log(navData);
  const showSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const showSubmenu = (e) => {
    const display = e.target.getBoundingClientRect();
    const displayCenter = `${(display.left + display.right) / 2}px`;
    const displayTop = `${display.bottom - 3}px`;
    const displayText = e.target.textContent;
    setIsSubmenuOpen(true);
    setNavData({ displayCenter, displayTop, displayText });
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };
  return (
    <SubContext.Provider
      value={{
        isSidebarOpen,
        isSubmenuOpen,
        showSidebar,
        closeSidebar,
        showSubmenu,
        navData,
        closeSubmenu,
      }}
    >
      {children}
    </SubContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(SubContext);
};
