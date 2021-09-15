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
        <div className="header"> Grants </div>
        <div className="content">
          {' '}
          <div className='cont'>The UK government offers two grants for those purcasing an electric vehicle.</div>
          <br />
          <div className='cont'>The first grant will pay up for up to 35% of the purchase price of an EV, up to a maximum of £2,500. The grant is only available to cars with on road value of less than £35,000.</div>
          <br/>
          <a href="https://www.gov.uk/plug-in-car-van-grants">Check out the full list of cars eligible</a>
          <br/>
          <div className='contlink'>The second grant available is the Electric Vehicle Homecharge Scheme which provides
            grant funding of up to 75% towards the cost of installing electric vehicle chargepoints at domestic properties across the UK.</div>
          <br/>
        </div>
      </div>
    )}
  </Popup>
  )
};

export default Grants;
