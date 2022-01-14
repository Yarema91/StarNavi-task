import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

let info = [
    { rows: 5, columns: 5 },
    { rows: 2, columns: 2 },
];

const Cell = ({ rowIndex, colIndex, onAdd, onRemove }: { rowIndex: number, colIndex: number, onAdd: any, onRemove: any }) => {

    const [bgColour, setBgColour] = useState("#ffffff");


    //      let info1 = `rows: ${rowIndex+1}, columns: ${colIndex+1}` as any;


    // const handleSubmit = (e: { preventDefault: () => void; }) => {
    //add
    //     const newArr = infos.slice();
    //     newArr.splice(0, 0, { rows: rowIndex + 1,
    //         columns: colIndex + 1});
    //     setInfos(newArr);
    //   };

    return (
        <div className="over"
            onMouseOver={() => {
                (bgColour == "#ffffff") ? setBgColour("#207df5") : setBgColour("#ffffff")
                if(bgColour == "#ffffff"){
                onAdd({ row: rowIndex + 1, col: colIndex + 1 })
                } else {
                    const infoWhite = { row: rowIndex + 1, col: colIndex + 1 }
                    // console.log('remove');
                    onRemove(infoWhite)

                    
                }
            }}
            style={{
                backgroundColor: `${bgColour}`,
                height: '3em',
                width: '3em',
                border: '.1rem solid',
            }}>
        </div>
    )
}

export default Cell;

function onAdd(arg0: string) {
    throw new Error("Function not implemented.");
}

