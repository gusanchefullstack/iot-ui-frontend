import "./App.css";
import MenuItem from "./components/MenuItem";

function App() {
  return (
    <>
      <MenuItem option="Organizations" icon="fa-solid fa-building fa-3x" />
      <MenuItem option="Sites" icon="fa-solid fa-sitemap fa-3x" />
      <MenuItem option="Measuring Points" icon="fa-solid fa-thumbtack fa-3x" />
      <MenuItem option="Boards" icon="fa-solid fa-microchip fa-3x" />
      <MenuItem option="Sensors" icon="fa-solid fa-wifi fa-3x" />
    </>
  );
}

export default App;
