import React, { useState } from "react";

function ToggleDetails() {
  const [Details, setDetails] = useState(false);

  const toggleDetails = () => {
    setDetails((prev) => !prev);
  };

  return (
    <div>
      <button onClick={toggleDetails}>
        {Details ? "x Details" : "+ Details"}
      </button>

      {Details && (
        <div
          style={{
            marginTop: "10px",
            marginBottom: "15px",
            width: "1000px",
            padding: "1rem",
          }}
        >
          <p style={{ paddingTop: "10px", paddingBottom: "10px" }}>
            The sofa quickly and easily turns into a spacious bed.
          </p>
          <p>Recommended for guest use — not ideal for daily sleeping.</p>
        </div>
      )}
    </div>
  );
}

export default ToggleDetails;
