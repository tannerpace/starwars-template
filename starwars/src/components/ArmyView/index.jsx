import React, { useEffect, useState } from "react";
import { Button, Box, ListItem, Typography } from "@mui/material";
import StaticCharacter from "../StaticCharacter";
import useStyles from "./styles";

const ArmyView = () => {
  const classes = useStyles();

  const army = localStorage.getItem("army");

  // const personalArmy = army.map((person) => {
  //   return <h1>{person.name}</h1>;
  // });

  return (
    <div>
      <Box width="30rem" margin="auto">
        {/* {personalArmy} */}
        <Typography>Hi armyView works</Typography>
        <Typography>Hi armyView works</Typography>
        <Typography>Hi armyView works</Typography>
        <Typography>Hi armyView works</Typography>
        <Typography>Hi armyView works</Typography>
        <Typography>Hi armyView works</Typography>
        <pre>{JSON.stringify(army[8])}</pre>
      </Box>
    </div>
  );
};

export default ArmyView;
