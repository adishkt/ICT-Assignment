import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Add = () => {
    var [data,setData]=useState({ProductName:"",Price:"",Category:"",image:""})
    const inputHandler = (e) => {
      if (e.target.name === 'image') {
        const file = e.target.files[0]; // Get the file object
        if (file) {
          const imageUrl = URL.createObjectURL(file);
          setData({ ...data, image: imageUrl }); 
        }
      } else {
        setData({ ...data, [e.target.name]: e.target.value });
      }
    
    }
    console.log(data);
  return (
    <div style={{marginTop:'10%'}}>
        <Grid container spacing={2}>
            <Grid item xs={12} md={4}></Grid>
            <Grid item xs={12} md={4}>
                    <TextField fullWidth label='Product Name' margin='normal' onChange={inputHandler} name='ProductName' value={data.ProductName}></TextField><br />
                    <TextField fullWidth label='Price' margin='normal' onChange={inputHandler} name='Price' value={data.Price}></TextField><br />
                    <TextField fullWidth label='Category' margin='normal' onChange={inputHandler} name='Category' value={data.Category}></TextField><br /><br />
                    <Typography variant='h6'>Select file</Typography>
                    <input type="file" onChange={inputHandler} name='image' /><br /><br />
                    <Button variant='contained' fullWidth>Submit</Button>
            </Grid>
            <Grid item xs={12} md={4}></Grid>

        
       </Grid>
    </div>
  )
}

export default Add