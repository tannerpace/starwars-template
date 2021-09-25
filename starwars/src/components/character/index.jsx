import React, {useEffect,useState} from "react"
import { Button,Box,ListItem} from "@mui/material";
import StaticCharacter from "../staticCharacter";
import useStyles from "./styles"


const Character = ()=>{
  const [updates,setUpdates] = useState((0))
    const [count, setCount] = useState(0);
    
       if(count < 0){
         setCount(1)
       }
  const [person,setPerson] = useState({
           name:"",
           birth_year:"",
           eye_color:"",
           hair_color:"",
        gender:"",
        skin_color:"",
        homeworld:"",
        
   
height:"",mass:"",starships:[]
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
  <>
    <div>   
        <Box
      
        width="80%"
        margin="auto">
        <Button 
          color="secondary"
        
    fullWidth
    variant="contained"
    onClick={() => (setCount(count - 1),setUpdates(updates + 1))}>
        Previous character
         </Button>
       <StaticCharacter person={person}/>
   
         <Button 
         variant="contained"
         color="primary"
         fullWidth
    onClick={() => (setCount(count + 1),setUpdates(updates + 1))}>
      Next character
    </Button></Box></div></>
)





}

export default Character