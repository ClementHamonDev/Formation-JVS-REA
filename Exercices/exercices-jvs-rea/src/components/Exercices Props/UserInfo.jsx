import React from 'react';

function UserInfo(props) {
    return (
        <div>
            <p>Nom: {props.name}</p>
            <p>Âge: {props.age}</p>
            <p>Résumé: Passionné de technologie et d'innovation, je suis un développeur web créatif. Toujours à la recherche de nouveaux défis, j'aime créer des applications intuitives et performantes qui améliorent l'expérience utilisateur. Mon objectif est de contribuer à des projets innovants tout en continuant à développer mes compétences dans le domaine du développement web.</p>
        </div>
    );
}

export default UserInfo;
