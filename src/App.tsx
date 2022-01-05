import React from 'react';
import { Card } from "react-bootstrap";


function App() {


  return (
    <div className="App">
      <Card body className="col-md-4 ms-2 me-2 mt-3">
      <div className=" d-flex justify-content-center ">
          <select className="form-select me-2"
          // value={value}
          // onChange={onChange} 
          >
            {/* {settings.currencyList.map(currency =>
                <option value={currency}  key={currency}>{currency}</option>
            )} */}
          </select>
          <button type="button" className="btn btn-primary me-2">Start</button>
        </div>
      </Card>
      


    </div>
  );
}

export default App;
