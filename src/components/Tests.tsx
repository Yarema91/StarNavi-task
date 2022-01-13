import React, { useEffect } from "react"

interface Test {
  todos:[],
  row: number,
  col: number,
  rowIndex:number,
  colIndex:number,

};

const Tests: React.FC<Test> = ({rowIndex, colIndex}) => {
  const [todos, setTodos] = React.useState([]) as any[];

  useEffect(() => {
    // console.log('todos', todos);

  }, [todos])

  let row: any;
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault(); 

    setTodos([...todos, {row: rowIndex + 1, col: colIndex + 1 } as any])
}

console.log('todos', todos);


  return (
    <div>
      {todos.length}
            <button onClick={ handleSubmit}>+</button>
    </div>
  )
}

export default Tests

