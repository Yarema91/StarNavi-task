import React, { useEffect, useState } from 'react';
// import Fields from './components/Fields';
import axios from "axios";
import ChangeMode from './components/ChangeMode';


// type Type =  {
//   name: string,
//   value: object,
//   field: number
// }


const App = () => {

  const [dataMode, setDateMode] = useState(null) as any[];

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await axios.get(`https://demo1030918.mockable.io/`);
      const data = res.data;

      const mode = [];
      for (const [name, value] of Object.entries(data) as any) {
        // let value as any;
        // if (value === "any") {
        const field: number = value.field;
        mode.push({ name, field })
        // }
        //   // console.log('mode', mode);

      }
      setDateMode(mode);
      // // setDateMode(data);

    } catch (error) {
      console.error(error);
    }
  }
  console.log('dataMode', dataMode);

  return (

    <div className="App">

      {/* <select className="form-select me-2"
      // value={value}
      // onChange={onChange} 
      >
        {dataMode && dataMode.map((item: any) => (
          <option value={item.name} key={item.name}>
            {item.name}
          </option>
        ))}
      </select> */}

      <ChangeMode dataMode={dataMode}/>
      {/* <Fields/> */}

    </div>
  );
}

export default App;
