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
            <label htmlFor="speed">Speed: </label>
            <input type="Text" name="speed" id="speed" placeholder="baud or kbit/s" value={modem.speed} onChange={DoChange}/>
            <br/>
            <label htmlFor="note">Note: </label>
            <input type="Text" name="note" id="note" placeholder="whatever you wish.." value={modem.note} onChange={DoChange}/>
            <br/>
            <input type="button" value="Submit Modem!" onClick={Submit} />
        </form>
    );
}

export default InputForm;