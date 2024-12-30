/* eslint-disable react/jsx-key */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sites = () => {
  const [sites, setSites] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3003/api/v1/sites"
        );
        setSites(response.data.data);
      } catch (error) {
        console.log("Error while fetching data", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h2>Sites</h2>
      <div className="sitesTable">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">City</th>
              <th scope="col">State</th>
              <th scope="col">Country</th>
              <th scope="col">Measuring Points</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sites.map((site, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{site.name}</td>
                  <td>{site.address}</td>
                  <td>{site.city}</td>
                  <td>{site.state}</td>
                  <td>{site.country}</td>
                  <td>{site._count["measuringPoints"]}</td>
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

export default Sites;
