import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import mapMarker from "../../../assets/map-marker.png";

const myIcon = new L.Icon({
  iconUrl: mapMarker,
  iconRetinaUrl: mapMarker,
  popupAnchor: [-0, 0],
  iconSize: [40, 45],
});

const LeafMap = () => {
  const { building } = useSelector((state) => state.energy);
  
  // Default to NYC coordinates if building coordinates are missing
  const defaultPosition = [40.7128, -74.0060]; // New York City
  
  // Check if latitude and longitude exist and are valid numbers
  const hasValidCoordinates = 
    building && 
    building.Latitude !== undefined && 
    building.Longitude !== undefined &&
    !isNaN(building.Latitude) && 
    !isNaN(building.Longitude);
  
  const position = hasValidCoordinates 
    ? [building.Latitude, building.Longitude] 
    : defaultPosition;

  const buildingName = building?.Name || building?.ClientName || "Corporate HQ Building";
  const address = building?.Address || "123 Main Street";
  const city = building?.City || "Metropolis";
  const state = building?.State || building?.StateName || "New York";
    
  return (
    <MapContainer
      className="map"
      center={position}
      zoom={12}
      style={{ height: 400, width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={myIcon}>
        <Popup>
          <div>
            <strong>{buildingName}</strong><br />
            {address}<br />
            {city}, {state}
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafMap;


