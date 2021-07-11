import axios from "axios";
import React from "react";

export const Profile = () => {
  React.useEffect(() => {
    axios.post("https://mango-messenger-app.herokuapp.com/api/auth/login", {
      email: "string",
      password: "string",
    });
  }, []);
  return <div>This is the Profile Page</div>;
};
