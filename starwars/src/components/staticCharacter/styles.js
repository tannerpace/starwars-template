import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  inputContainer: {
    display: "flex",
    flexDirection: "column",
  },
  formHelperText: {
    left: "50%",
    top: "50%",
    position: "absolute",
    marginLeft: 0,
  },
  textField: {
    marginBottom: theme.spacing(1.5),
  },
  forgotPassword: {
    color: "#898989",
    borderBottom: "0.5px solid white",
    "&:hover": {
      cursor: "pointer",
      borderBottom: "0.5px solid #898989",
    },
  },
  notAdmin: {
    color: "#898989",
    fontSize: "1.2rem",
    lineHeight: "1.66",
    display: "flex",
    justifyContent: "flex-end",
    marginTop: theme.spacing(2),
    "&:hover": {
      cursor: "pointer",
      borderBottom: "0.5px solid #898989",
    },
  },
  buttonRoot: {
    fontWeight: 500,
    textTransform: "uppercase",
    fontSize: "1.2rem",
    minHeight: 45,
  },
  orContainer: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(3, 0),
    backgroundImage: `linear-gradient(to right, ${theme.palette.divider} 30%, ${theme.palette.divider} 0%)`,
    backgroundPosition: "center",
    backgroundSize: "10px 1px",
    backgroundRepeat: "repeat-x",
    "& p": {
      display: "inline-block",
      padding: theme.spacing(0, 1),
      width: "auto",
      fontSize: "1rem",
      fontFamily: ["Roboto Mono", "monospace"].join(","),
      textAlign: "center",
      backgroundColor: "#fff",
    },
  },
  googleButton: {
    backgroundColor: "#4285F4",
    fontSize: "1.2rem",
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: 500,
    minHeight: 42,
    "&:hover": {
      backgroundColor: "#3164b9",
    },
  },
  signupButton: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));

export default styles;
