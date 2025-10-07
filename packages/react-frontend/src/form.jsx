import React, {useState} from "react";

function InputForm(gng) {
    const [modem, setModem] = useState({
        connection: "",
        bitrate: ""
    });

    function DoChange(event) {
        const {name, value} = event.target;
        if (name === "connection")
            setModem({ connection: value, bitrate: modem["bitrate"]})
        else // name === "bitrate"
            setModem({ connection: modem["connection"], bitrate: value})
    }

    function Submit() {
        gng.handleSubmit(modem);
        setModem({ connection: "", bitrate: ""});
    }

    return (
        <form>
            <label htmlFor="connection">Name/ Connection: </label>
            <input type="Text" name="connection" id="connection" placeholder="name/ connection type of modem" value={modem.connection} onChange={DoChange}/>
            <br/>
            <label htmlFor="bitrate">Bitrate of Transfer: </label>
            <input type="Test" name="bitrate" id="bitrate" placeholder="baud or kbit/s" value={modem.bitrate} onChange={DoChange}/>
            <br/>
            <input type="button" value="Submit Modem!" onClick={Submit} />
        </form>
    );
}

export default InputForm;