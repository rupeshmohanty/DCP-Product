import axios from "axios";
import { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const TempProductForm = (props) => {
    const [data, setData] = useState({
        "productCode": "",
        "productDescription": "",
        "price": ""
    })

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct(data);
    }

    const addProduct = (data) => {
        axios.post('http://18.132.190.180:8081/products/create', data, { mode: 'cors' })
        .then((res) => console.log(res))
    }

    return(
        <Card sx={{ minWidth: 400, marginTop: '50px', paddingRight: '10px' }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ ml: '7px' }}>
                    Add product
                </Typography>
                <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">Product Name</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        label="productName"
                        placeholder="Product Name"
                        name = "productCode"
                        value = {data.productCode}
                        onChange={handleChange}
                    />
                </FormControl>
                <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                sx = {{ ml: '7px' }}
                placeholder="Please provide some details about the product..."
                fullWidth
                name = "productDescription" 
                value = {data.productDescription} 
                onChange={handleChange}
                />
                <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">Product Price</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        label="prirce"
                        placeholder="Product Price"
                        name = "price"
                        value = {data.price}
                        onChange={handleChange}
                    />
                </FormControl>

                <Button variant="contained" sx={{ ml: '7px' }}>
                    Submit
                </Button>
            </CardContent>
        </Card>
    )
}

export default TempProductForm;