import React, { useState, useEffect } from "react";
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";
const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";
function App() {
  const [random, setRandom] = useState("");
  const [value, setValue] = useState("name");
  const [loading, setLoading] = useState(true);
  const handleUser = (e) => {
    setValue(e.currentTarget.dataset.label);
  };

  const getData = async () => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    const person = data.results[0];
    const {
      name: { first, last },
    } = person;
    const { email } = person;
    const { phone } = person;
    const {
      dob: { age },
    } = person;
    const {
      login: { password },
    } = person;
    const {
      location: {
        street: { number, name },
      },
    } = person;
    const {
      picture: { large: image },
    } = person;
    const newPerson = {
      image,
      name: `${first} ${last}`,
      email,
      age,
      street: `${number} ${name}`,
      phone,
      password,
    };
    setRandom(newPerson);
    setLoading(false);
    setValue("name");
  };
  console.log(random);
  useEffect(() => {
    getData();
  }, []);
  return (
    <React.Fragment>
      <div className="block bcg-black"></div>
      <div className="block">
        <div className="container">
          <img
            src={`${random.image || defaultImage}`}
            alt="image"
            className="user-img"
          />
          <p className="user-title">My {value} is</p>
          <p className="user-value">{random[value]}</p>
          <div className="values-list">
            <button className="icon" data-label="name" onMouseOver={handleUser}>
              <FaUser />
            </button>
            <button
              className="icon"
              data-label="email"
              onMouseOver={handleUser}
            >
              <FaEnvelopeOpen />
            </button>
            <button className="icon" data-label="age" onMouseOver={handleUser}>
              <FaCalendarTimes />
            </button>
            <button
              className="icon"
              data-label="street"
              onMouseOver={handleUser}
            >
              <FaMap />
            </button>
            <button
              className="icon"
              data-label="phone"
              onMouseOver={handleUser}
            >
              <FaPhone />
            </button>
            <button
              className="icon"
              data-label="password"
              onMouseOver={handleUser}
            >
              <FaLock />
            </button>
          </div>
          <button className="btn" type="button" onClick={getData}>
            {loading ? "loading..." : " random user"}
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
