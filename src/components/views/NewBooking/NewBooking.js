import React from 'react';
import styles from './NewBooking.module.scss';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import EventAvailableSharpIcon from '@material-ui/icons/EventAvailableSharp';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDateTimePicker,
} from '@material-ui/pickers';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

const NewBooking = () => {
  const [selectedDate, setSelectedDate] = React.useState(new Date(Date.now()));
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Container className={styles.component} component="main" maxWidth="lg">
      <Paper className={styles.component} elevation={9}>
        <Grid container justify="center" spacing={1}>
          <Grid item>
            <Avatar className={styles.avatar}>
              <EventAvailableSharpIcon />
            </Avatar>
          </Grid>
          <Grid item>
            <Typography component="h1" variant="h5">
              New Booking
            </Typography>
          </Grid>
        </Grid>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="center">
            <KeyboardDateTimePicker
              margin="normal"
              id="date-time-picker"
              label="Date and Time picker"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change time',
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
        <form className={styles.form} noValidate>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={2}>
              <FormControl id="table" variant="outlined" margin="normal" fullWidth>
                <InputLabel id="table" variant="outlined" mediumWidth>
                  People
                </InputLabel>
                <Select labelId="table">
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <FormControl id="table" variant="outlined" margin="normal" fullWidth>
                <InputLabel id="table" variant="outlined">
                  Table
                </InputLabel>
                <Select labelId="table">
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Box mt={3}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={styles.submit}
              style={{ textDecoration: 'none' }}
              component={Link}
              to={`${process.env.PUBLIC_URL}/`}
            >
              Book now
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default NewBooking; 