import React from 'react';
import { Outlet, useParams } from 'react-router-dom';

// Composants pour les sous-pages
function UserAbout() {
    let { id } = useParams();
    return <h2>À propos de l'utilisateur {id}</h2>;
}

function UserSettings() {
    const { id } = useParams();

    return (
        <div>
            <h2>Settings for User ID: {id}</h2>
        </div>
    );
}


//page principale avec Outlet
function UserProfile() {
    const { id } = useParams();

    return (
        <div>
            <h3>User ID: {id}</h3>
            <Outlet />
        </div>
    );
}

export { UserAbout, UserSettings, UserProfile };