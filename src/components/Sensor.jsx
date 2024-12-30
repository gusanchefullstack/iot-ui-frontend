/* eslint-disable react/jsx-key */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sensors = () => {
  const [sensors, setSensors] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3003/api/v1/sensors"
        );
        setSensors(response.data.data);
      } catch (error) {
        console.log("Error while fetching data", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h2>Sensors</h2>
      <div className="sensorsTable">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Name</th>
              <th scope="col">Board Type</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sensors.map((sensor, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{sensor.name}</td>
                  <td>{sensor.sensorType}</td>
                  <td className="actionButtons">
                    <button type="button" className="btn btn-primary">
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button type="button" className="btn btn-danger">
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sensors;
