import * as React from 'react';
import { Typography, Paper, Button, Modal, Box } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import Header from '../shared/Header';
const products = [
    {
        name: 'Cherry',
        Quantity: '1box-200gm',
        price: 'Rs.200',
    },


    { name: 'Shipping', desc: '', price: 'Rs.100' },
];

const addresses = ['Akshya Nagar', '1st Block 1st Cross', 'Rammurthy nagar', 'Bangalore-560016'];
const payments = [
    { name: 'Cash on Delivery', Total: 'Rs.600' }
];
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
export default function Reviewpaymentbycard() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navigate = useNavigate();
    return (
        <Grid>
            <Header />
            <Paper elevation={10} style={{ width: '510px', marginTop: '40px', marginLeft: '530px' }}>
                <Typography variant="h6" gutterBottom style={{ marginLeft: '10px', fontSize: '30px' }}>
                    Order summary
                </Typography>

                <List disablePadding>
                    {products.map((product) => (
                        <ListItem key={product.name} sx={{ py: 1, px: 0, marginLeft: '15px' }}>
                            <ListItemText primary={product.name} secondary={product.Quantity} />
                            <Typography variant="body2" style={{ marginRight: '50px' }}>{product.price}</Typography>
                        </ListItem>
                    ))}

                    <ListItem sx={{ py: 1, px: 0, marginLeft: '15px' }}>
                        <ListItemText primary="Total" />
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, marginRight: '50px' }}>
                            Rs.600
                        </Typography>
                    </ListItem>
                </List>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom sx={{ mt: 2, marginLeft: '10px' }}>
                            Shipping
                        </Typography>
                        <Typography gutterBottom style={{ marginLeft: '10px' }}>Nancy Tindwani</Typography>
                        <Typography gutterBottom style={{ marginLeft: '10px' }}>{addresses.join(', ')}</Typography>
                    </Grid>
                    <Grid item container direction="column" xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom sx={{ mt: 2, marginLeft: '70px' }}>
                            Payment details
                        </Typography>
                        <Grid container style={{ marginLeft: '70px' }}>
                            {payments.map((payment) => (
                                <React.Fragment key={payment.name}>
                                    <Grid item xs={6}>
                                        <Typography gutterBottom>{payment.name}</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography gutterBottom>{payment.Total}</Typography>
                                    </Grid>
                                </React.Fragment>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" onClick={handleOpen} style={{ maxWidth: '190px', maxHeight: '30px', minWidth: '190px', minHeight: '30px', marginTop: '10px', marginLeft: '10px', backgroundColor: 'rgb(62 114 62)', marginBottom: '10px' }}>
                        Place your order
                    </Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Order placed!!
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Your order number is #2001539. We have emailed your order
                                confirmation, and will send you an update when your order has
                                shipped.
                            </Typography>
                            <Button variant="contained" onClick={() => navigate('/')} style={{ maxWidth: '150px', maxHeight: '30px', minWidth: '150px', minHeight: '30px', marginTop: '10px', marginRight: '0px', backgroundColor: 'rgb(62 114 62)' }}>
                                Buy More
                            </Button>
                        </Box>
                    </Modal>
                </Grid>
            </Paper>
        </Grid>


    );
}