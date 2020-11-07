import React, { useState, useEffect } from "react";
import data from "./data";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { FaQuoteRight } from "react-icons/fa";
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (index > people.length - 1) {
      setIndex(0);
    }
    if (index < 0) {
      setIndex(people.length - 1);
    }
  }, [people, index]);
  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  return (
    <main>
      <section className="section">
        <div className="header">
          <h2>
            <span>/</span> reviews
          </h2>
        </div>
        <div className="section-center">
          {people.map((person, pIndex) => {
            console.log(person);
            const { image, name, title, quote } = person;
            let position = "nextSlide";
            if (pIndex === index) {
              position = "activeSlide";
            }
            if (
              pIndex === index - 1 ||
              (index === 0 && pIndex === people.length - 1)
            ) {
              position = "lastSlide";
            }
            return (
              <article className={position} key={person.id}>
                <img src={image} alt="" />
                <h4>{name}</h4>
                <p style={{ color: "black", textTransform: "capitalize" }}>
                  {title}
                </p>
                <p>{quote}</p>
                <div className="quote">
                  <FaQuoteRight />
                </div>
              </article>
            );
          })}

          <button
            onClick={() => {
              setIndex(index - 1);
            }}
            className="prev-btn btn"
          >
            <MdNavigateBefore />
          </button>
          <button
            onClick={() => {
              setIndex(index + 1);
            }}
            className="next-btn btn"
          >
            <MdNavigateNext />
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
