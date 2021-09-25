import { makeStyles } from "@material-ui/core/styles"

const styles = makeStyles((theme) => ({
  buttonRoot: {
    fontWeight: 500,
    textTransform: "uppercase",
    fontSize: "1.2rem",
    minHeight: 45,
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(3),
  },
}))

export default styles
