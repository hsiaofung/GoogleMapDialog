import React, { Component } from "react";
import { ScrollableLightbox as Lightbox } from "hf-lightbox";
import GoogleMapReact from "google-map-react";
import maker from "./img/maker.png";
import "./css/googleMap.css";

const createMapOptions = maps => {
  return {
    zoomControl: true /*右下角的縮放控件*/,
    mapTypeControl: true /*左上角顯示地圖或衛星*/,
    streetViewControl: true /*右下角的人型街景*/,
    panControl: true /*平移控件，但在Google Map上沒有看到*/,
    scrollwheel: false /*可用scrollwheel放大/縮小，若為false則為一般的滾動。*/,
    styles: [
      {
        stylers: [
          //  { saturation: -80 },/*可以降低地圖的飽和度*/
          //   { gamma: 0.8 },
          //   { lightness: 4 },
          { visibility: "on" } /*顯示商家*/
        ]
      }
    ]
  };
};
const AnyReactComponent = ({ text }) => (
  <div>
    <span>{text}</span>
    <img alt="" src={maker} />
  </div>
);

export class GoogleMap extends Component {
  render() {
    const { license, lat, lng, text, lang } = this.props;
    const center = {
      lat: parseFloat(lat),
      lng: parseFloat(lng)
    };
    const zoom = 18;
    return (
      // Important! Always set the container height explicitly
      <div className="google-map-height">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: license,
            language: lang === "en" ? "en" : "zh-TW" /*設定語言*/
          }}
          defaultCenter={center}
          defaultZoom={zoom}
          options={createMapOptions}
        >
          <AnyReactComponent lat={lat} lng={lng} text={text} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
