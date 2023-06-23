import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const Card = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/listings/', {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg3NTEwMzc2LCJpYXQiOjE2ODc1MTAwNzYsImp0aSI6ImFjNDk3M2FiNmE2MTQ2NzFhZTg4OWIwOWY1NjQ3NjRhIiwidXNlcl9pZCI6NX0.eYO6PrmmrKoZ2IUCdatrdpTbxuj5_W6WkdkUcbXsGLk',
          },
        });
        setListings(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '10px',
    marginBottom: '10px',
  };

  const cardContentStyle = {
    backgroundColor: '#f9f9f9',
    padding: '10px',
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={cardStyle}>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <div style={cardContentStyle}>
        <h2>Card</h2>
        {listings.map(listing => (
          <p key={listing.id}>{listing.title}</p>
        ))}
      </div>
    </div>
  );
};

export default Card;
