import React from 'react';

const List=({name, age, image})=>{
   return <div className="item-container">
          <div className="item">
            <img src={image} alt=""/>
            <div className="details">

            <h4>{name}</h4>
            <p>{age} years</p>
            </div>
          </div>

        </div>
}
export default List