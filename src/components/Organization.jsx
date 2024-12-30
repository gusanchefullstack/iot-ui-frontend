/* eslint-disable react/jsx-key */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Organizations = () => {
  const [organizations, setOrganizations] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3003/api/v1/organizations"
        );
        setOrganizations(response.data.data);
      } catch (error) {
        console.log("Error while fetching data", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h2>Organizations</h2>
      <div className="userTable">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">City</th>
              <th scope="col">State</th>
              <th scope="col">Country</th>
              <th scope="col">Sites</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {organizations.map((organization, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{organization.name}</td>
                  <td>{organization.address}</td>
                  <td>{organization.city}</td>
                  <td>{organization.state}</td>
                  <td>{organization.country}</td>
                  <td>{organization._count["sites"]}</td>
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

export default Organizations;
