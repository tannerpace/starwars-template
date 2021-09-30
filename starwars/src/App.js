import React, { useEffect, useState } from "react";
import RandomNumber from "./functions/RandomNumber";
import MyForm from "./components/TextInputWithFocusButton";
import { AppBar, Box, Button, Typography } from "@mui/material";
import Page from "./Pages";
import Character from "./components/character";
import quotes from "./functions/quotes";
import Planet from "./components/planet";

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.co/
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

const App = () => {
  const [page, setPage] = useState("home");

  function swapPages(newPage) {
    setPage((prevPage) => newPage);
  }

  const [person, setPerson] = useState({ person: "No 1" });

  // Similar to componentDidMount and componentDidUpdate:
  const getQuote = () => {
    const quote = quotes();
    return quote;
  };

  return (
    <Page>
      <Box width="50%" margin="auto">
        <Typography onCLick={getQuote()}>{`${getQuote()}`}</Typography>

        <AppBar>{/* <MyForm/> */}</AppBar>
        <Character />

        <Planet />
      </Box>
    </Page>
  );
};
export default App;
