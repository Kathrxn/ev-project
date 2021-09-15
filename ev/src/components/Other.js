import React from 'react';
import Popup from 'reactjs-popup';

function Other(){
  return(
    <Popup
    trigger={<button className="popupbutton"> Charging </button>}
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
          Electric vehicles can often have very different charging requirements. When thinking of purchasing an EV you should condsider:
          <ul>
            <li>The type of charger requried</li>
            <li>How long the vehicle takes to fully charge</li>
            <li>Does the vehicle allow rapid charging</li>
            <li>The cost of charging the vehicle</li>
          </ul>
          <div>You can use<a href="https://www.zap-map.com/"> Zap Map </a>or the<a href="https://www.zap-map.com/"> Open Charge Map </a>to check the type of charge points available near you.</div>
          <br />
          Energy providers will often offer cheaper rates for those wanting to charge an EV at home.
        </div>
      </div>
    )}
  </Popup>
  )
};

export default Other;
