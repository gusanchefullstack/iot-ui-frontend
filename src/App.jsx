import "./App.css";
import Cabinet from "./components/Cabinet";
import Organizations from "./components/Organization";
import Sites from "./components/Site";
import MeasuringPoints from "./components/MeasuringPoints";
import Boards from "./components/Boards";
import Sensors from "./components/Sensor";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 

function App() {
  const route = createBrowserRouter([
    {
      path:"/",
      element: <Cabinet/>
    },
    {
      path:"/organizations",
      element: <Organizations/>
    },
    {
      path:"/sites",
      element: <Sites/>
    },
    {
      path:"/points",
      element: <MeasuringPoints/>
    },
    {
      path:"/boards",
      element: <Boards/>
    },
    {
      path:"/sensors",
      element:<Sensors/>
    }
  ])
  return (
    <RouterProvider router={route}></RouterProvider>
  );
}

export default App;
