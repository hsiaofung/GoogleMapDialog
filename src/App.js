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
