import React, { useState } from "react";
import useFetch from "./useFetch";
import Follower from "./Follower";
function App() {
  const { data, loading } = useFetch();
  const [page, setPage] = useState(0);
  console.log(data);
  const handlePage = (index) => {
    setPage(index);
  };
  const prevPage = () => {
    setPage((oldPage) => {
      let newPage = oldPage - 1;
      if (newPage < 0) {
        newPage = data.length - 1;
      }
      return newPage;
    });
  };
  const nextPage = () => {
    setPage((oldPage) => {
      let newPage = oldPage + 1;
      if (newPage > data.length - 1) {
        newPage = 0;
      }
      return newPage;
    });
  };
  return (
    <React.Fragment>
      <div className="section-title">
        <h1>{loading ? "loading..." : "pagination"}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {!loading &&
            data[page].map((item) => {
              return <Follower key={item.id} {...item} />;
            })}
        </div>
        {!loading && (
          <div className="btn-container">
            <button className="prev-btn" onClick={prevPage}>
              prev
            </button>
            {data.map((_, index) => {
              return (
                <button
                  className={`${
                    page === index ? "page-btn active-btn" : "page-btn"
                  } `}
                  onClick={() => handlePage(index)}
                  key={index}
                >
                  {index + 1}
                </button>
              );
            })}
            <button className="next-btn" onClick={nextPage}>
              next
            </button>
          </div>
        )}
      </section>
    </React.Fragment>
  );
}

export default App;
