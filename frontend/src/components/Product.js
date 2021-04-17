import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import "../Product.css";

export default function Product(props) {
  return (
    <Link className="link" to={"/products/" + props.id}>
      <Card raised={false} elevation={0} className="card">
        <CardActionArea>
          <CardMedia
            className="product_image"
            component="img"
            src={props.image}
          ></CardMedia>
          <CardContent>
            <Typography variant="h5">{props.name}</Typography>
            <Typography color="textSecondary">{props.price}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
