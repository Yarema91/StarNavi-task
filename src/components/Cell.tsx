import { match } from "assert";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

// let info = [
//     { rows: 5, columns: 5 },
//     { rows: 2, columns: 2 },
// ];

const Cell = ({ rowIndex, colIndex, onAdd, onRemove }: { rowIndex: number, colIndex: number, onAdd: any, onRemove: any }) => {

    const [bgColour, setBgColour] = useState("#ffffff");


    // id: (Math.random() * 100).toFixed(0), 
    return (
        <div className="cell"
            onMouseOver={() => {
                (bgColour == "#ffffff") ? setBgColour("#207df5") : setBgColour("#ffffff")
                if(bgColour == "#ffffff"){
                onAdd({ row: rowIndex + 1, col: colIndex + 1 })
                } else {
                    const infoWhite = { row: rowIndex + 1, col: colIndex + 1,  }
                    // console.log('remove');
                    onRemove(infoWhite)
                }
            }}
        
            style={{
                backgroundColor: `${bgColour}`,
                height: '5vh',
                width: '5vh',
                border: '.1rem solid',
                // position:  'absolute' 
                // maxWidth: 'vmin'
            }}>
        </div>
    )
}

export default Cell;

function onAdd(arg0: string) {
    throw new Error("Function not implemented.");
}

