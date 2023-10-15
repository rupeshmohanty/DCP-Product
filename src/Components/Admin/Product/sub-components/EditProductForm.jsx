import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const defaultTheme = createTheme();

const EditProductForm = () => {
    const [data, setData] = React.useState({});

    const productId = useParams();

    React.useEffect(() => {
        axios.get('http://18.170.1.155:8081/products/' + productId.id)
        .then((res) => {
            if(res.status === 200) {
                setData(res.data);
            }
        })
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    console.log(data);

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const editProduct = (e) => {
        e.preventDefault();
        axios.post('http://18.170.1.155:8081/products/update/' + productId.id, data, { headers: { 'Content-Type': 'application/json'} })
        .then((res) => {
            if(res.status === 200) {
                window.location.href = "/";
            }
        })
    }
    return(
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
            <ModeEditIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Edit product
          </Typography>
          <Box component="form" onSubmit={editProduct} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="brand"
              label="Brand"
              name="brand"
              value={data.brand || ''}
              onChange={handleChange}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              multiline
              label="Model"
              name="model"
              value={data.model || ''}
              onChange={handleChange}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              type='number'
              name="number_of_colors"
              label="Number of colors"
              value={data.number_of_colors || ''}
              onChange={handleChange}
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
              value={data.screen_size || ''}
              onChange={handleChange}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              multiline
              label="Resolution"
              name="resolution"
              value={data.resolution || ''}
              onChange={handleChange}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="processor"
              value={data.processor || ''}
              onChange={handleChange}
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
              value={data.ram_in_GBs || ''}
              onChange={handleChange}
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
              value={data.storage_in_GBs || ''}
              onChange={handleChange}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              type='number'
              name="battery_capacity"
              value={data.battery_capacity || ''}
              onChange={handleChange}
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
              value={data.camera_resolution || ''}
              onChange={handleChange}
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
              value={data.front_camera_resolution || ''}
              onChange={handleChange}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              type='number'
              name="operating_system_version"
              value={data.operating_system_version || ''}
              onChange={handleChange}
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
              value={data.network_technology || ''}
              onChange={handleChange}
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
              value={data.release_date || ''}
              onChange={handleChange}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              type='number'
              name="weight"
              value={data.weight || ''}
              onChange={handleChange}
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
              value={data.dimensions || ''}
              onChange={handleChange}
              autoFocus
            />
            <TextField
              margin='normal'
              required
              fullWidth
              multiline
              label="Bluetooth Version"
              name="bluetooth_version"
              value={data.bluetooth_version || ''}
              onChange={handleChange}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="usb_type"
              value={data.usb_type || ''}
              onChange={handleChange}
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
              value={data.sensors || ''}
              onChange={handleChange}
              autoFocus
            />
            <TextField
              margin='normal'
              required
              fullWidth
              multiline
              label="Sim Card Type"
              name="sim_card_type"
              value={data.sim_card_type || ''}
              onChange={handleChange}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="display_type"
              value={data.display_type || ''}
              onChange={handleChange}
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
              value={data.price || ''}
              onChange={handleChange}
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Edit
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    )
}

export default EditProductForm;