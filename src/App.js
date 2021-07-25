import logo from "./logo.svg";
import "./App.css";

import Weather from "./Weather";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <h2>(React Version)</h2>

      <Weather city="Prague" />
    </div>
  );
}

export default App;
