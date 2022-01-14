import React, { useEffect, useState } from 'react';
import Fields from './components/Field';
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
       
        const field: number = value.field;
        mode.push({ name, field })
      }

      setDateMode(mode);

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">

      <ChangeMode dataMode={dataMode}/>
     
    </div>
  );
}

export default App;
