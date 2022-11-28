import React from "react";

import {CharacterList} from "./components/CharacterList";

function App() {
    return (
        <main className="bg-dark bg-gradient text-white">
            <div className="col-12">
                <h1 className="text-center display-1 py-4">Rick And Morty</h1>
            </div>
            <CharacterList/>
        </main>
    );
}

export default App;
