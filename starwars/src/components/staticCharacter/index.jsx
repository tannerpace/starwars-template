import React from "react";
import { ListItem } from "@mui/material";
import { Box } from "@mui/system";


const StaticCharacter = (props) => {
    console.log(props.person)

return(  
        <Box
        margin="auto"
        width="70%">
        <ListItem aria-label="Name">{props.person.name}</ListItem>
        <ListItem>Gender : {props.person.gender}</ListItem>
        <ListItem>Height : {props.person.height}</ListItem>
        <ListItem>Hair Color : {props.person.hair_color}</ListItem>
        <ListItem>Skin Color:{props.person.skin_color}</ListItem>
        <ListItem>Year Borm : {props.person.birth_year}</ListItem>
        {/* <ListItem>{props.person.homeworld}</ListItem> */}
        </Box>  )
}
export default StaticCharacter    