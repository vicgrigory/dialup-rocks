import React, { useState } from "react";
import CoolTable from "./table";
import InputForm from "./form";

function MyApp() {
    const [ModemSpeed, setCharacters] = useState([]);
    function RemoveOneCharacter(index) {
        const updated = ModemSpeed.filter((character, i) => {
            return i !== index;
        });
        setCharacters(updated);
    }
    return (
        <div>
            <h1>whats up gng</h1>
            <div className="container">
                <CoolTable
                    ModemInformation={ModemSpeed}
                    RemoveEntry={RemoveOneCharacter}
                />
                <InputForm />
            </div>
        </div> 
    );
}

export default MyApp;