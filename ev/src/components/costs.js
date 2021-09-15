import React from 'react';
import Popup from 'reactjs-popup';

function Costs(){
  return(
    <Popup
    trigger={<button className="popupbutton"> Costs </button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Costs </div>
        <div className="content">
          {' '}
          <div className='cont'>There are both extra costs and savings to be had when owning an EV.</div>
          <br />
          <div className='cont'>Insuring an EV costs about 1.5x more than insuring an equivalent petrol/diesel vehicle.</div>
          <br/>
          <div className='cont'>Repairing an EV also generally costs more but they tend to break down a lot less than  petrol/diesel vehicles.</div>
          <br/>
          <div className='cont'>Don't forget that EVs pay no vehicle excise duty (road tax) even if the vehicle is worth more than £40,000.</div>
        </div>
      </div>
    )}
  </Popup>
  )
};

export default Costs;
