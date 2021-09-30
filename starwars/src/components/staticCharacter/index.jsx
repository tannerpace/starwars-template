import React from "react";
import { Input, ListItem as TextFeild, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import CustomForm from "../CustomForm";

const StaticCharacter = (props) => {
  // constants
  const key = props.key;
  const person = props.props;

  const { name } = person;
  const { gender } = person;
  const { age } = person;
  const { height } = person;
  const { skin_color } = person;
  const { mass } = person;
  const { eye_color } = person;

  //   functions

  // render statement
  return (
    <Box margin="auto" width="70%">
      {" "}
      <CustomForm
        key={key}
        character={name}
        skin_color={skin_color}
        gender={gender}
        age={age}
        height={height}
        mass={mass}
        eye_color={eye_color}
      />
    </Box>
  );
};
export default StaticCharacter;
