import React, {useEffect,useState} from "react"
import RandomNumber from "./functions/RandomNumber"
import MyForm from "./components/TextInputWithFocusButton"  
import {Box,Button} from "@mui/material"
import Page from "./Pages"
import Character from "./components/character"


// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.co/
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

const App = () => {


  const [person,setPerson] = useState({person:'No 1'})

    // Similar to componentDidMount and componentDidUpdate:
    


  
        

 

    


 

 
return(

<Page>

<div>
{/* <h1 className="mdc-tooltip">GET A CHARACTER!</h1> */}



{/* <h1>{`${person}`}</h1> */}
<Character/>
{/* <MyForm/> */}
  </div>
</Page>)
}
export default App






