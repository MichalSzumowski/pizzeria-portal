import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDateTimePicker,
} from '@material-ui/pickers';

const demoAvailability = [
  {
    hour: '16:00',
    tables: [
      { id: '1', status: 'booked' },
      { id: '2', status: 'booked' },
      { id: '3', status: 'event' },
      { id: '4', status: 'event' },
      { id: '5', status: 'null' },
      { id: '6', status: 'null' },
    ],
  },
  {
    hour: '16:30',
    tables: [
      { id: '1', status: 'null' },
      { id: '2', status: 'null' },
      { id: '3', status: 'event' },
      { id: '4', status: 'event' },
      { id: '5', status: 'null' },
      { id: '6', status: 'null' },
    ],
  },
  {
    hour: '17:00',
    tables: [
      { id: '1', status: 'booked' },
      { id: '2', status: 'booked' },
      { id: '3', status: 'event' },
      { id: '4', status: 'event' },
      { id: '5', status: 'null' },
      { id: '6', status: 'booked' },
    ],
  },
  {
    hour: '17:30',
    tables: [
      { id: '1', status: 'booked' },
      { id: '2', status: 'booked' },
      { id: '3', status: 'event' },
      { id: '4', status: 'event' },
      { id: '5', status: 'null' },
      { id: '6', status: 'booked' },
    ],
  },
  {
    hour: '18:00',
    tables: [
      { id: '1', status: 'event' },
      { id: '2', status: 'booked' },
      { id: '3', status: 'event' },
      { id: '4', status: 'event' },
      { id: '5', status: 'null' },
      { id: '6', status: 'booked' },
    ],
  },
];

const renderActions = (status) => {
  switch (status) {
    case 'null':
      return (
        <Button
          color={'secondary'}
          component={Link}
          to={`${process.env.PUBLIC_URL}/tables/booking/new`}
        >
          Booking possible
        </Button>
      );
    case 'booked':
      return (
        <Button
          className={styles.booked}
          component={Link}
          to={`${process.env.PUBLIC_URL}/tables/booking/123`}
        >
          Booked
        </Button>
      );
    case 'event':
      return (
        <Button
          component={Link}
          to={`${process.env.PUBLIC_URL}/tables/events/abc`}
        >
          Event
        </Button>
      );
    default:
      return null;
  }
};

const Tables = () => {
  const [selectedDate, setSelectedDate] = React.useState(new Date(Date.now()));
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Container className={styles.component} component="main" maxWidth="lg">
      <Paper className={styles.component} elevation={9}>
        <Grid container justify="space-around">
          <Button
            component={Link}
            to={`${process.env.PUBLIC_URL}/tables/booking/new`}
          >
          New reservation
          </Button>
          <Button
            component={Link}
            to={`${process.env.PUBLIC_URL}/tables/events/new`}
          >
          New event
          </Button>
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
        <Table>
          <TableHead>
            <TableRow container justify="space-around">
              <TableCell>Hour</TableCell>
              <TableCell>Table 1</TableCell>
              <TableCell>Table 2</TableCell>
              <TableCell>Table 3</TableCell>
              <TableCell>Table 4</TableCell>
              <TableCell>Table 5</TableCell>
              <TableCell>Table 6</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {demoAvailability.map((row) => (
              <TableRow key={row.hour}>
                <TableCell component="th" scope="row">
                  {row.hour}
                </TableCell>
                {row.tables.map((table) => (
                  <TableCell key={row.table} component="th" scope="row">
                    {renderActions(table.status)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

export default Tables; 