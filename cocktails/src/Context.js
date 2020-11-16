import React, { useContext, useEffect } from "react";
import { useState } from "react";
const AppContext = React.createContext();
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
function AppProvider({ children }) {
  const [cocktails, setCocktails] = useState([]);
  const [searchTerm, setSearchTerm] = useState("a");
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const newData = data.drinks.map((item) => {
        const {
          idDrink: id,
          strDrink: name,
          strGlass: glass,
          strAlcoholic: info,
          strDrinkThumb: image,
        } = item;
        return { id, name, glass, info, image };
      });
      setCocktails(newData);
      setLoading(false);
    } catch (error) {
      setCocktails("");
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, [searchTerm]);
  console.log(cocktails);
  return (
    <AppContext.Provider
      value={{ cocktails, setSearchTerm, loading, setLoading }}
    >
      {children}
    </AppContext.Provider>
  );
}
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider };
