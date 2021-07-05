import React from "react";
import "./Checkbox.scss";

const Checkbox = () => {
  return (
    <div className="checkbox-container">
      <div className="styled-checkbox">
        <label>most popular</label>
        <input type="checkbox" />
      </div>
    </div>
  );
};

export default Checkbox;
