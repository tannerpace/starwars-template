import React, { useRef, setState, useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { Formik, Field, Form } from "formik";

const CustomForm = (props) => {
  const onSubmit = async (values) => {
    try {
      setTimeout(alert(JSON.stringify(values)), 99999);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={{
        character: `${props.character}`,
        height: `${props.height}`,
        age: `${props.age}`,
      }}
    >
      {(formik) => {
        return (
          <Form>
            <Field
              disabled
              label={"name"}
              name="character"
              value={props.character}
              variant="filled"
              color="secondary"
            />
            {/* <TextField
              disabled
              label={"name"}
              name="character"
              value={props.character}
              variant="filled"
              color="secondary"
            /> */}

            <Field
              disabled
              id="filled-disabled"
              label={"height"}
              variant="filled"
              value={props.height}
            />
            <Field
              disabled
              id="filled-disabled"
              label={"mass"}
              variant="filled"
              value={props.mass}
            />
            <Field
              id="filled-disabled"
              color="primary"
              label={"age"}
              variant="standard"
              name="age"
              value={props.age}
            />
            <Field
              id="filled-disabled"
              color="primary"
              label="Eye Color"
              variant="standard"
              value={props.eye_color}
            />
            <Field
              disabled
              label={"Sex"}
              value={props.gender}
              variant="filled"
              color="secondary"
            />

            <Button fullWidth type="submit">
              Submit
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default CustomForm;
