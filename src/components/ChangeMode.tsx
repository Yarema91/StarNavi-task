import React, { ChangeEvent, useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import Field from './Field';


type ChangeMode = {
  onChange: (event: React.MouseEvent<HTMLSelectElement>) => void,
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
}

const ChangeMode = ({ dataMode }: { dataMode: any }) => {

  const [value, setValue] = useState('');
  const [fields, setFields] = useState<number>(5);


  const handleChange = (e: any) => {
    const selectValue = e.target.value;
    setValue(selectValue);
  }


  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (value != '') {

      const field: any = dataMode && dataMode
        .map((item: any) => item)
        .filter((item: any) => item.name === value)
        .map((item: any) => item.field
        );
      setFields(field[0]);
    }
  }

  return (
    <div className="row m-auto p-2em d-flex align-items-flex-center justify-content-center boxSizing-border-box">
      <Card body className=" container-fluid ms-4 me-4 mt-3 p-0 m-auto w-60 
    align-items-center 
    justify-content-center d-flex  m-auto justify-content-center w-fit-content " style={{
          width: "fit-content",
          blockSize: '75% content-box'
        }}>
        <div className=" d-flex justify-content-center ">
          <select className="form-select me-2"
            value={value}
            onChange={handleChange}
          >
            {dataMode && dataMode.map((item: any) => (
              <option value={item.name} key={item.name}>
                {item.name}
              </option>
            ))
            }
          </select>
          <button type="button" className="btn btn-primary me-2" onClick={onClick}>Start</button>
        </div>

        <Field fields={fields} />
      </Card>
    </div>
  )
}

export default ChangeMode;
