import React, { useState } from 'react';

const Home = (): JSX.Element => {
  const [count, setCount] = useState(0)

  return (
  <div className='container'>
    <h1>Matomo CSS Test</h1>
    <div className='card'>
      <button onClick={() => setCount(count + 1)}>Increment count</button>
      <p>Count: {count}</p>
    </div>

    <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .card {
          width: 200px;
          height: 200px;
          border-radius: 5px;
          background: lightgray;
        }
      `}</style>
  </div>
)}

export default Home;
