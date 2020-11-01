import React from "react";
import "./LightBox.css";

function LightBox({ showLightBox, setShowLightBox, children }) {
  const handleModalClick = (e) => {
    if (e.target.tagName !== "IMG") {
      setShowLightBox(null);
    }
  };
  return (
    showLightBox && (
      <div className="lightBox">
        {children}
        <div onClick={handleModalClick} className="close-button">
          close
        </div>
      </div>
    )
  );
}

export default LightBox;
