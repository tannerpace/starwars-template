import React, { useEffect, useState } from "react";
import { Button, Box, ListItem, Typography } from "@mui/material";
import StaticCharacter from "../StaticCharacter";
import useStyles from "./styles";

const ArmyView = () => {
  const classes = useStyles();

  const army = localStorage.getItem("myArmy");

  return (
    <div>
      <Box width="30rem" margin="auto">
        <Typography>{(army[1], army[0], army[3])}</Typography>
      </Box>
    </div>
  );
};

export default ArmyView;
