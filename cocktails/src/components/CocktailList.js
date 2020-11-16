import React from "react";
import { useGlobalContext } from "../Context";
import Cocktail from "./Cocktail";
import Loading from "./Loading";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();
  console.log(cocktails);
  if (loading) {
    return <Loading />;
  }
  if (!cocktails) {
    return (
      <h2 className="section-title">
        No Cocktails Matched Your Search Criteria
      </h2>
    );
  }

  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        <Cocktail />
      </div>
    </section>
  );
};

export default CocktailList;
