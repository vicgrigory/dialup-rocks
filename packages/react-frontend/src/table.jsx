import React from "react";

function CoolTableHead() {
    return (
        <thead>
            <tr>
                <th>Modem Speed</th>
                <th>Notes</th>
            </tr>
        </thead>
    );
}

function CoolTableBody(props) {
    const rows = props.ModemInformation.map((row, index) => {
        return(
            <tr key={index}>
                <td>{row.speed}</td>
                <td>{row.note}</td>
                <td>
                    <button class="remove" onClick={() => props.RemoveEntry(index)}>Remove</button>
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