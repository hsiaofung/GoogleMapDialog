import React, { Component } from "react";

export default class GoogleMapDialog extends Component {
  render() {
    const { show, close } = this.props;
    return (
      <div>
        <ScrollableLightbox show={show} title="分店位置" close={close}>
          <GoogleMap
            lat={"25.051216"}
            lng={"121.577515"}
            lang="en"
            text={<span style={{ color: "red" }}>Here</span>}
          />
        </ScrollableLightbox>
      </div>
    );
  }
}
