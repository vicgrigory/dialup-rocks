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

    function UpdateTable(modem) {
        setCharacters([...ModemSpeed, modem]);
    }

    return (
        <div>
            <h1>Modem</h1>
            <h2>Enter a modem speed:</h2>
            <InputForm handleSubmit={UpdateTable}/>
            <div className="container">
                <CoolTable
                    ModemInformation={ModemSpeed}
                    RemoveEntry={RemoveOneCharacter}
                />
                
            </div>
        </div> 
    );
}

export default MyApp;