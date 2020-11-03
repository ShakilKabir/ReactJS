import React, { useState } from 'react';
import data from './data'
import List from './list'
function App() {
  const [people,setPeople]=useState(data)
  // console.log(people);
  
  return (
    <main>
      <div className="container">
        <div className="header">
        <h3>{people? people.length: '2'} birthdays today</h3>
        </div>
        {people.map((person)=>{

        return <List {...person} key={person.id}/>
        })}
        <div className="btn">

        <button  onClick={()=>{
          setPeople([])}}>clear items</button>
        </div>
        
      </div>
    </main>
  );
}

export default App;
