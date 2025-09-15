import React from 'react';
import useFetch from './useFetch';
import './App.css';

function App() {
    const result = useFetch('https://api.escuelajs.co/api/v1/products');

    if (result.loading) {
        return (
            <div className="centered">
                <div>Loading...</div>
            </div>
        );
    }

    if (result.error) {
        return (
            <div className="centered">
                <div>Error: {result.error}</div>
            </div>
        );
    }

    let products = [];
    if (result.data) {
        products = result.data.filter(function(item) {
            if (!item.images || item.images.length === 0) return false;
            if (!item.images[0].startsWith('http')) return false;
            if (item.images[0].includes('placeimg.com') || item.images[0].includes('loremflickr.com') || item.images[0].includes('dummyimage.com') || item.images[0].includes('placehold.co')) return false;
            return true;
        });
    }

    return (
        <div className="container">
            <h1>Photos</h1>
            <div className="photos-grid">
                {products.map(function(item) {
                    return (
                        <div className="photo-card" key={item.id}>
                            <img src={item.images[0]} alt={item.title} />
                            <p>{item.title}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default App;
