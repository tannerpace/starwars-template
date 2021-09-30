import { Button } from "@material-ui/core";
import classnames from "clsx";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./styles";

const ButtonRounded = ({ className = "", children, ...props }) => {
  const classes = useStyles();

  return (
    <Button className={classnames(classes.rounded, className)} {...props}>
      {children}
    </Button>
  );
};

ButtonRounded.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default ButtonRounded;
