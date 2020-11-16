import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../Context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const refContainer = useRef(null);
  const searchForm = () => {
    setSearchTerm(refContainer.current.value);
  };
  useEffect(() => {
    refContainer.current.focus();
  });
  return (
    <section className="section search">
      <form
        className="search-form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input ref={refContainer} onChange={searchForm} />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
