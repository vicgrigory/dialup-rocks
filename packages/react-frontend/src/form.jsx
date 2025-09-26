import React, {useState} from "react";

function DoChange(event) {
    const {speed, value} = event.target;
    if (speed === "note")
        setModem({ speed: modem["speed"], note: value });
    else setModem({ speed: value, note: modem["note"]});
}

function InputForm() {
    const [modem, setModem] = useState({
        speed: "",
        note: ""
    });
    return (
        <form>
            <label htmlFor="speed">Modem Speed</label>
            <input type="Text" name="speed" id="speed" value={modem.speed} onChange={DoChange}/>
        </form>
    );
}

export default InputForm;