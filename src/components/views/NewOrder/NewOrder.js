import React from 'react';
// import PropTypes from 'prop-types';
import styles from './NewOrder.module.scss';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import RestaurantIcon from '@material-ui/icons/RestaurantSharp';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';

const demoMenu = [
  { id: '1', name: 'Coffe', option: ['Latte', 'Cappuccino', 'Espresso'] },
  { id: '2', name: 'Cookie', option: ['Vegan', 'Chocolate', 'No sugar'] },
  { id: '3', name: 'Salad', option: ['Tomato', 'Olives', 'Feta'] },
  { id: '4', name: 'Pizza', option: ['Chicken', 'Paprica', 'Mushrooms'] },
];

const NewOrder = () => {
  return (
    <Paper className={styles.component} elevation={9}>
      <Grid container justify="space-between">
        <Grid item xs={1}>
          <Button component={Link} to={`${process.env.PUBLIC_URL}/waiter/order/:id`}>
            <RestaurantIcon />
          </Button>
        </Grid>
        <Grid item xs={11}>
          <Typography className={styles.title} variant="h5" component="h5">
            Place a New Order
          </Typography>
        </Grid>
      </Grid>
      <Grid container justify="space-between" spacing={1}>
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
        <Grid item xs={10}>
          <TextField
            variant="outlined"
            margin="normal"
            id="id"
            label="total"
            name="id"
            autoComplete="id"
          />
        </Grid>
      </Grid>
      <Grid>
        {demoMenu.map((dish) => (
          <Accordion key={dish.id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{dish.name}</Typography>
            </AccordionSummary>
            <AccordionDetails className={styles.accordionDetails}>
              <FormControl size="large" margin="normal" component="fieldset">
                <FormGroup row>
                  {dish.option.map((opt) => (
                    <FormControlLabel
                      key={opt}
                      control={
                        <Checkbox color="primary" value name={dish.name} />
                      }
                      label={opt}
                    />
                  ))}
                </FormGroup>
              </FormControl>
              <FormControl
                size="small"
                margin="normal"
                variant="outlined"
                className={styles.select}
              >
                <InputLabel id="demo-simple-select-outlined-label">
                  +
                </InputLabel>
                <Select>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                </Select>
              </FormControl>
            </AccordionDetails>
          </Accordion>
        ))}
      </Grid>
      <Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          component={Link}
          to={`${process.env.PUBLIC_URL}/waiter`}
        >
          Add order
        </Button>
      </Grid>
    </Paper>
  );
};

export default NewOrder; 