import { match } from "assert";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";


const Cell = ({ index, rowIndex, colIndex, onAdd, onRemove }: { rowIndex: number, colIndex: number, index: number, onAdd: any, onRemove: any }) => {

    const [bgColour, setBgColour] = useState("#ffffff");


    return (
        <div className="cell"
            onMouseOver={() => {
                (bgColour == "#ffffff") ? setBgColour("#207df5") : setBgColour("#ffffff")
                if (bgColour == "#ffffff") {

                    onAdd({ row: rowIndex, col: colIndex })
                } else {
                    const infoWhite = { row: rowIndex, col: colIndex, }
                    onRemove(infoWhite)
                }
            }}

            style={{
                backgroundColor: `${bgColour}`,
                border: '.1rem solid',
                display: "flex",
            }}>
        </div>
    )
}

export default Cell;

function onAdd(arg0: string) {
    throw new Error("Function not implemented.");
}

