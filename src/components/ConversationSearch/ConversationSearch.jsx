import React from "react";
import "./ConversationSearch.css";

export const ConversationSearch = () => {
  return (
    <div className="conversation-search">
      <input
        type="search"
        className="conversation-search-input"
        placeholder="Search Messages"
      />
    </div>
  );
};
