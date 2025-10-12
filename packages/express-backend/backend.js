import express, { response } from "express";
import ".modem-services";
import cors from "cors";

const app = express();
const port = 8000;
const speeds = {
    speed_list: [
        {
            id: "1",
            connection: "110 baud ~ Bell 101",
            bitrate: "0.11 kbits",
        },
        {
            id: "2",
            connection: "300 baud ~ Bell 103 ~ V.21",
            bitrate: "0.3 kbits",
        },
        {
            id: "3",
            connection: "1200 baud ~ Bell 212A ~ V.22",
            bitrate: "1.2 kbits",
        },
        {
            id: "4",
            connection: "2400 baud",
            bitrate: "2.4 kbits ~ V.22bis",
        },
        {
            id: "4.5",
            connection: "2400 baud",
            bitrate: "2.4kbits ~ V.26bis",
        },
        {
            id: "5",
            connection: "4800 baud ~ V.27ter",
            bitrate: "4.8 kbits",
        },
        {
            id: "6",
            connection: "9600 baud ~ V.32",
            bitrate: "9.6 kbits",
        },
        {
            id: "7",
            connection: "14.4 kbits ~ V.32bis",
            bitrate: "14.4 kbits",
        },
        {
            id: "8",
            connection: "28.8 kbits ~ V.34",
            bitrate: "28.8 kbits",
        },
        {
            id: "9",
            connection: "33.6 kbits ~ V.34",
            bitrate: "33.6 kbits",
        },
        {
            id: "10",
            connection: "56k kbits ~ V.90",
            bitrate: "56.0 - 33.6 kbits",
        },
        {
            id: "11",
            connection: "56k bits ~ V.92",
            bitrate: "56.0 - 48.0 kbits",
        },
        {
            id: "12",
            connection: "ISDN",
            bitrate: "64.0 - 128.0 kbits",
        },
        {
            id: "12",
            connection: "Hardware Compression ~ V.92,V.44",
            bitrate: "56.0 - 320.0 kbits",
        },
        {
            id: "13",
            connection: "Server-side Web Compression",
            bitrate: "200.0 - 1000.0 kbits",
        }
    ] // info from en.wikipedia.org/wiki/Dial-up_Internet_access
}

app.use(cors());
app.use(express.json());

//gets
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.get("/speeds", (req, res) => {
    const connect = req.query.connection;
    let result = findModemGivenConnBit(undefined, connect, undefined);
    if (result === undefined) {
        res.status(404).send("Modem(s) could not be found!");
    } else {
        res.status(200).send(result);
    }
});
app.get("/speeds/:id", (req, res) => {
    const id = req.params["id"]; //same as above see req.query.connection
    let result = findModemGivenConnBit(id, undefined, undefined);
    if (result === undefined) {
        res.status(404).send("Modem could not be found!");
    } else {
        res.status(200).send(result);
    }
});
app.get("/speeds/:connection/:bitrate", (req, res) => {
    const connection = req.params["connection"];
    const bitrate = req.params["bitrate"];
    let result = findSpeedGivenConnBit(undefined, connection, bitrate);
    if (result === undefined) {
        res.status(404).send("Modem(s) could not be found!");
    } else {
        res.status(200).send();
    }
});

//others
app.post("/speeds", (req, res) => {
    const speedToAdd = req.body;
    let result = addModem(speedToAdd);
    res.status(201).send(result);
});
app.delete("/speeds/:id", (req, res) => {
    const id = req.params["id"];
    let result = removeModem(id);
    if (result === null) {
        res.status(404).send("No modem found to remove!");
    } else {
        res.status(204).send();
    }
})

// general function to send to services.js
const findModemGivenConnBit = (id, connection, bitrate) => {
    if (!(id === undefined)) {
        return findModemById(id)
        .then(response => response.json())
        .catch((error) => {console.log(error);})
    } else {
        return getModems(connection, bitrate)
        .then(response => response.json())
        .catch((error) => {console.log(error);});
    }
}

// port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});