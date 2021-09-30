import React, {useEffect,useState} from "react"
import { Button,Box,ListItem} from "@mui/material";
import StaticCharacter from "../staticCharacter";
import useStyles from "./styles"

const Character = ()=>{
  const classes = useStyles()
  const [updates,setUpdates] = useState((0))
    const [count, setCount] = useState(0);
    
       if(count < 0){
         setCount(1)
       }
const [person,setPerson] = useState({
           id:`${count}`,
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
      <h1>Character works</h1>
        <Box
        paddingTop="2rem"
        width="30rem"
        margin="auto">
        <Button
    fullWidth
    variant="outlined"
    onClick={() => (setCount(count - 1),setUpdates(updates + 1))}>
        Previous character
         </Button>
       <StaticCharacter person={person}/>
   
         <Button 
           className={classes.buttonRoot}
         variant="outlined"
         color="secondary"
         fullWidth
    onClick={() => (setCount(count + 1),setUpdates(updates + 1))}>
      Next character
    </Button></Box></div>
)





}

export default Character