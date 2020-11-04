import React, { useEffect, useState } from "react";
import SingleItem from "./SingleItem";
import Loading from "./Loading";
const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const getTours = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setTours(data);
    setLoading(false);
  };
  function deleteItem(id) {
    const newTours = tours.filter((tour) => {
      return tour.id !== id;
    });
    setTours(newTours);
  }
  console.log(tours);
  useEffect(() => {
    getTours();
  }, []);
  if (loading) {
    return <Loading />;
  }
  if (!loading) {
    return (
      <section className="container">
        <div className="header">
          <h1>Our Tours</h1>
        </div>
        <div>
          <hr />
        </div>
        {tours.length == 0 && (
          <button className='refresh-btn' onClick={() => getTours()}>Refresh</button>
        )}
        {tours.map((tour) => {
          return <SingleItem key={tour.id} {...tour} deleteItem={deleteItem} />;
        })}
      </section>
    );
  }
}

export default App;
