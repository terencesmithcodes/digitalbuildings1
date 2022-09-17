import React from 'react'
import { MapContainer, TileLayer, Marker } from "react-leaflet"
// import { Marker } from "https://cdn.esm.sh/react-leaflet/Marker";
// import { Popup } from "https://cdn.esm.sh/react-leaflet/Popup";

// import {FaMapMarker} from 'react-icons/fa'

// import markerIcon from '../assets/map-marker.png'
// const myIcon = Leaflet.Icon({
//    iconUrl: "../assets/map-marker.png",
//    iconSize: [38, 95],

//  });

const LeafMap = () => {
    const position = [34.03, -84.69]
  return (
    <MapContainer
      className="map"
      center={position}
      zoom={12}
      style={{ height: 600, width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

          <Marker position={position}>
        {/* //     // icon={myIcon} */}
        {/* //   >
        // <Popup>
        //   Digital Building M46 
        // </Popup> */}
      </Marker>
    </MapContainer>
  );
}

export default LeafMap