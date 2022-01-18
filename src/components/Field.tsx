import React from 'react';
import Cell from './Cell';

const Fields = ({ fields, onAdd, onRemove }: { fields: number, rowIndex: number, colIndex: number, onAdd: any, onRemove: any }) => {

    return (

        <div data-cy="grid-container" style={{
            marginTop: '1em', height: '50vh', width: '50vh',
            display: 'grid',
            gridTemplateRows: `repeat(${fields}, 1fr)`,
            gridTemplateColumns: `repeat(${fields}, 1fr)`,
        }}  >

            {[...Array(fields)].map((_, rowIndex) => (

                [...Array(fields)].map((_, colIndex) => (

                    <Cell key={colIndex + rowIndex}
                        rowIndex={rowIndex} colIndex={colIndex}
                        onAdd={onAdd} onRemove={onRemove} index={0} />
                ))
            ))
            }
        </div>
    )
}
export default Fields;


