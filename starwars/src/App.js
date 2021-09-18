import React, {setState,useEffect,useState} from "react"
import RandomNumber from "./functions/RandomNumber"

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.co/
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

const App = () => {


    const [person,setPerson] = useState({person:'No 1'})

    const [count, setCount] = useState(0);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {

        fetch(`https://swapi.dev/api/people/${RandomNumber(100)}`)
    .then(response => response.json())
    .then(data => {setPerson(data)})
      // Update the document title using the browser API
      document.title = `You clicked ${count} times`;
    },[count]);



  
        
   



 

 
return(<>
<h1>HI</h1>
<pre>{`${person}`}</pre>


<pre>{JSON.stringify(person)}</pre>

<div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>

</>)
}
export default App






