import React from 'react'
import CountryList from "./CountryList"

export type CountryType = {
  no: number;
  country: string;
  visited: boolean;
}

const App = () => {
  let list: Array<CountryType> = [
    {no:1, country:"1", visited:false},
    {no:2, country:"2", visited:true},
    {no:3, country:"3", visited:false},
    {no:4, country:"4", visited:false},
  ];

  return (
    <div className='container'>
      <CountryList countries={list}/>
    </div>
  )
}

export default App