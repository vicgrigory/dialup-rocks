import React, {useState} from "react";

function InputForm(gng) {
    const [modem, setModem] = useState({
        speed: "",
        note: ""
    });

    function DoChange(event) {
        const {name, value} = event.target;
        if (name === "note")
            setModem({ speed: modem["speed"], note: value });
        else setModem({ speed: value, note: modem["note"]});
    }

    function Submit() {
        gng.handleSubmit(modem);
        setModem({speed: "", note: ""});
    }

    return (
        <form>
            <label htmlFor="speed">Modem Speed</label>
            <input type="Text" name="speed" id="speed" value={modem.speed} onChange={DoChange}/>
            <label htmlFor="note">Note</label>
            <input type="Text" name="note" id="note" value={modem.note} onChange={DoChange}/>
            <input type="button" value="enter modem" onClick={Submit} />
        </form>
    );
}

export default InputForm;