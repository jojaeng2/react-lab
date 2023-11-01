import React, { useState } from 'react'
import CountryList from "./CountryList"

export type CountryType = {
  no: number;
  country: string;
  visited: boolean;
}

const App = () => {
  const [msg, setMsg] = useState<string>("World");
  const [list, setList] = useState<Array<CountryType>>([
    {no:1, country:"1", visited:false},
    {no:2, country:"2", visited:true},
    {no:3, country:"3", visited:false},
    {no:4, country:"4", visited:false},
  ]);

  const addResult = (x: number, y: number) => {
    return (
      <div className="card card-body bg-light mb-3">
        {x} + {y} = {x + y}
      </div>
    );
  };

  return (
    <div className='container'>
      <h2>Hello {msg}!</h2>
      <div className='dash-style'>
        {addResult(4, 3)}
        <CountryList countries={list}/>
      </div>
    </div>
  )
}

export default App