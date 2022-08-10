import * as React from 'react';
import {FormControl,InputLabel,Select,MenuItem, Button,FormControlLabel,Radio,RadioGroup,FormLabel} from '@mui/material';
import { useNavigate } from 'react-router-dom';



export default function AddressForm() {
  const [address, setAddress] = React.useState('');
  const handleChange = (event) => {
    setAddress(event.target.value);
  };
  
  const navigate=useNavigate();
  return (
    <React.Fragment>

     {/* <FormControl id="address" fullWidth style={{marginTop:'10px'}}>
        <InputLabel>Select Address</InputLabel>
        <Select 
          labelId="address"
          value={address}
          name="address"
          label="Select Address"
          onChange={handleChange}
        >
          
          <MenuItem value={"Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016"}>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</MenuItem>
          <MenuItem value={"2553, Mahavir Market, Sadar Bazar,Delhi"}>2553, Mahavir Market, Sadar Bazar,Delhi</MenuItem>
          <MenuItem value={"G-33 Mgl House, Bandra Kurla Complex, Bandra (east),Mumbai"}>G-33 Mgl House, Bandra Kurla Complex, Bandra (east),Mumbai</MenuItem>
        </Select>
        <small id='address_error'></small>
  </FormControl>*/}
  <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Select Address</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="G-33 Mgl House, Bandra Kurla Complex, Bandra (east),Mumbai"
        name="radio-buttons-group"
      >
        <FormControlLabel value="Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016" control={<Radio />} label="Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016" />
        <FormControlLabel value="2553, Mahavir Market, Sadar Bazar,Delhi" control={<Radio />} label="553, Mahavir Market, Sadar Bazar,Delhi" />
        <FormControlLabel value="G-33 Mgl House, Bandra Kurla Complex, Bandra (east),Mumbai" control={<Radio />} label="G-33 Mgl House, Bandra Kurla Complex, Bandra (east),Mumbai" />
      </RadioGroup>
</FormControl>
      
      <Button variant="text" onClick={() => navigate('/checkout')}>Add new address</Button>
    </React.Fragment>
  );
}
