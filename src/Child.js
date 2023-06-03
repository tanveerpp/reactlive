import React from 'react'
const Child = ({name,email,pwd}) => {
  return (
    <>
    <h1>Child is runnning</h1>
    <h2>Name : {name}</h2>
    <h2>Email : {email}</h2>
    <h2>Pwd : {pwd}</h2>
    </>
  )
}
Child.defaultProps={
    name:'no name',
    email:'no email',
    pwd:'no pwd'
}
export default Child