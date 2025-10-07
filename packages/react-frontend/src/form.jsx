import React, {useState} from "react";

function InputForm(gng) {
    const [modem, setModem] = useState({
        id: "",
        connection: "",
        bitrate: ""
    });

    function DoChange(event) {
        const {name, value} = event.target;
        if (name === "id")
            setModem({ id: value, connection: modem["connection"], bitrate: modem["bitrate"] })
        else if (name === "connection")
            setModem({ id: modem["id"], connection: value, bitrate: modem["bitrate"]})
        else // name === "bitrate"
            setModem({id: modem["id"], connection: modem["connection"], bitrate: value})
    }

    function Submit() {
        gng.handleSubmit(modem);
        setModem({ id: "", connection: "", bitrate: ""});
    }

    return (
        <form>
            <label htmlFor="id">ID: </label>
            <input type="Text" name="id" id="id" placeholder="any id" value={modem.id} onChange={DoChange}/>
            <br/>
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