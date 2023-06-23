import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';

const Card = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/realtors/');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const cardContainerStyle = {
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center', 
  };

  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '10px',
    marginBottom: '10px',
    marginRight: '10px', 
  };

  const cardContentStyle = {
    backgroundColor: '#f9f9f9',
    padding: '10px',
  };

  return (
    <div style={cardContainerStyle}>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <div style={cardStyle}>
        <div style={cardContentStyle}>
          <h2>Card</h2>
          {data ? (
            <ul>
              {data.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          ) : (
            <p>Loading data...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
