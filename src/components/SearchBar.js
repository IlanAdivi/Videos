import React, { useState } from 'react';

function SearchBar({ onFormSubmit }) {
    const [term, setTerm] = useState('buildings');

    return (
        <div className="search-bar ui segment">
            <form onSubmit={event => {
                event.preventDefault();
                onFormSubmit(term);

            }} className="ui form">
                <div className="field">
                    <label>Videos Search</label>
                    <input
                        type="text"
                        value={term}
                        onChange={event => setTerm(event.target.value)} />
                </div>
            </form>
        </div>
    );
};

export default SearchBar;