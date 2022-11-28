import axios from "axios";
import React, {useEffect, useState} from "react";

import {Character} from "./Character";

const NavPage = ({page, setPage}) => {
    return (
        <section className="d-flex justify-content-between align-items-center">
            <p>Page: {page}</p>
            <section>
                {
                    page !== 1 ?
                        <button className="btn btn-warning btn-sm mx-3" onClick={() => setPage(page - 1)}>
                            Page {page - 1}
                        </button> : null
                }
                <button className="btn btn-primary btn-sm" onClick={() => setPage(page + 1)}>
                    Page {page + 1}
                </button>
            </section>
        </section>
    );
}

export const CharacterList = () => {
    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);

    async function getData() {
        const response = await axios.get(
            `https://rickandmortyapi.com/api/character?page=${page}`
        );
        const {results} = response.data;
        setCharacters(results);
        setLoading(false);
    }

    useEffect(() => {
        getData();
    }, [page]);

    return (
        <section className="container">
            <NavPage page={page} setPage={setPage}/>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className="row">
                    {characters.map((character) => (
                        <div className="col-md-4 p-3" key={character.id}>
                            <Character key={character.id} character={character}/>
                        </div>
                    ))}
                </div>
            )}
            <NavPage page={page} setPage={setPage}/>
        </section>
    );
}
