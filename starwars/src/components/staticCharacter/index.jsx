import React from "react";
import { ListItem } from "@mui/material";
import { Box } from "@mui/system";


const StaticCharacter = (props) => {
    console.log(props.person)

return(  
        <Box
        margin="auto"
        width="70%">
        <ListItem>{props.person.name}</ListItem>
        <ListItem>{props.person.gender}</ListItem>
        <ListItem>{props.person.hair_color}</ListItem>
        <ListItem>{props.person.height}</ListItem>
        <ListItem>{props.person.mass}</ListItem>
        </Box>  )
}
export default StaticCharacter