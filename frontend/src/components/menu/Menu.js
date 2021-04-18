import {
  Grid,
  Typography,
  makeStyles,
  useTheme,
  IconButton,
  Badge,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const useStyles = makeStyles({
  root: (theme) => ({
    height: "7vh",
    backgroundColor: theme.palette.primary.main,
  }),
  navItem: {
    padding: "10px",
  },
  container: {
    flexGrow: 1,
  },
});

export const Menu = (props) => {
  const classes = useStyles(useTheme());

  return (
    <Grid container className={classes.root} color="secondary">
      <Grid container justify="center" alignItems="center" item xs={1}></Grid>
      <Grid container justify="center" alignItems="center" item xs={10}>
        <Link to="/">
          <Typography
            variant="subtitle1"
            color="secondary"
            className={classes.navItem}
          >
            Home
          </Typography>
        </Link>
        <Link to="/about">
          <Typography
            variant="subtitle1"
            color="secondary"
            className="nav-item"
          >
            About
          </Typography>
        </Link>
      </Grid>
      <Grid container justify="center" item xs={1}>
        <IconButton color="secondary" onClick={props.openDrawer}>
          <Badge badgeContent={props.itemsAmount}>
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Grid>
    </Grid>
  );
};
