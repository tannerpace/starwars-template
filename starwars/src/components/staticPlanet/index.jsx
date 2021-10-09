import React from "react";
import { ListItem } from "@mui/material";
import { Box } from "@mui/system";

const StaticPlanet = (props) => {
  return (
    <Box margin="auto" width="80%">
      <ListItem>Name : {props.planet.name}</ListItem>
      <ListItem>Population : {props.planet.population}</ListItem>
      <ListItem>Terrain : {props.planet.terrain}</ListItem>
      <ListItem>Diameter : {props.planet.diameter}</ListItem>
      <ListItem>Gravity{props.planet.gravity}</ListItem>
    </Box>
  );
};
export default StaticPlanet;
