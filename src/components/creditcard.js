import { Grid,Paper, Typography,Button } from '@mui/material';
import { textAlign } from '@mui/system';
import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { useNavigate } from 'react-router-dom';
import Header from '../shared/Header';
import './creditcard.css'
export default function Creditcard() {
    const [number, setNumber] = React.useState('')
    const [name, setName] = React.useState('')
    const [expiry, setExpiry] = React.useState('')
    const [cvc, setCvc] = React.useState('')
    const [focus, setFocus] = React.useState('')
    const navigate=useNavigate();
    return (
        <Grid align="center">
            <Header/>
            <Paper elevation={10} style={{width:'550px',marginTop:'40px',marginLeft:'20px'}}>
                <Typography variant="h6" textAlign='center'gutterBottom style={{fontSize:'25px'}}>
                    Enter your details
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={5}>
                        <Cards
                            number={number}
                            name={name}
                            expiry={expiry}
                            cvc={cvc}
                            focused={focus}
                            
                        />
                    </Grid>
                    <Grid item xs={5}>
                        <form>
                            <input type='tel'
                                placeholder='Card Number'
                                name='number'
                                value={number}
                                onChange={e => setNumber(e.target.value)}
                                onFocus={e => setFocus(e.target.name)} />

                            <input type='text'
                                placeholder='Your name here'
                                name='name'
                                value={name}
                                onChange={e => setName(e.target.value)}
                                onFocus={e => setFocus(e.target.name)} />

                            <input type='text'
                                placeholder='MM/YY Expiry'
                                name='expiry'
                                value={expiry}
                                onChange={e => setExpiry(e.target.value)}
                                onFocus={e => setFocus(e.target.name)} />

                            <input type='tel'
                                placeholder='CVC'
                                name='cvc'
                                value={cvc}
                                onChange={e => setCvc(e.target.value)}
                                onFocus={e => setFocus(e.target.name)} />
                        </form>
                    </Grid>
                </Grid>
                <Button variant="contained" onClick={() => navigate('/review2')} style={{backgroundColor:'#0a430a',marginTop:'20px',marginBottom:'10px'}}>Proceed to checkout</Button>
            </Paper>
        </Grid>

    );
}