import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// Icons
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const ProductViewComponent = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://18.132.190.180:8081/products')
        .then((res) => {
            setProducts(res.data)
        })
    }, [])

    console.log(products);

    return(
        <>
            <div className="row">
                { products.map((product) => {
                    const id = product.id;
                    var editLink = '/edit/' + id;
                    return(
                        <div className="col-md-4" id = { product.id } style={{ marginTop: '10px' }}>
                            <Card sx={{ maxWidth: 345 }}>
                            {/* <CardMedia
                                sx={{ height: 140 }}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="green iguana"
                            /> */}
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Link to = '/edit/'><Button size="small" startIcon={<EditIcon/>}>Edit</Button></Link>
                                <Link onClick={ () => axios.get('http://18.132.190.180:8081/products/delete/' + 1).then(() => console.log("Product deleted")) }><Button size="small" startIcon={<DeleteIcon />}>Delete</Button></Link>
                            </CardActions>
                            </Card>
                        </div>    
                    )
                }) }
            </div>
        </>
    )
}

export default ProductViewComponent;