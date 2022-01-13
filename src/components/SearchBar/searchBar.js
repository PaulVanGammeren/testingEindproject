import React, { useState } from 'react';
import './SearchBar.css';


function SearchBar({ setUsernameHandler }) {
    // const [query, setQuery] = useState('');
    const [username, setUsername] = useState("")


    function onFormSubmit(e) {
        e.preventDefault();
        console.log('submitted!');
        console.log(username);


    }

    return (
        <form className="searchbar" onSubmit={onFormSubmit}>
            <input
                type="text"
                name="search"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="zoek een gebruiker"
            />

            <button type="submit"
            >
                Zoek
            </button>
        </form>
    );
}

export default SearchBar;