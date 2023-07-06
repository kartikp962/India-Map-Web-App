import {React, useState} from 'react'
import '../App.css'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { Icon } from 'leaflet'
import covidData from '../data.json'
import icon1 from '../images/covid19-2.png'
import { useNavigate } from 'react-router-dom'

const covidIcon = new Icon({
  iconUrl: icon1,
  iconSize: [25, 25]
})


function Map() {
  const [ activeCovid, setActiveCovid ] = useState( null );
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
       { covidData.map(eachData => (
         <Marker 
            key={eachData.Id} 
            position= {[eachData.Latitude, eachData.Longitude]}
            eventHandlers={{
              click: () => {
                setActiveCovid(eachData)
                // setSelectedStateCities(eachData.Cities);
                navigate('/stateList', { cityLat: eachData.Latitude, cityLon: eachData.Longitude });
              }
            }}
            icon= {covidIcon}
          />
       ))}
      </MapContainer> 
  
  );
}

export default Map;