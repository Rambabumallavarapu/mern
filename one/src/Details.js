import React, { useState, useEffect } from 'react';
import { Link,NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function Details() {
  const [display, setDisplay] = useState([]);

  async function getData() {
    try {
      let rawdata = await fetch("https://jsonplaceholder.typicode.com/posts");
      let convertData = await rawdata.json();
      setDisplay(convertData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>Details Page</h2>
      {display.length > 0 && (
        <Nav className="me-auto">
          {display.map((obj,index) => (
            
                        <NavLink to={`/details/${obj.id}`} className="nav-link">{obj.title}</NavLink>
            
          ))}
        </Nav>
      )}
      {display.length === 0 && <p>Loading data...</p>}
    </div>
  );
}

export default Details;
