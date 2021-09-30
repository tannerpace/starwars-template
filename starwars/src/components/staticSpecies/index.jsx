import React from "react";
import { ListItem } from "@mui/material";
import { Box } from "@mui/system";

const StaticSpecies = (props) => {
  return (
    <Box margin="auto" width="80%">
      <ListItem>Name : {props.species.name}</ListItem>
      <ListItem>Population : {props.species.population}</ListItem>
      <ListItem>Terrain : {props.species.terrain}</ListItem>
      <ListItem>Diameter : {props.species.diameter}</ListItem>
      <ListItem>Gravity{props.species.gravity}</ListItem>
    </Box>
  );
};
export default StaticSpecies;
