import logo from "./logo.svg";
import "./App.css";
import ParentWatch from "./components/ParentWatch/ParentWatch";
import Cosmetics from "./components/Cosmetics/Cosmetics";

function App() {
  return (
    <div className="App">
      <ParentWatch></ParentWatch>
      <Cosmetics></Cosmetics>
    </div>
  );
}

export default App;
