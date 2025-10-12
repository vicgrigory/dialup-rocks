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
    if (props.ModemInformation === undefined) {
        return ;
    }
    const rows = props.ModemInformation.map((row, index) => {
        return(
            <tr key={index}>
                <td>{row._id}</td>
                <td>{row.connection}</td>
                <td>{row.bitrate}</td>
                <td>
                    <button className="remove" onClick={() => props.RemoveEntry(row._id)}>Remove</button>
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