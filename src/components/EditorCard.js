import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton
} from "@mui/material";
import { AddCircleOutline as AddCircleOutlineIcon } from "@mui/icons-material";

const EditorCard = () => {
  const handleRedirect = () => {
    window.location.href = "/editor"; // Replace '/editor' with the actual path to the editor page
  };

  return (
    <Card sx={{ maxWidth: "120mm", margin: "auto" }}>
      <CardActionArea onClick={handleRedirect}>
        <CardMedia
          component="img"
          height="297mm" // A4 paper size dimensions
          image="/path/to/a4_image.jpg" // Replace with the path to your A4-sized image
          alt="A4 Size"
        />
        <CardContent>
          <IconButton sx={{ fontSize: "4rem" }} color="primary">
            <AddCircleOutlineIcon />
          </IconButton>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default EditorCard;
