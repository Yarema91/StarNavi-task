import { match } from "assert";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";


const Cell = ({ rowIndex, colIndex, onAdd, onRemove }: { rowIndex: number, colIndex: number, onAdd: any, onRemove: any }) => {

    const [bgColour, setBgColour] = useState("#ffffff");


    return (
        <div className="cell"
            onMouseOver={() => {
                (bgColour == "#ffffff") ? setBgColour("#207df5") : setBgColour("#ffffff")
                if (bgColour == "#ffffff") {

                    onAdd({ row: rowIndex+1, col: colIndex+1 })
                } else {
                    const infoWhite = { row: rowIndex+1, col: colIndex+1, }
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

