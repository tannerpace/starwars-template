import React, {setState,useEffect,useState} from "react"
import RandomNumber from "./functions/RandomNumber"
import MyForm from "./components/TextInputWithFocusButton"  
import {Box,TextField,Button} from "@mui/material"


// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.co/
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

const App = () => {


    const [person,setPerson] = useState({person:'No 1'})

    const [count, setCount] = useState(0);
    const army = []



    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {

        fetch(`https://swapi.dev/api/people/${RandomNumber(100)}`)
    .then(response => response.json())
    .then(data => {setPerson(data)})
    .then(army.push(person))
      // Update the document title using the browser API
      document.title = `You clicked ${count} times`;

      
    },[count]);



  
        
   const man = JSON.stringify(person)
   army.push(man)




 

 
return(<div>
<h1 className="mdc-tooltip">GET A CHARACTER!</h1>



<pre>{`${man}`}</pre>
<pre>{`${army[0]}`}</pre>

<div>
      <p>You got a New Character {count} times</p>
      <Button onClick={() => setCount(count + 1)}>
        Click me
      </Button>
    </div>
    <MyForm/>
  
</div>)
}
export default App






