import { IconButton } from "@material-tailwind/react";
//import Icon from "@material-tailwind/react/*";
import React from "react";

function Doc() {
  return (
    <div>
      <header className="flex justify-between items-center p-3 pb-1">
        <IconButton name="description" size="5xl" color="blue" />
      </header>
    </div>
  );
}

export default Doc;
