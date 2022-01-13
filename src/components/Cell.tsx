import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

let info = [
    {rows: 5, columns: 5},
    {rows: 2, columns: 2},
];

// { rowIndex, colIndex, onHover }: { rowIndex: number, colIndex: number, onHover: any }

const Cell = ({ rowIndex, colIndex}: { rowIndex: number, colIndex: number, onHover: any }) => {

    // let info: string;
    const [bgColour, setBgColour] = useState("#ffffff");
    const [infos, setInfos] = useState(info) as any;

    // const [active, setActive] = useState(false);


    // const handleHover = () => {
        // if (bgColour == "blue") {
        // setInfo([ ...info, {
        //     rows: rowIndex + 1,
        //     columns: colIndex + 1
        // }])
        // console.log('info', info);
    
    // }
    // 
    // if (bgColour == "blue") {
    //     //  console.log('rows:', rowIndex+1, 'columns:', colIndex+1);
    //      let info1 = `rows: ${rowIndex+1}, columns: ${colIndex+1}` as any;
    //     //  console.log('info', info1);
       
    // }


  useEffect(() => {
//     if(bgColour == "blue"){
//         console.log('blue');
//         const infoBlue = {
//             rows: rowIndex + 1,
//             columns: colIndex + 1
//         }
//         setInfos([ ...infos,infoBlue])
//         console.log(infos);
//     } else {
// }
console.log('change color ');

  }, [bgColour])

    //    if(bgColour != "blue"){
    //     const infoWhite = {
    //             rows: rowIndex + 1,
    //             columns: colIndex + 1
    //         }

    //    }

    // const changeColor: any = () => {
    //     // if(bgColour != "#ffffff"){
    //         console.log('delete', bgColour)
    // //         const infoWhite = {
    // //                         rows: rowIndex + 1,
    // //                         columns: colIndex + 1
    // //                     }
    // //  setInfos( ...infos
    // //     .filter([...infos.filter((info: any) => info.rows != infoWhite.rows && info.columns != infoWhite.columns)])
    // //     )
    //     // } else {
    //         console.log('add', bgColour)
    //           setInfos([...infos, {
    //             id: infos.length + 1,
    //             rows: rowIndex + 1,
    //             columns: colIndex + 1
    //         }])
    //         console.log('infos', infos);
            
    //     // }
    // }

    // const handleClick=( event: React.MouseEvent) =>  {
    //     event.preventDefault();

    //     const newArr = infos.slice();
    //     newArr.splice(0, 0, {
    //         rows: rowIndex + 1,
    //         columns: colIndex + 1
    //     });
        
    //     setInfos(newArr);
    // }


    // const handleSubmit = (e: { preventDefault: () => void; }) => {
    //     e.preventDefault();
        
    //     const newArr = infos.slice();
    //     newArr.splice(0, 0, { rows: rowIndex + 1,
    //         columns: colIndex + 1});
    //     setInfos(newArr);
    //   };

//   const handleSubmit = (e: { preventDefault: () => void; }) => {
//     e.preventDefault();
//     // if (!value) return console.log("sxal");
//     // addTodo(value);
//     // setValue("");
//     // setValue(prev => {
//     //     return{...prev, {rows: '1', columns: '2' }}
//     // })
//   };

// console.log('infos',infos);

  

    return (
        <div className="over"
          onMouseOver={() => {
            (bgColour == "#ffffff") ? setBgColour("#207df5") : setBgColour("#ffffff")
          }}
    //         // onMouseEnter={(e) => {
    //         //     (bgColour == "#ffffff") ? setBgColour("#207df5") : setBgColour("#ffffff");
    //         //     console.log(e.currentTarget);
    //         //     // changeColor()
    //         //     // onHover(handleHover)
    //         // }}

    //         //   onMouseLeave={() => {
    //         //     // setBgColour("#fafafa");
    //         //   }}
            style={{
                backgroundColor: `${bgColour}`,
                height: '3em',
                width: '3em',
                border: '.1rem solid',
            }}>
    </div>
    //    {/* {hoverCount} */}
    //    {/* {infos} */}
    
      
    
    //   <button type="submit" onSubmit={handleSubmit}>+</button>
        
     
    )
}

export default Cell;
