import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddTaskIcon from '@mui/icons-material/AddTask';
import axios from 'axios';

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function ProductFormData() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        console.log(formData);
        const data = {};

        for(let entry of formData.entries()) {
            data[entry[0]] = entry[1];
        }

        console.log(data);

        axios.post('http://18.170.1.155:8081/products/create', data, { mode: 'cors' })
            .then((res) => {
                if(res.status === 200) {
                    window.location.href = "/";
                }
            })
    };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="s">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <AddTaskIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add product
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="productCode"
              label="Product Code"
              name="productCode"
              autoFocus
            />
            <TextField
              id="outlined-multiline-flexible"
              required
              fullWidth
              multiline
              rows={4}
              label="Product Description"
              name="productDescription"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="price"
              label="Price"
              id="price"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}