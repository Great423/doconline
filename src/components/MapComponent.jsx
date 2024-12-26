import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Import the Leaflet marker icons
import markerIconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix default icon issue
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIconRetina,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

const MapComponent = () => {
    // Coordinates for Lagos, Nigeria
    const lagosPosition = [6.5244, 3.3792];

    return (
      <section className="py-10 bg-light">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center">Our Location</h2>
          <MapContainer center={lagosPosition} zoom={13} className="h-64 mt-6">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {/* Marker for Lagos */}
            <Marker position={lagosPosition}>
              <Popup>
                Lagos, Nigeria <br /> Our location.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </section>
    );
}

export default MapComponent;
