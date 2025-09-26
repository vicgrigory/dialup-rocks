import React, { useState } from "react";
import CoolTable from "./table";

function MyApp() {
    const [ModemSpeed, setCharacters] = useState([
        {
            speed: "56k",
            note: "not always supported by isp providers"
        },
        {
            speed: "33.6k",
            note: "max phone line bandwidth"
        },
        {
            speed: "28.8k",
            note: "almost there"
        },
        {
            speed: "14.4k",
            note: "switched to kbit/s naming"
        }
        ]);
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
            </div>
        </div> 
    );
}

export default MyApp;