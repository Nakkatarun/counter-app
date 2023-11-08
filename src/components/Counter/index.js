import { useState, useEffect } from "react"

import "./index.css"

function Counter() {
  const [count, setCount] = useState(0)

useEffect(() => {
  console.log('The Count is :', count)
}, [count])

    return (
      <div className="main-container" >
        <div className="container">
        <h1 className="count">COUNT  </h1 >
        <h1 className="count-num">{count}</h1>
        <div className="button-container" >
        <button className="button" onClick={() => setCount(count + 1)}>
          Increase
        </button>
        <button className="button" onClick={() => setCount(count - 1)}>
          Decrease
        </button>
        </div>
      </div>
      </div>
      
    );
  }


export default Counter