import React from "react";
// import RandomNumber from "./functions/RandomNumber";
// import MyForm from "./components/TextInputWithFocusButton";
import { AppBar, Box, Button } from "@mui/material";
import Page from "./Pages";
import Character from "./components/character";
import quotes from "./functions/quotes";
import Planet from "./components/planet";
import { Link, Switch, Route } from "react-router-dom";

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.co/
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

const App = () => {
  // Similar to componentDidMount and componentDidUpdate:
  const getQuote = () => {
    const quote = quotes();
    return quote;
  };

  return (
    <>
      <Page>
        <Box width="50%" margin="auto">
          {/* <Typography onCLick={()=>{getQuote()}>{`${getQuote()}`}</Typography> */}

          <AppBar>
            <Button>
              <Link to="/">Planet</Link>
            </Button>
            <Button>
              <Link to="/character">Character</Link>
            </Button>
          </AppBar>
          <h1>{getQuote()}</h1>
        </Box>
      </Page>
      <Switch>
        <Route exact path="/">
          <Planet />
        </Route>
        <Route path="/character" exact>
          <Character />
        </Route>
      </Switch>
    </>
  );
};
export default App;
