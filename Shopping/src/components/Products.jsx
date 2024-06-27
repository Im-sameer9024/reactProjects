
/* eslint-disable react/prop-types */
// import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch} from "react-redux";
import { addToCart } from "../features/cartSlice";


export default function Products({data}) {

  
    const dispatch = useDispatch();


  return (
    <div style={{display : "flex", flexWrap: "wrap", gap:"45px",margin:"5px" ,justifyContent:"center",}} >
    {data.map((e)=>
    <Card key={e.id} sx={{ maxWidth: 245 }}>
      <CardActionArea>
        <Link to={`/single/${e.id}`}>
        <CardMedia
          component="img"
          height="340"
          image={e.image}
          alt="green iguana"
        />
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {e.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {e.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={()=>{dispatch(addToCart(e))}} variant='contained' size="small" color="primary">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  )}
    </div>
)
}
