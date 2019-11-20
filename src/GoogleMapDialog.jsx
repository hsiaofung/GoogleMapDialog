import React, { Component } from "react";
import { ScrollableLightbox as Lightbox } from "hf-lightbox";
import GoogleMapReact from "google-map-react";
import maker from "./img/maker.png";

const createMapOptions = maps => {
  return {
    zoomControl: true /*右下角的縮放控件*/,
    mapTypeControl: false /*左上角顯示地圖或衛星*/,
    streetViewControl: true /*右下角的人型街景*/,
    panControl: true /*平移控件，但在Google Map上沒有看到*/,
    scrollwheel: false,
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

export class GoogleMapDialog extends Component {
  render() {
    const { lat, lng, text } = this.props;
    const center = {
      lat: parseFloat(lat),
      lng: parseFloat(lng)
    };
    const zoom = 18;
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "522px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyDzTmj81wHIQeRK1qldxbVF035wjSiZzIU"
            // language: "en" /*設定語言*/
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

export default GoogleMapDialog;
