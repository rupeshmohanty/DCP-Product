import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';

const ProductDetails = () => {
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

  return (
    <Card variant="outlined" sx={{ minWidth: 400, marginTop: '50px' }}>
      <CardContent>
        <Typography sx={{ fontSize: 20, textAlign: 'center' }} color="text.primary" gutterBottom>
          Product Details
        </Typography><br/>
        <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
          Brand Name : { data.brand }
        </Typography>
        <Typography sx = {{fontSize: 16}} variant="body2">
          Model : { data.model }
        </Typography><br/>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
                <TableRow
                  key={data.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Screensize
                  </TableCell>
                  <TableCell align="right">{data.screen_size}</TableCell>
                </TableRow>

                <TableRow
                  key={data.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Resolution
                  </TableCell>
                  <TableCell align="right">{ data.resolution }</TableCell>
                </TableRow>

                <TableRow
                  key={data.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Processor
                  </TableCell>
                  <TableCell align="right">{data.processor}</TableCell>
                </TableRow>

                <TableRow
                  key={data.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Network Technology
                  </TableCell>
                  <TableCell align="right">{data.network_technology}</TableCell>
                </TableRow>

                <TableRow
                  key={data.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Dimensions
                  </TableCell>
                  <TableCell align="right">{data.dimensions}</TableCell>
                </TableRow>

                <TableRow
                  key={data.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Bluetooth version
                  </TableCell>
                  <TableCell align="right">{data.bluetooth_version}</TableCell>
                </TableRow>

                <TableRow
                  key={data.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    USB Type
                  </TableCell>
                  <TableCell align="right">{data.usb_type}</TableCell>
                </TableRow>

                <TableRow
                  key={data.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Display type
                  </TableCell>
                  <TableCell align="right">{data.display_type}</TableCell>
                </TableRow>

                <TableRow
                  key={data.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Sim card type
                  </TableCell>
                  <TableCell align="right">{data.sim_card_type}</TableCell>
                </TableRow>

                <TableRow
                  key={data.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Price
                  </TableCell>
                  <TableCell align="right">{data.price}</TableCell>
                </TableRow>

            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
      <CardActions sx={{ marginLeft: '45%' }}>
      <Link to = { '/edit/' + productId.id } ><Button variant="outlined" startIcon={<EditIcon />} size="small">Edit</Button></Link>
      </CardActions>
    </Card>
  );
}

export default ProductDetails;