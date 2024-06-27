/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Single = () => {

  const[allData,setAllData]=useState([])
  const params = useParams()

  

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => setAllData(data) );
  },[]);
  


  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={allData.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {allData.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {allData.description}
        </Typography>
        
        <span>Price:${allData.price}</span>
        <br/>
        <span>Rating:{allData.rating && allData.rating.rate}⭐</span>

      </CardContent>
      <CardActions>
        <Button variant='contained' size="small">Add to Cart</Button>
      </CardActions>
    </Card> 
    </>
  )
}

export default Single
