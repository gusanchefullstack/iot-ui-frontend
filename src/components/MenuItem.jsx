/* eslint-disable react/prop-types */
import "./menuItem.css";
import { Link } from "react-router-dom";
const MenuItem = (props) => {
  return (
    <div className="menuItem">
      <Link to={`/${props.option}`}>
        <div className="">
          <i className={props.icon}></i>
        </div>
        <h2>{props.option}</h2>
      </Link>
    </div>
  );
};

export default MenuItem;
