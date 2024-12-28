/* eslint-disable react/prop-types */
import "./menuItem.css";
const MenuItem = (props) => {
  return (
    <div className="menuItem">
      <a href="/">
        <div className="">
          <i className={props.icon}></i>
        </div>
        <h2>{props.option}</h2>
      </a>
    </div>
  );
};

export default MenuItem;
