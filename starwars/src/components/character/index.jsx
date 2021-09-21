import React, {useEffect,useState} from "react"
import { Button,Box,ListItem} from "@mui/material";
import StaticCharacter from "../staticCharacter";

const Character = ()=>{
  const [updates,setUpdates] = useState((0))
    const [count, setCount] = useState(0);
    
       if(count < 0){
         setCount(1)
       }

       const [person,setPerson] = useState({
           name:"null",
        gender:"null",
    hair_color:"null",
height:"null",mass:"null",starships:[]
})

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {

        fetch(`https://swapi.dev/api/people/${count}`)
    .then(response => response.json())
    .then(data => {setPerson(data)})
 
      // Update the document title using the browser API
      document.title = `You clicked ${count} times`;
  },[count]);


 

return(
    <div>   
        <Box
        width="30rem"
        margin="auto">
        <Button
    fullWidth
    variant="fab"
    onClick={() => (setCount(count - 1),setUpdates(updates + 1))}>
        Previous character
         </Button>
       <StaticCharacter person={person}/>
   
         <Button 
         variant="fab"
         color="secondary"
         fullWidth
    onClick={() => (setCount(count + 1),setUpdates(updates + 1))}>
      Next character
    </Button></Box></div>
)





}

export default Character