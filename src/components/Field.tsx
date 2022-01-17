import React, { useEffect, useRef, useState } from 'react';
// import { Card, OverlayTrigger } from 'react-bootstrap';
import Cell from './Cell';

const Fields = ({ fields, onAdd, onRemove }: { fields: any, rowIndex: number, colIndex: number, onAdd: any, onRemove: any }) => {

    return (
            <div  style={{ marginTop: '1em',  height: '50vh', width: '50vh',
            display: 'grid',
            gridTemplateRows: `repeat(${fields}, 1fr)`,
            gridTemplateColumns: `repeat(${fields}, 1fr)`,
             }}  >

                {/* {[...Array(fields)].map((_, rowIndex) => (
            
            <div data-cy="grid "  key={rowIndex} 
            >
                        {[...Array(fields)].map((_, colIndex) => (
                            <div data-cy="block"  key={colIndex}
                            //  style={{ gridAutoColumns: `repeat(${fields}, 1fr)`}}
                             >
                                <Cell
                                    rowIndex={rowIndex}
                                    colIndex={colIndex} onAdd={onAdd} onRemove={onRemove}                                    
                                />
                            </div>
                        )
                        )}
                    </div>
                ))}  */}

                


                {[...Array(fields*fields)].map((_, numIndex) => {
                    let index = numIndex + 1;
                    
                    const rowIndex =  (index <= fields) ?  1 :        
                    ((index % fields) == 0) ? Math.trunc(index / fields) : 
                    (index  < (fields*fields)) ? (Math.trunc(index / fields) + 1) :
                      fields
                   
                    const colIndex =  (index < fields ) ?  (index+fields) % fields :
                    ((index % fields) == 0) ? fields :
                    index % fields 
                    
                    return (
                        <Cell   rowIndex={rowIndex}
                        colIndex={colIndex} onAdd={onAdd} onRemove={onRemove} 
                        index={index}  key={numIndex} />
                    )       
})}
           
            </div>
    )
}

export default Fields

// function rowIndex(rowIndex: any, colIndex: any) {
//     throw new Error('Function not implemented.');
// }

