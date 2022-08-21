import * as React from 'react';
import Typography from '@mui/material/Typography';
import { FormControlLabel, Radio ,FormControl,FormLabel,RadioGroup,Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function PaymentForm() {
  const [value, setValue] = React.useState('');
  const [buttonText, setButtonText] = React.useState('');
  const handleRadioChange = (event) => {
    setValue(event.target.value);
    if(event.target.value==="Payment by card")
    {
      setButtonText('+ Add card')
      console.log("Add card");
    }
    else
    {
      setButtonText('')
    }

  };
  const navigate=useNavigate();
  return (
    <React.Fragment>
      <form >
        <FormControl sx={{ m: 1 }} variant="standard">
          <FormLabel id="demo-error-radios">Payment Method</FormLabel>
          <RadioGroup
            aria-labelledby="demo-error-radios"
            name="quiz"
            value={value}
            onChange={handleRadioChange}
          >
            <FormControlLabel value="Cash on Delivery" control={<Radio />} label="Cash on Delivery" />
            <FormControlLabel value="Payment by card" control={<Radio />} label="Payment by card" />
            <Button variant="text" onClick={() => navigate('/creditcard')} >{buttonText}</Button>
          </RadioGroup>
        </FormControl>
      </form>
    </React.Fragment>
  );
}