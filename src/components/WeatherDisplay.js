import React, { useState } from 'react';
import locations from '../locations.json';
import '../WeatherDisplay.css';

function WeatherDisplay({ location }) {
    const [search, setSearch] = useState('');
    const [weather, setWeather] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const locationWeather = locations.find(loc => loc.city.toLowerCase() === search.toLowerCase());
        setWeather(locationWeather);
    };

    return (
        <div className="weather-display">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="search-input"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Search for a location"
                />
                <button type="submit">Search</button>
            </form>
            <br />
            {weather && (   
                <>
                    <h2 className="city">{weather.city}</h2>
                    <h3 className="weather-info">{weather.temperature} </h3>
                    <p className="weather-info">{weather.weather}</p>
                </>
            )}
        </div>
    );
}

export default WeatherDisplay;