import React, { useState, useEffect } from "react";
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
        postModem(modem)
        .then(() => setCharacters([...ModemSpeed, modem]))
        .catch((error) => {
            console.log(error);
        });
    }

    function fetchModems() {
        const promise = fetch("http://localhost:8000/speeds");
        return promise;
    };

    function postModem(modem) {
        const promise = fetch("http://localhost:8000/speeds", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(modem),
        });
        return promise;
    }

    useEffect(() => {
        fetchModems()
        .then((res) => res.json())
        .then((json) => setCharacters(json["speed_list"]))
        .catch((error) => { console.log(error); });
    }, []);

    return (
        <div className="container">
            <div className="box">
                <h1>Modems!!</h1>
                <p>I love modems. I love dialup. I love cables. I love the dialup sound.</p>
                <p>What if... we could have a TON of weird modem speeds??</p>
                <p>Try it out.......</p>
            </div>
            <div class="box">
                <h1>Interact!!</h1>
                <h2>Enter any modem speed:</h2>
                <p>These are usually in bauds or kbit/s. You can follow this format for realism.</p>
                <InputForm handleSubmit={UpdateTable}/>
                <br/>
                <CoolTable ModemInformation={ModemSpeed} RemoveEntry={RemoveOneCharacter} />
            </div> 
        </div> 
    );
}

export default MyApp;