import WeatherService from "./components/WeatherService/WeatherService";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <h1 className="app__title">Thinkific Weather Service</h1>
      <h2 className="app__author">By Jacob Hildebrandt</h2>
      <WeatherService />
    </div>
  );
}

export default App;
