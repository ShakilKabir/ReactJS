import React, { useState } from "react";

const SingleItem = ({ id, image, name, info, price, deleteItem }) => {
  const [details, setDetails] = useState(info.substring(0, 200));
  return (
    <div className="item">
      <img src={image} alt="" />
      <div className="details">
        <h3>{name}</h3>
        <h3 className="price">${price}</h3>
      </div>
      <p>
        {details}...
        {details.length <= 200 ? (
          <button className="btn" onClick={() => setDetails(info)}>
            Read More
          </button>
        ) : (
          <button
            className="btn"
            onClick={() => setDetails(info.substring(0, 200))}
          >
            Show Less
          </button>
        )}
      </p>
      <button
        className="delete-btn"
        onClick={() => {
          deleteItem(id);
        }}
      >
        not interested
      </button>
    </div>
  );
};
export default SingleItem;
