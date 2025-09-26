import React from "react";

function CoolTableHead() {
    return (
        <thead>
            <tr>
                <th>hey</th>
                <th>chat</th>
            </tr>
        </thead>
    );
}

function CoolTableBody(dialup) {
    const rows = dialup.ModemInformation.map((row, index) => {
        return(
            <tr key={index}>
                <td>{row.speed}</td>
                <td>{row.note}</td>
                <td>
                    <button onClick={() => dialup.RemoveEntry(index)}>go away</button>
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

function CoolTable(dialup) {
    return (
        <table>
            <CoolTableHead />
            <CoolTableBody
                ModemInformation={dialup.ModemInformation}
                RemoveEntry={dialup.RemoveEntry}
            />
        </table>
    );
}

export default CoolTable;