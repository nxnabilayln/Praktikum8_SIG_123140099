import { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import api from "../config/api";
import L from "leaflet";

function MapView() {
  const [data, setData] = useState(null);

  useEffect(() => {
    api
      .get("/fasilitas/geojson")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  const colors = {
    Sekolah: "blue",
    Kesehatan: "red",
    Publik: "green",
    Masjid: "purple",
    "Perguruan Tinggi": "orange",
    "Kantor Polisi": "black",
    "Pusat Perbelanjaan": "brown",
    "Tempat Usaha": "pink",
    "Balai Masyarakat": "yellow",
  };

  const getStyle = (feature) => ({
    color: colors[feature.properties.jenis] || "gray",
    weight: 2,
    fillOpacity: 0.6,
  });

  const onEachFeature = (feature, layer) => {
    const p = feature.properties;
    const [lng, lat] = feature.geometry.coordinates;

    layer.bindPopup(`
      <div class="popup-card">
        <h3>📍 ${p.nama}</h3>
        <hr/>
        <p><b>🏷️ Jenis:</b> ${p.jenis}</p>
        <p><b>🌐 Latitude:</b> ${lat.toFixed(6)}</p>
        <p><b>🌐 Longitude:</b> ${lng.toFixed(6)}</p>
      </div>
    `);

    layer.on({
      mouseover: (e) => {
        e.target.setStyle({
          weight: 5,
          fillOpacity: 0.9,
        });
      },
      mouseout: (e) => {
        e.target.setStyle({
          weight: 2,
          fillOpacity: 0.6,
        });
      },
      click: (e) => {
        const map = e.target._map;
        map.flyTo(e.latlng, 16);
      },
    });
  };

  const pointToLayer = (feature, latlng) =>
    L.circleMarker(latlng, {
      radius: 8,
      fillColor: "#3388ff",
      color: "#000",
      weight: 1,
      fillOpacity: 0.8,
    });

  return (
    <div className="map-container">
      <MapContainer
        center={[-5.36, 105.3]}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />

        {data && (
          <GeoJSON
            data={data}
            style={getStyle}
            onEachFeature={onEachFeature}
            pointToLayer={pointToLayer}
          />
        )}
      </MapContainer>
    </div>
  );
}

export default MapView;
