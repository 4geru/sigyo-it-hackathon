import React from 'react'
import { GoogleMap, useJsApiLoader, InfoWindow, Marker } from '@react-google-maps/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const containerStyle = {
  height: "60vh",
  width: "40%",
};

const center = {
  lat: 35.687746611266924,
  lng: 139.7360276081199,
};
const positionTokyo = {
  lat: 35.6822932,
  lng: 139.7663016,
};
const stations = [
  {name: '上野駅', lat: 35.7141715, lng: 139.7802204, img: '/images/pin_red.png' },
  {name: '新宿駅', lat: 35.6884023, lng: 139.6996876, img: '/images/pin_blue.png' },
  {name: '池袋駅', lat: 35.7295071, lng: 139.7117114, img: '/images/pin_black.png' },
  {name: '品川駅', lat: 35.6284756, lng: 139.7395710, img: '/images/pin_green.png' },
  {name: '渋谷駅', lat: 35.6560434, lng: 139.7038757, img: '/images/pin_orange.png' },
]
const clicked = (name) => {
  return () => {
    console.log(`${name} is clicked`)
  }
}

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.GOOGLE_MAP_API_KEY
  })

  return isLoaded ? (
    <>
      <br/>
      <FontAwesomeIcon icon={faMapMarkerAlt} />
      <br/>
      <br/>
      <img src={'/images/pin_red.png'} alt="Logo" />
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        {stations.map( station => {
          return (
            <Marker
              key={station.name}
              position={station}
              onClick={clicked(station.name)}
              icon={station.img}
            />
          )
        })}
        <InfoWindow position={positionTokyo}>
          <>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            { `   温泉だよ！行きたいよね` }
          </>
        </InfoWindow>
      </GoogleMap>
    </>
  ) : <></>
}

export default Map
