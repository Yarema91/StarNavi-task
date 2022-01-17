import React, { ChangeEvent, useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import Field from './Field';


type ChangeMode = {
  onChange: (event: React.MouseEvent<HTMLSelectElement>) => void,
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
}

const ChangeMode = ({ dataMode }: { dataMode: any[] }) => {

  const [value, setValue] = useState('');
  const [fields, setFields] = useState<number>(5);


  const [data, setData] = useState([]) as any[];



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
      <Card body className=" container-fluid ms-4 me-4 mt-3 p-0 m-auto w-60 align-items-center 
    justify-content-center d-flex  m-auto justify-content-center w-fit-content " style={{
          width: "fit-content",
        }}>
        <div className=" d-flex justify-content-center ">

          <div>
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


            <Field fields={fields}
              onAdd={(info: any, i: number) => {
                // info.id = data.length + 1;
                info.id = (Math.random() * 1000).toFixed(3)
                setData([...data, info]);
              }}
              onRemove={(infoWhite: any) => {
                const newData = data
                  .filter((item: any) => !((item.row == infoWhite.row) && (item.col == infoWhite.col))
                  );
                setData(newData);
              }} rowIndex={0} colIndex={0} />
          </div>

          <div className="justify-content-center ms-3" >
            <h4> Hover squares</h4>
            <div style={{ maxHeight: '50vh', overflow: 'auto', marginTop: '1.48em', }}>
              {data && data.map((i: any) => (
                <div style={{
                  backgroundColor: "#fffae0", margin: ".2em",
                }}
                  key={i.id}>row {i.row}  col {i.col}</div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default ChangeMode;
