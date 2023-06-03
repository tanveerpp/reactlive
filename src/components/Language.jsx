import React from 'react'
import PropTypes from 'prop-types';
const Language = ({name,duration,fees,details}) => {
  return (
    <>
    <div className='col-sm-4'>
      <div className="card" style={{width:'400px'}}>
    <img className="card-img-top" src="../images/back.gif" alt="Cardimage" style={{width:'100%'}} />
    <div className="card-body">
      <h2 className="card-title">{name}</h2>
      <h4 className='card-subtitle'>{duration}</h4>
      <h4 className='card-subtitle'>{fees}</h4>
      <p className="card-text">{details}</p>
      </div>
    </div>
  </div>
  
    </>
  )
}
Language.propTypes={
    name:PropTypes.string,
    duration:PropTypes.string,
    fees:PropTypes.number,
    details:PropTypes.string
}
Language.defaultProps={
    name:'programming language',
    duration:'3months to 2 year',
    fees:7500,
    details:'please contact us on 8770385379'
}
export default Language