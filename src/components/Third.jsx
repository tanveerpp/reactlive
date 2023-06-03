import React, { useContext } from 'react'
import { Name,Address } from '../App'
const Third = () => {
  let nm=useContext(Name);
  let ad=useContext(Address);
  return (
    <>
    <h1>Third component is running</h1>
    <h2>{nm} {ad}</h2>
    </>
  )
}
export default Third