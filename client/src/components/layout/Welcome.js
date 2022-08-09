import React from "react";
import Button from "../modules/Button";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <Link to="/map">
        <Button title={"Find some toilets"} />
      </Link>
    </div>
  );
};

export default Welcome;
