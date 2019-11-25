## install

yarn add hf-map

## component

```javascript
<GoogleMap>
```

## features

- support 國際化
- support 整頁地圖或光箱地圖(需用 ScrollableLightbox 包起來。)
- support 地圖控件，顯示街景，衛星，縮放。

## API

- license: Google map license。
- lat: 經度。
- lng: 緯度。
- text: marker 上的文字。
- lang: 語言。

## CSS

.google-map-height: 可定義地圖的高度。default 是用在光箱，若是不用光箱要自定義高度，可設 100vh，滿版，但要注意 mobile 底部可能會跑掉。

## Demo

```javascript
import React from "react";
import GoogleMap from "./GoogleMap";
import ScrollableLightbox from "hf-lightbox";

class App extends React.Component {
  state = { show: false };
  componentDidMount() {
    this.setState({
      show: true
    });
  }
  close() {
    this.setState({
      show: false
    });
  }
  render() {
    return (
      <div className="App">
        <ScrollableLightbox
          show={this.state.show}
          title="分店位置"
          close={this.close.bind(this)}
        >
          <GoogleMap
            license="/*YOUR LICNESE*/"
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

export default App;
```
