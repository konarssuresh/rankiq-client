import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
// services
import { saveExamData } from '../ducks/examInfo';

function DashBoard() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [category, setCategory] = useState('');
  const [reservation, setReservation] = useState('');
  const [zone, setZone] = useState('');

  const onSubmit = (data) => {
    console.info('data ', data);
  };

  const handleSaveData = (data) => {
    console.info(dispatch(saveExamData(data)));
  };

  const handleReset = () => {
    setCategory('');
    setReservation('');
    setZone('');
    reset();
  };

  return (
    <div>
      {/* <div style={{ paddingTop: '5rem' }}>
        <Button
          type="button"
          onClick={() => {
            handleSaveData({
              url: 'https://dc4-g22.digialm.com//per/g22/pub/32341/touchstone/AssessmentQPHTMLMode1//32341O2230/32341O2230S24D23621/16628815322939738/124194210189066_32341O2230S24D23621E1.html',
            });
          }}
        >
          Click for Checking Result
        </Button>
      </div> */}
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 4, md: 12 }}
      >
        <Grid item xs={4} sm={6} md={6}>
          <Card
            sx={{
              padding: { xs: '2rem 1rem', sm: '2rem' },
              mt: '1rem',
              mb: { xs: '1rem', sm: '3rem' },
            }}
          />
        </Grid>
        <Grid item xs={4} sm={6} md={6}>
          <Card
            sx={{
              padding: { xs: '2rem 1rem', sm: '2rem' },
              mt: '1rem',
              mb: { xs: '1rem', sm: '3rem' },
            }}
          >
            <Grid item sx={{ mb: 2 }} xs={12}>
              <Typography variant="h4" textAlign="center">
                RRC Group D
              </Typography>
            </Grid>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    id="examUrl"
                    name="Answersheet Url"
                    label="Answersheet Url"
                    defaultValue=""
                    fullWidth
                    {...register('examUrl', {
                      required: 'Please enter a valid response key url',
                    })}
                    helperText="Enter your response key URL here"
                    error={Boolean(errors.examUrl)}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.examUrl?.message}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    select
                    id="category-dropdown"
                    name="category"
                    label="Select category"
                    fullWidth
                    value={category}
                    defaultValue=""
                    {...register('category', {
                      onChange: (event) => {
                        setCategory(event.target.value);
                      },
                      required: 'Please select category',
                    })}
                    error={Boolean(errors.category)}
                  >
                    <MenuItem value="open">Open</MenuItem>
                    <MenuItem value="obc">OBC</MenuItem>
                    <MenuItem value="ews">EWS</MenuItem>
                  </TextField>
                  <Typography variant="inherit" color="textSecondary">
                    {errors.category?.message}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    select
                    id="reservation-dropdown"
                    name="reservation"
                    label="Select reservation"
                    fullWidth
                    value={reservation}
                    defaultValue=""
                    onChange={(e) => console.log(e.target.value)}
                    {...register('reservation', {
                      onChange: (event) => {
                        setReservation(event.target.value);
                      },
                      required: 'Please select reservation',
                    })}
                    error={Boolean(errors.reservation)}
                  >
                    <MenuItem value="open">Open</MenuItem>
                    <MenuItem value="obc">OBC</MenuItem>
                    <MenuItem value="ews">EWS</MenuItem>
                  </TextField>
                  <Typography variant="inherit" color="textSecondary">
                    {errors.reservation?.message}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    select
                    id="zone-dropdown"
                    name="Zone"
                    label="Select zone"
                    fullWidth
                    value={zone}
                    defaultValue=""
                    {...register('zone', {
                      onChange: (event) => {
                        setZone(event.target.value);
                      },
                      required: 'Please select Zone',
                    })}
                    error={Boolean(errors.zone)}
                  >
                    <MenuItem value="open">East</MenuItem>
                    <MenuItem value="obc">West</MenuItem>
                    <MenuItem value="ews">North</MenuItem>
                    <MenuItem value="ews">South</MenuItem>
                  </TextField>
                  <Typography variant="inherit" color="textSecondary">
                    {errors.zone?.message}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    size="large"
                    variant="contained"
                    fullWidth
                    onClick={handleSubmit(onSubmit)}
                  >
                    Submit
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    size="large"
                    variant="outlined"
                    onClick={handleReset}
                    fullWidth
                  >
                    Reset
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default DashBoard;
