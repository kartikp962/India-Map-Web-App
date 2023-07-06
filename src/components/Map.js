import {React, useState} from 'react'
import '../App.css'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { Icon } from 'leaflet'
import citiesData from '../data.json'
import icon1 from '../images/location-marker.png'
import { useNavigate } from 'react-router-dom'

const MapIcon = new Icon({
  iconUrl: icon1,
  iconSize: [25, 25]
})


function Map() {
  const [ active, setActive ] = useState( null );
  const navigate = useNavigate();
  return (

      <MapContainer 
          center = { [ 20.593683, 78.962883 ] }
          zoom = { 5 }
          scrollWheelZoom = { true } 

      >
      <TileLayer 
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        url = 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
      />
       { citiesData.map(eachData => (
         <Marker 
            key={eachData.Id} 
            position= {[eachData.Latitude, eachData.Longitude]}
            eventHandlers={{
              click: () => {
                setActive(eachData)
                navigate('/stateList', { cityLat: eachData.Latitude, cityLon: eachData.Longitude });
              }
            }}
            icon= {MapIcon}
          />
       ))}
      </MapContainer> 
  
  );
}

export default Map;