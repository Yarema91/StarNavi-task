import React from 'react';
import Cell from './Cell';

const Fields = ({ fields, onAdd, onRemove }: { fields: number, rowIndex: number, colIndex: number, onAdd: any, onRemove: any }) => {

    return (
        <div style={{
            marginTop: '1em', height: '50vh', width: '50vh',
            display: 'grid',
            gridTemplateRows: `repeat(${fields}, 1fr)`,
            gridTemplateColumns: `repeat(${fields}, 1fr)`,
        }}  >

            {[...Array(fields * fields)].map((_, numIndex) => {
                let index = numIndex + 1;

                const rowIndex = (index <= fields) ? 1 :
                    ((index % fields) === 0) ? Math.trunc(index / fields) :
                        (index < (fields * fields)) ? (Math.trunc(index / fields) + 1) :
                            fields

                const colIndex = (index < fields) ? (index + fields) % fields :
                    ((index % fields) === 0) ? fields :
                        index % fields

                return (
                    <Cell rowIndex={rowIndex}
                        colIndex={colIndex} onAdd={onAdd} onRemove={onRemove}
                        index={index} key={numIndex} />
                )
            })}

        </div>
    )
}

export default Fields


