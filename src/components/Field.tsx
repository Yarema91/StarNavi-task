import React, { useEffect, useRef, useState } from 'react';
import { Card, OverlayTrigger } from 'react-bootstrap';
import Cell from './Cell';

const Fields = ({ fields, onAdd, onRemove }: { fields: any, rowIndex: number, colIndex: number, onAdd: any, onRemove: any }) => {


    return (
            <div data-cy="grid-container" style={{ marginTop: '1em',
            //  minHeight: '18em',
            // minWidth: '18em' ,
             position: 'relative'
             }}  >
                {[...Array(fields)].map((_, rowIndex) => (
                    <div className="d-flex " data-cy="grid-row-container"  key={rowIndex}>

                        {[...Array(fields)].map((_, colIndex) => (
                            <div data-cy="block"  key={colIndex} >

                                <Cell
                                    rowIndex={rowIndex}
                                    colIndex={colIndex} onAdd={onAdd} onRemove={onRemove}                                    
                                />
                            </div>
                        )
                        )}
                    </div>
                ))}
            </div>

           
        
    )
}

export default Fields

// function rowIndex(rowIndex: any, colIndex: any) {
//     throw new Error('Function not implemented.');
// }

