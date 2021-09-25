import React, {useEffect,useState} from "react"
import { Button,Box,} from "@mui/material";
import StaticPlanet from "../staticPlanet";

const Planet = ()=>{
  const [updates,setUpdates] = useState((0))
    const [count, setCount] = useState(0);
    
       if(count < 0){
         setCount(1)
       }
  const [planet,setPlanet] = useState({
           climate:"null",
        gravity:"null",
    diameter:"null",
name:"null",mass:"null",terrain:[]
})

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {

        fetch(`https://swapi.dev/api/planets/${count}`)
    .then(response => response.json())
    .then(data => {setPlanet(data)})
 
      // Update the document title using the browser API
   
  },[count]);
return(
    <div>   
        <Box
        width="30rem"
        margin="auto">
        <Button
    fullWidth
    variant="outlined"
    onClick={() => (setCount(count - 1),setUpdates(updates + 1))}>
        Previous character
         </Button>
       <StaticPlanet planet={planet}/>
   <Button 
         variant="outlined"
         color="secondary"
         fullWidth
    onClick={() => (setCount(count + 1),setUpdates(updates + 1))}>
      Next Planet
    </Button></Box></div>
)





}

export default Planet