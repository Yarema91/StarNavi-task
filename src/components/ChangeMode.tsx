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
    <Card body className="col-md-4 ms-2 me-2 mt-3">
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
  )
}

export default ChangeMode;
