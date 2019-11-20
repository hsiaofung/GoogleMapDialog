import React from "react";
import logo from "./logo.svg";
import "./App.css";
import GoogleMapDialog from "./GoogleMapDialog";
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
          <GoogleMapDialog lat={"25.051216"} lng={"121.577515"} />
        </ScrollableLightbox>
      </div>
    );
  }
}

export default App;
