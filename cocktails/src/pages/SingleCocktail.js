import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { useGlobalContext } from "../Context";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { loading, setLoading } = useGlobalContext();
  const [cocktails, setCocktails] = useState([]);
  const { id } = useParams();
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${url}${id}`);
      const data = await response.json();
      console.log(data);
      const newData = data.drinks.map((item) => {
        const {
          idDrink: id,
          strDrink: name,
          strGlass: glass,
          strAlcoholic: info,
          strDrinkThumb: image,
          strCategory: category,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = item;
        const ingredient = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ];
        console.log(ingredient);
        return {
          id,
          name,
          glass,
          info,
          image,
          category,
          instructions,
          ingredient,
        };
      });
      setCocktails(newData);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(cocktails);
  if (loading) {
    return <Loading />;
  }
  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        Back home
      </Link>
      {cocktails.map((item) => {
        const {
          name,
          glass,
          info,
          image,
          ingredient,
          instructions,
          category,
        } = item;
        return (
          <>
            <h2 className="section-title">{name}</h2>
            <div className="drink">
              <img src={image} alt="asdf"></img>
              <div className="drink-info">
                <p>
                  <span className="drink-data">name :</span> {name}
                </p>
                <p>
                  <span className="drink-data">category :</span> {category}
                </p>
                <p>
                  <span className="drink-data">info :</span> {info}
                </p>
                <p>
                  <span className="drink-data">glass :</span> {glass}
                </p>
                <p>
                  <span className="drink-data">instructons :</span>{" "}
                  {instructions}
                </p>
                <p>
                  <span className="drink-data">ingredients :</span>
                  {ingredient.map((ingredient) => {
                    if (ingredient) {
                      return <span>{ingredient}</span>;
                    } else {
                      return null;
                    }
                  })}
                </p>
              </div>
            </div>
          </>
        );
      })}
    </section>
  );
};

export default SingleCocktail;
