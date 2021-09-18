import React ,{useRef,setState,useState} from "react";
import {Box,TextField,Button} from "@mui/material"
import { Formik, Field, Form } from 'formik';


function MyForm() {
  

    return (


        <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
         <Box>
         <Form>
        <label htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName" placeholder="Jane" />

        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" placeholder="Doe" />

        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <Button 
        fullWidth
        type="submit">Submit</Button>
      </Form>
      </Box>


     


      </Formik> 
    );
  }

  export default MyForm;