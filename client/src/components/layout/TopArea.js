import React from 'react';
import '../../styles/components/layout/TopArea.css';
import DropMenu from '../modules/DropMenu';
import Button from '../modules/Button';

export default function TopArea(props) {
  const watchUserLocation = () => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        props.setUserLocation({
          lat: position.coords.latitude, 
          lng: position.coords.longitude
        })
    });
    } else {
        alert('Location services are not available on your device.');
    }
  }

  return (
    <div className='top_area'>
      <h2 className='top_title'>Find a Bathroom!</h2>
      <DropMenu setMode={props.setMode}/>
      <Button title={"Go!"} onClick={watchUserLocation}/>
    </div>
  )
}


