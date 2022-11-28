import React from "react";

const getStatus = (status) =>
    status === 'Alive' ? '🟩' : status === 'Dead' ? '🟥' : '🟧';

const getGender = (gender) =>
    gender === 'Female' ? '👩' : gender === 'Male' ? '👨' : '🌈';

export const Character = ({character}) => {
    return (
        <div className="card text-bg-light">
            <img src={character.image} className="card-img-top" alt={character.name}/>
            <div className="card-body">
                <h4 className="card-title">{character.name}</h4>
                <p className="card-text">
                    <small className="text-muted">{`Status: ${getStatus(character.status)} ${character.status}`}</small>
                </p>
                <p className="card-text">
                    <small className="text-muted">{`Species: ${character.species}`}</small>
                </p>
                {
                    character.type !== '' ?
                        <p className="card-text">
                            <small className="text-muted">{`Subspecies: ${character.type}`}</small>
                        </p> : null
                }
                <p className="card-text">
                    <small className="text-muted">{`Gender: ${getGender(character.gender)} ${character.gender}`}</small>
                </p>
                <p className="card-text">
                    <small
                        className="text-muted">{`Origin location: ${character.origin && character.origin.name}`}</small>
                </p>
                <p className="card-text">
                    <small
                        className="text-muted">{`Last known location: ${character.location && character.location.name}`}</small>
                </p>
            </div>
        </div>
    );
}
