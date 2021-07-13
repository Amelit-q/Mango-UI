import React from "react";
import "./ToolbarButton.css";

export const ToolbarButton = ({ icon }) => {
  return <i className={`toolbar-button ${icon}`} />;
};
