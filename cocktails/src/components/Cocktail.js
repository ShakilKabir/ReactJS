import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context";

const Cocktail = () => {
  const { cocktails } = useGlobalContext();
  return (
    <>
      {cocktails.map((item) => {
        const { id, name, glass, info, image } = item;
        return (
          <article className="cocktail" key={id}>
            <div className="img-container">
              <img src={image} alt="asdf" />
            </div>
            <div className="cocktail-footer">
              <h3>{name}</h3>
              <h4>{glass}</h4>
              <p>{info}</p>
              <Link
                to={`/cocktails/${id}`}
                className="btn btn-primary btn-details"
              >
                details
              </Link>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Cocktail;
