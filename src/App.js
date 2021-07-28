import logo from "./logo.svg";
import "./App.css";
import Search from "./Search";

import Weather from "./Weather";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <h2>(React Version)</h2>

      <Search />

      <Weather city="Prague" />
    </div>
  );
}

export default App;
