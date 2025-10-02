import express from "express";

const app = express();
const port = 8000;
const speeds = {
    speed_list: [
        {
            id: "1",
            connection: "110 baud // Bell 101",
            bitrate: "0.11 kbit/s",
        },
        {
            id: "2",
            connection: "300 baud // Bell 103 // V.21",
            bitrate: "0.3 kbit/s",
        },
        {
            id: "3",
            connection: "1200 baud // Bell 212A // V.22",
            bitrate: "1.2 kbit/s",
        },
        {
            id: "4",
            connection: "2400 baud // V.22bis",
            bitrate: "2.4 kbit/s",
        },
        {
            id: "4.5",
            connection: "2400 baud // V.26bis",
            bitrate: "2.4kbit/s",
        },
        {
            id: "5",
            connection: "4800 baud // V.27ter",
            bitrate: "4.8 kbit/s",
        },
        {
            id: "6",
            connection: "9600 baud // V.32",
            bitrate: "9.6 kbit/s",
        },
        {
            id: "7",
            connection: "14.4 kbit/s // V.32bis",
            bitrate: "14.4 kbit/s",
        },
        {
            id: "8",
            connection: "28.8 kbit/s // V.34",
            bitrate: "28.8 kbit/s",
        },
        {
            id: "9",
            connection: "33.6 kbit/s // V.34",
            bitrate: "33.6 kbit/s",
        },
        {
            id: "10",
            connection: "56k kbit/s // V.90",
            bitrate: "56.0 - 33.6 kbit/s",
        },
        {
            id: "11",
            connection: "56k bit/s // V.92",
            bitrate: "56.0 - 48.0 kbit/s",
        },
        {
            id: "12",
            connection: "ISDN",
            bitrate: "64.0 - 128.0 kbit/s",
        },
        {
            id: "12",
            connection: "Hardware Compression // V.92/V.44",
            bitrate: "56.0 - 320.0 kbit/s",
        },
        {
            id: "13",
            connection: "Server-side Web Compression",
            bitrate: "200.0 - 1000.0 kbit/s",
        }
    ] // info from en.wikipedia.org/wiki/Dial-up_Internet_access
}

app.use(express.json());

//gets
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.get("/speeds", (req, res) => {
    const connect = req.query.connection;
    if (connect != undefined) {
        let result = findSpeedByName(connect);
        result = { speed_list: result };
        res.send(result);
    } else {
        res.send(speeds);
    }
});
app.get("/speeds/:id", (req, res) => {
    const id = req.params["id"]; //same as above see req.query.connection
    let result = findSpeedById(id);
    if (result === undefined) {
        res.status(404).send("could not find modem id");
    } else {
        res.send(result);
    }
})

//functions
const findSpeedByName = (connect) => {
    return speeds["speed_list"].filter(
        (speed) => speed["connection"] === connect
    );
};
const findSpeedById = (id) =>
    speeds["speed_list"].find((speed) => speed["id"] === id);

// port
app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}');
});