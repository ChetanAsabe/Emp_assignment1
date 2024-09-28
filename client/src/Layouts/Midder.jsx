import React from "react";

const Midder = () => {
  return (
    <div
      className="welcome-message"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
      }}
    >
      <h1>Welcome to the Admin Portal!</h1>
    </div>
  );
};

export default Midder;
