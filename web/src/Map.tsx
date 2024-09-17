import React, { useState } from 'react';
import { MapContainer, TileLayer, Circle, Marker } from 'react-leaflet';
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';


type CircleProps = {
  center: [number, number];
  radius: number;
  pathOptions: {
    color: string;
    fillColor: string;
    fillOpacity: number;
    weight: number;
  };
};

type MarkerProps = {
  position: [number, number];
};

const Map: React.FC = () => {
  const TOKYO: [number, number] = [35.681236, 139.767125]; // 東京の緯度と経度
  const latlngs = [
    [35.681236, 139.767125], // Tokyo
    [36.756611, 139.875211]  // Nikko
  ];

  var Circles: CircleProps[] = [];
  const addBlueCircle = () => {
    for (let i = 0; i < 50; i++) {
        var lat = latlngs[0][0] + (Math.random() * (latlngs[1][0] - latlngs[0][0]));
        var lng = latlngs[0][1] + (Math.random() * (latlngs[1][1] - latlngs[0][1]));
        var circle: CircleProps = {
          center: [lat, lng],
          radius: 500,
          pathOptions: {
            color: 'blue',
            fillColor: 'blue',
            fillOpacity: 0.5,
            weight: 1
          }
        };
        Circles.push(circle);
    }
  };
  const addRedCircle = () => {
    var circle: CircleProps = {
      center: TOKYO,
      radius: 5000,
      pathOptions: {
        color: 'red',
        fillColor: 'red',
        fillOpacity: 0.2,
        weight: 1
      }
    };
    Circles.push(circle);
  };
  addRedCircle();
  addBlueCircle();

  const [showCircle, setShowCircle] = useState(true);

  let DefaultIcon = Leaflet.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [12, 41], // アイコンのとがった位置をクリックした場所に合わせるためのオフセット
    popupAnchor: [0, -32], // ポップアップの位置も合わせて調整
  });
  Leaflet.Marker.prototype.options.icon = DefaultIcon;

  return (
    <MapContainer 
      center={TOKYO} 
      zoom={13} 
      style={{ height: '60vh', width: '100%' }} // 地図のスタイルを設定
    >
      <TileLayer
        url="https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {showCircle && (
        Circles.map((circle, index) => (
          <Circle
            key={index}
            center={circle.center}
            pathOptions={circle.pathOptions}
            radius={circle.radius}
          />
        ))
        )}
      <Marker position={TOKYO} />
    </MapContainer>
  );
};

export default Map;
