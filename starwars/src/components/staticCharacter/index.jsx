import React from "react";

import { Box } from "@mui/system";
import AddCharacterComponent from "../AddCharacterComponent";

const StaticCharacter = (props, children, sendArmyUp) => {
  const person = props.props;
  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
    homeworld,
    films,
    species,
    vehicles,
    starships,
  } = person;

  // render statement
  return (
    <>
      <Box margin="auto" width="70%">
        <AddCharacterComponent
          name={name}
          skin_color={skin_color}
          gender={gender}
          birth_year={birth_year}
          height={height}
          mass={mass}
          eye_color={eye_color}
          homeworld={homeworld}
          species={species}
          vehicles={vehicles}
          starships={starships}
          films={films}
          hair_color={hair_color}
          sendArmy={(army) => army}
        >
          {children}
        </AddCharacterComponent>
      </Box>
    </>
  );
};
export default StaticCharacter;
