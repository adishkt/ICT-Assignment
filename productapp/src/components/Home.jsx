import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
    var[doc,setDoc]=useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            console.log(res);
            setDoc(res.data)

        })
        .catch((error)=>{
            console.log(error);
        })
    },[])
  return (
    <div style={{marginLeft:'2%' ,marginTop:"2%",marginBottom:'2%',marginRight:'2%'}}>
        <Grid container spacing={2}>
            {doc.map((val,i)=>{
                return (
                    <Grid item xs={12} md={3}>
                        <Card sx={{ maxWidth: 390 }}>
                                <CardMedia
                                    sx={{ height: 240 }}
                                    image={val.image}   
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    {val.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    price:{val.price} <br />
                                    category:{val.category}
                                    </Typography>
                                
                                </CardContent>
                                <CardActions>
                                    <Button size="small" >Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                                
                            </Card>
                    </Grid>
                )
            })}

        </Grid>
    </div>
  )
}

export default Home