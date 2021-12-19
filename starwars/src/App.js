import React, { useEffect, useState } from "react"
import RandomNumber from "./functions/RandomNumber"
import MyForm from "./components/TextInputWithFocusButton"
import { Box, Button, Typography } from "@mui/material"
import Page from "./Pages"
import Character from "./components/Character"
import quotes from "./functions/quotes"
import Planet from "./components/Planet"
import { Link, Switch, Route } from "react-router-dom"
import { AppBar } from "@mui/material"

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.co/
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

const App = () => {
  const [person, setPerson] = useState({ person: "No 1" })

  // Similar to componentDidMount and componentDidUpdate:

  return (
    <Page>
      <AppBar>
        <Link to="/">People</Link>
        <Link to="/planet">Planet</Link>
      </AppBar>

      <Box width="50%" margin="auto">
        <Typography padding="30px" color="blue">
          {`${quotes()}`}
        </Typography>

        <Switch>
          <Route exact path="/">
            <Character />
          </Route>
          <Route path="/planet">
            <Planet />
          </Route>
        </Switch>
        {/* <MyForm/> */}
      </Box>
    </Page>
  )
}
export default App
