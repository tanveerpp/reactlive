import React, { createContext } from 'react'
import First from './components/First'
let Name,Address;
const App = () => {
  Name=createContext();
  Address=createContext();
  return (
    <>
    <h1>App component is running</h1>
    <Name.Provider value="programmers point">
    <Address.Provider value="indore | ujjain">
    <First/>
    </Address.Provider>
    </Name.Provider>
    </>
  )
}
export default App
export {Name,Address}