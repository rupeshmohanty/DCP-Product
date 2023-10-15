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
              id="brand"
              label="Brand"
              name="brand"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              multiline
              label="Model"
              name="model"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              type='number'
              name="number_of_colors"
              label="Number of colors"
              id="number_of_colors"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              type='number'
              id="screen_size"
              label="Screen size"
              name="screen_size"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              multiline
              label="Resolution"
              name="resolution"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="processor"
              label="Processor"
              id="processor"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              type='number'
              id="ram_in_GBs"
              label="RAM"
              name="ram_in_GBs"
              autoFocus
            />
            <TextField
              margin='normal'
              required
              fullWidth
              multiline
              type='number'
              label="Storage"
              name="storage_in_GBs"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              type='number'
              name="battery_capacity"
              label="Battery Capacity"
              id="battery_capacity"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              type='number'
              id="camera_resolution"
              label="Camera Resolution"
              name="camera_resolution"
              autoFocus
            />
            <TextField
              margin='normal'
              required
              fullWidth
              multiline
              type='number'
              label="Front Camera Resolution"
              name="front_camera_resolution"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              type='number'
              name="operating_system_version"
              label="Operating System version"
              id="operating_system_version"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="network_technology"
              label="Network Technology"
              name="network_technology"
              autoFocus
            />
            <TextField
              margin='normal'
              required
              fullWidth
              multiline
              type='number'
              label="Release date"
              name="release_date"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              type='number'
              name="weight"
              label="Weight"
              id="weight"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="dimensions"
              label="Dimensions"
              name="dimensions"
              autoFocus
            />
            <TextField
              margin='normal'
              required
              fullWidth
              multiline
              label="Bluetooth Version"
              name="bluetooth_version"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="usb_type"
              label="USB Type"
              id="usb_type"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="sensors"
              label="Sensors"
              name="sensors"
              autoFocus
            />
            <TextField
              margin='normal'
              required
              fullWidth
              multiline
              label="Sim Card Type"
              name="sim_card_type"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="display_type"
              label="Displaye Type"
              id="display_type"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              type='number'
              id="price"
              label="Price"
              name="price"
              autoFocus
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