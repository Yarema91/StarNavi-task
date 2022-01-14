import React, { useEffect, useRef, useState } from 'react';
import { Card, OverlayTrigger } from 'react-bootstrap';
import Cell from './Cell';
import Tests from './Tests';

const Fields = ({ fields }: { fields: any }) => {

    const [data, setData] = useState([]) as any;

    console.log('data', data);


    return (
        <div className=" d-flex justify-content-center ">
            <div data-cy="grid-container" >
                {[...Array(fields)].map((_, rowIndex) => (
                    <div className="d-flex" data-cy="grid-row-container" key={rowIndex}>

                        {[...Array(fields)].map((_, colIndex) => (
                            <div data-cy="block" key={colIndex}>
                                <Cell
                                    rowIndex={rowIndex}
                                    colIndex={colIndex}
                                    onAdd={(info: any) => setData([...data, info])}
                                    onRemove={
                                        () => console.log('mlml')

                                        // (infoWhite: any) => setData(...data
                                        //     .filter([...data.filter((d: any) => d.rows != infoWhite.rows && d.columns != infoWhite.columns)
                                        //     ])
                                        //     )
                                    }
                                />
                            </div>
                        )
                        )}
                    </div>
                ))}
            </div>
            {/* <Tests todos={[]} row={0} col={0} rowIndex={3} colIndex={0}/> */}

            <div className="justify-content-center ">
                <h3> Hover squares</h3>
                {data && data.map((i: any) => (
                    <div>row{i.row}, col{i.col}</div>
                ))}
            </div>

        </div>

    )
}

export default Fields

// function rowIndex(rowIndex: any, colIndex: any) {
//     throw new Error('Function not implemented.');
// }

