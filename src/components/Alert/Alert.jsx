import React, { useEffect, useState } from "react";

const Alert = () => {
  const [show, setShow] = useState(true);

  const onclickHandler = () => {
    localStorage.setItem("showAlert", "false");
    setShow(false);
  };

  
  return (
    show && (
      <div
        style={{
          backgroundColor: "#f8d7da",
          color: "#721c24",
          padding: "20px",
          textAlign: "center",
          fontSize: "16px",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "999",
        }}
      >
        <strong>⚠️ Attention Visitors! ⚠️ </strong>
        <br />
        <br />
        Please note that our <b>images are not fully optimized</b>, and the
        website may experience slightly slower load times due to our current
        reliance on <b>free hosting services</b>. We appreciate your
        understanding and patience. Thank you for your support!
        <br />
        <br />
        <button
          style={{
            backgroundColor: "#721c24",
            color: "#f8d7da",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={onclickHandler}
        >
          OK
        </button>
      </div>
    )
  );
};

export default Alert;
