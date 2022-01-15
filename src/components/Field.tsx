import React, { useEffect, useRef, useState } from 'react';
import { Card, OverlayTrigger } from 'react-bootstrap';
import Cell from './Cell';

const Fields = ({ fields }: { fields: any }) => {

    const [data, setData] = useState([]) as any;

    return (
        <div className=" d-flex justify-content-center ms-2 me-2 mt-3 ">
            <div data-cy="grid-container w-50 col-md-2" >
                {[...Array(fields)].map((_, rowIndex) => (
                    <div className="d-flex" data-cy="grid-row-container"   key={rowIndex}>

                        {[...Array(fields)].map((_, colIndex) => (
                            <div data-cy="block" key={colIndex} >

                                <Cell
                                    rowIndex={rowIndex}
                                    colIndex={colIndex}
                                    onAdd={(info: any, i: number) => {
                                        info.id = data.length +1
                                        setData([...data, info])
                                    }}
                                    onRemove={
                                        (infoWhite: any) => {
                                        console.log('jbj', infoWhite)
                                        const newData = data
                                        .filter((item: any) => 
                                       !((item.row == infoWhite.row) && (item.col == infoWhite.col))
                                       )
                                        setData(newData)
                                        }
                                    }
                                />
                            </div>
                        )
                        )}
                    </div>
                ))}
            </div>

            <div className="justify-content-center ms-3">
                <h4> Hover squares</h4>
                {data && data.map((i: any) => (
                    <div style={{ backgroundColor: "#fffae0", margin: ".2em" }} key={i.id}>row {i.row}  col {i.col}</div>
                ))}
            </div>
        </div>
    )
}

export default Fields

// function rowIndex(rowIndex: any, colIndex: any) {
//     throw new Error('Function not implemented.');
// }

