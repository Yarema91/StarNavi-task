import React, { useEffect, useRef, useState } from 'react';
import { Card, OverlayTrigger } from 'react-bootstrap';
import Cell from './Cell';
import Tests from './Tests';

const Fields = ({ fields }: { fields: any }) => {

    const [data, setData] = useState('knknk') as any;



    return (
        <Card >
            <div data-cy="grid-container" >
                {[...Array(fields)].map((_, rowIndex) => (
                    <div className="d-flex" data-cy="grid-row-container" key={rowIndex}>

                        {[...Array(fields)].map((_, colIndex) => (
                            <div data-cy="block" key={colIndex}>
                                {/* <Cell
                                rowIndex={rowIndex}
                                colIndex={colIndex}
                                onHover={(data: any) => setData(data)}
                            /> */}
                
                            </div>
                        )
                        )}
                    </div>
                ))}
            </div>
            <Tests todos={[]} row={0} col={0} rowIndex={3} colIndex={0}/>

            {/* {data} */}
        </Card>
    )
}

export default Fields

// function rowIndex(rowIndex: any, colIndex: any) {
//     throw new Error('Function not implemented.');
// }

