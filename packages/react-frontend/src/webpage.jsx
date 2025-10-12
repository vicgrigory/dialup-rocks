import React, { useState, useEffect } from "react";
import CoolTable from "./table";
import InputForm from "./form";

function MyApp() {
    const [ModemSpeed, setCharacters] = useState([]);

    function removeOneCharacter(index) {
        const promise = fetch(`http://localhost:8000/speeds/${index}`, {
            method: "DELETE",
        })
        .then((value) => {console.log(value.status); callRemove(value.status, index);})
        .catch((error) => {console.log(error);});
    }

    function callRemove(value, index) {
        if (value == 204) {
            const updated = ModemSpeed.filter((character) => {
                return character._id !== `${index}`;
            });
            console.log(updated);
            setCharacters(updated);
        }
    }

    function updateTable(modem) {
        postModem(modem)
        .then(response => response.json())
        .then((data) => {setCharacters([...ModemSpeed, data]);})
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
        .then((json) => setCharacters(json))
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
                <InputForm handleSubmit={updateTable}/>
                <br/>
                <CoolTable ModemInformation={ModemSpeed} RemoveEntry={removeOneCharacter} />
            </div> 
        </div> 
    );
}

export default MyApp;