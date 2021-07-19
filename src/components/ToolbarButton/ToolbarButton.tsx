import React from "react";
import "./ToolbarButton.css";

// @ts-ignore
export const ToolbarButton = ({ icon }) => {
  
  return <i className={`toolbar-button ${icon}`} />;
};
