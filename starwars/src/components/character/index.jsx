import React, { useEffect, useState } from "react";
import { Button, Box, ListItem } from "@mui/material";
import StaticCharacter from "../staticCharacter";
import useStyles from "./styles";

const Character = () => {
  const classes = useStyles();
  const [updates, setUpdates] = useState(0);
  const [count, setCount] = useState(0);

  const [person, setPerson] = useState({
    // name: "null",
    // gender: "null",
    // hair_color: "null",
    // height: "null",
    // mass: "null",
    // starships: [],
  });

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    if (count > 0) {
      fetch(`https://swapi.dev/api/people/${count}/?format=json`)
        .then((response) => response.json())
        .then((data) => {
          setPerson(data);
        });
    }

    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <Box width="30rem" margin="auto">
        {count <= 1 && <Box padding="24.4px" border="solid red 0px"></Box>}
        {count > 1 && (
          <Button
            fullWidth
            variant="outlined"
            onClick={() => (setCount(count - 1), setUpdates(updates + 1))}
          >
            Previous Character
          </Button>
        )}
        {console.log("parent", person)}
        <StaticCharacter props={person} />

        <Button
          className={classes.buttonRoot}
          variant="outlined"
          color="secondary"
          fullWidth
          onClick={() => (setCount(count + 1), setUpdates(updates + 1))}
        >
          Next character
        </Button>
      </Box>
    </div>
  );
};

export default Character;
