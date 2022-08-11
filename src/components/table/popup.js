import React from 'react';
import ReactDOM from 'react-dom';



function Popup({description,onClose}) {
  
  return ReactDOM.createPortal (

    <>
      <div className='header'>
        
        <h3>توضیحات</h3>
        <div><button onClick={onClose}><span>بستن</span>
        </button></div>
        
        </div>
        <div className='description'>{description}</div>
    </>

      
    ,
    document.getElementById("portal")
  )
}

export default Popup