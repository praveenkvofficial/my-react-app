// src/App.js
import React from 'react';
import useFetch from './useFetch'; 
import './App.css'; 

const App = () => {
    const { data, loading, error } = useFetch('https://api.escuelajs.co/api/v1/products');

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    const placeholderDomains = ['placeimg.com', 'loremflickr.com', 'dummyimage.com', 'placehold.co', 'example.com'];

    // Filter the data to only include products with valid image URLs
    const validProducts = data.filter(item => 
        item.images && 
        item.images.length > 0 && 
        item.images[0].startsWith('http') &&
        !placeholderDomains.some(domain => item.images[0].includes(domain))
    );

    return (
        <div className="container">
            <h1>Photos</h1>
            <div className="photos-grid">
                {validProducts.map(item => (
                    <div className="photo-card" key={item.id}>
                        <img src={item.images[0]} alt={item.title} />
                        <p>{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
