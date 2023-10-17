import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from "./Navbar";
import axios from 'axios';
import { Link } from 'react-router-dom';

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Album() {
  const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
      const asyncFn = async () => {
        await axios.get('http://18.170.1.155:8081/products')
        .then((res) => {
            setProducts(res.data)
        })
      };

      asyncFn();
    }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      {/* <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Navbar/>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Our Products
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Empowering Your Digital Life: Find Your Perfect Gadgets
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {products.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?electronics"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      { product.brand }
                    </Typography>
                    <Typography>
                      { product.model }
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to = { '/product/' + product.id } ><Button size="small" startIcon={<RemoveRedEyeIcon />}>View</Button></Link>
                    <Link onClick={ () => {
                      axios.get('http://18.170.1.155:8081/products/delete/' + product.id, { mode: 'cors' })
                      .then((res) => {
                        if(res.status === 200) {
                          window.location.href = "/";
                        }
                      })
                    } }><Button size="small" startIcon={<DeleteIcon />}>Delete</Button></Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
