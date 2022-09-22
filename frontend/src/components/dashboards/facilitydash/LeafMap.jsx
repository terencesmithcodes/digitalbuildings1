import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import L from "leaflet";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import mapMarker from "../../../assets/map-marker.png";
// import {
//   getEngBuilding,
//   reset,
// } from "../../../features/engineer/engineerSlice";
const myIcon = new L.Icon({
  iconUrl: mapMarker,
  iconRetinaUrl: mapMarker,
  popupAnchor: [-0, 0],
  iconSize: [40, 45],
});
const LeafMap = () => {
  const dispatch = useDispatch();
  const { building, equipClasses, isError, isSuccess, isLoading, message } =
    useSelector((state) => state.energy);
  
  const position = [building.Latitude, building.Longitude];
  // if (isSuccess) {
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
      <Marker position={position} icon={myIcon}></Marker>
    </MapContainer>
  );
};

export default LeafMap;


