import React from 'react';
import { Link } from 'react-router-dom';

export default function Error({ again }) {
    return (
        <div>
            <h1>Wystąpił błąd</h1>
            <h2>Brak danych</h2>
            <Link to="/" onClick={again}>Ponów próbę</Link>
        </div>
    );
}
