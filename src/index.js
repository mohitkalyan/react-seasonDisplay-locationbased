import React from "react";
import ReactDOM from "react-dom";
import SeasonBckgrd from "./SeasonBckgrd.js";

class App extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = { lat: null, msg: "" };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        return this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        return this.setState({ msg: err.message });
      }
    );
  }

  render() {
    if (this.state.lat && !this.state.msg)
      return <SeasonBckgrd lattitude = {this.state.lat} />;
    if (!this.state.lat && this.state.msg)
      return <div>Error : {this.state.msg}</div>;
    else return <div> Loading.... </div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
