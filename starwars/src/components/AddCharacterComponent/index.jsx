import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import React, { useEffect, useState } from "react";

const AddCharacterComponent = (props) => {
  const [army, setArmy] = useState([]);

  // name: `${pro}`,
  // height: `${props.height}`,
  // mass: `${props.mass}`,
  // hair_color: `${props.hair_color}`,
  // skin_color: `${props.skin_color}`,
  // eye_color: `${props.eye_color}`,
  // birth_year: `${props.birth_year}`,
  // gender: `${props.gender}`,
  // homeworld: `${props.homeworld}`,
  // films: `${props.films}`,
  // species: `${props.species}`,
  // vehicles: `${props.vehicles}`,
  // starships: `${props.starships}`,

  const saveArmy = localStorage.setItem("army", `${army}`);

  const pronoun =
    props.gender === "female" && !undefined ? "Female" : `${props.gender}`;
  const pronoun2 = props.gender === "female" && !undefined ? "She" : "He";
  const addCharacter = () => {
    setArmy([...army, props]);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          // image=""
          alt={`photo of ${props.name}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {props.name} is {pronoun} born on the year of {props.birth_year}.{" "}
            {pronoun2} has {props.eye_color} eyes. Is {props.height}CM tall, and
            weights {props.mass}KG
          </Typography>
        </CardContent>

        <Button variant="text" size="small" onClick={addCharacter}>
          Add to my Army
        </Button>
        <Button variant="text" size="small" onClick={saveArmy}>
          Save My Army
        </Button>
      </Card>
    </>
  );
};

export default AddCharacterComponent;
