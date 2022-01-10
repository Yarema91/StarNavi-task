import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';

const ChangeMode = ({dataMode}: {dataMode: any}) => {

    console.log('dataModeC', dataMode);
    


        return (
            <Card body className="col-md-4 ms-2 me-2 mt-3">
            <div className=" d-flex justify-content-center ">
                <select className="form-select me-2"
                // value={value}
                // onChange={onChange} 
                >
              {dataMode && dataMode.map((item: any) => (
          <option value={item.name} key={item.name}>
            {item.name}
          </option>
        ))}
      
                </select>
                <button type="button" className="btn btn-primary me-2">Start</button>
              </div>
            </Card>
        )
    }

export default ChangeMode
