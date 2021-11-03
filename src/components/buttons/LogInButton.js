import React from "react";
import "./LogInButton.scss";

const LogInButton = ({ setIsModalVisible }) => {
  
  const handleShow = () => {
    setIsModalVisible(true);
  };

  return (
    <>
      <button className="btn btn-primary" onClick={handleShow}>
        Log In
      </button>
    </>
  );
};

export default LogInButton;
