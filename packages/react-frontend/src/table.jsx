import React from "react";

function CoolTableHead() {
    return (
        <thead>
            <tr>
                <th>Modem ID</th>
                <th>Name/ Connection</th>
                <th>Bitrate/ Speed</th>
            </tr>
        </thead>
    );
}

function CoolTableBody(props) {
    const rows = props.ModemInformation.map((row, index) => {
        return(
            <tr key={index}>
                <td>{row.id}</td>
                <td>{row.connection}</td>
                <td>{row.bitrate}</td>
                <td>
                    <button className="remove" onClick={() => props.RemoveEntry(index)}>Remove</button>
                </td>
            </tr>
        )
    });
    return (
        <tbody>
            {rows}
        </tbody>
    );
}

function CoolTable(props) {
    return (
        <table>
            <CoolTableHead />
            <CoolTableBody
                ModemInformation={props.ModemInformation}
                RemoveEntry={props.RemoveEntry}
            />
        </table>
    );
}

export default CoolTable;