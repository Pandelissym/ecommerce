import {
  Card,
  CardActionArea,
  Typography,
  CardMedia,
  makeStyles,
  CardContent,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import "../css/Product.css";

const useStyles = makeStyles({
  productImage: {
    maxWidth: "100%",
    height: "auto",
  },
  cardContent: {
    textAlign: "left",
    padding: "8px 5px 5px 5px",
  },
});

export default function Product(props) {
  const classes = useStyles();

  return (
    <Link to={"/products/" + props.id}>
      <Card raised={false} elevation={0}>
        <CardActionArea>
          <CardMedia>
            <img
              className={classes.productImage}
              src={props.image}
              alt=""
            ></img>
          </CardMedia>
          <CardContent className={classes.cardContent}>
            <Typography>{props.name}</Typography>
            <Typography>{props.price}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
