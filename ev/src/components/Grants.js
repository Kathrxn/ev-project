import React from 'react';
import Popup from 'reactjs-popup';

function Grants(){
  return(
    <Popup
    trigger={<button className="popupbutton"> Grants </button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Charging </div>
        <div className="content">
          {' '}
          <div className='cont'>Many EV dealerships offer free servicing and MOTs for 2 years with the purchase of a vehicle.However, after the free time period is up many owners prefer to use an independent garage.</div>
          <br />
          <div className='cont'>You might want to consider how close your nearest independent EV garage is to your home. HEVRA provide an interactive map of all EV friendly garages in the UK.</div>
          <br/>
          <a href="https://hevra.org.uk/garages.html">Find your nearest EV friendly garage</a>
        </div>
      </div>
    )}
  </Popup>
  )
};

export default Grants;
