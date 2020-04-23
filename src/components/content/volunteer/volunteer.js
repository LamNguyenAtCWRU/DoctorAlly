import React, { useState, useContext } from 'react';
import localeContext, { getText } from '../../context/localeCtx';
import { useHistory } from 'react-router-dom';
import { Button, Container, Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
  },
  h2: {
    marginTop: 50
  },
  container: {
    '& > *': {
      margin: theme.spacing(1),
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    height: '28vh',
    width: '100%',
    marginTop: '10px',
    padding: 10,
  },
  p: {
    fontSize: 20,
    marginBottom: 30,
    alignSelf: 'center',
    fontStyle: 'italic',
  },
  button: {
    width: '25ch',
    height: '100px',
    fontSize: 20,
    fontFamily: 'Lexend Giga',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    width: '100ch',
    fontFamily: 'Lexend Giga',
  },
  iconButton: {
    marginLeft: 80,
    padding: 10,
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    width: '100ch',
    "&:hover": {
      cursor: 'pointer'
    }
  },
  grid: {
    display: 'flex',
    justifiedContent: 'center',
    margin: 10
  },
  font: {
    fontFamily: 'Lexend Giga',
  },
}));

const data = [
  {
    id: 1,
    name: "An Nguyen",
    role: "Doctor",
    facility: "Benh vien Hong Ngoc",
    work: ['Shopping', 'Cooking'],
    offers: 1,
  },
  {
    id: 2,
    name: "Binh Nguyen",
    role: "Surgeon",
    facility: "Bach Mai",
    work: ['Shopping'],
    offers: 2,
  },
  {
    id: 3,
    name: "Chris Dev",
    role: "Nurse",
    facility: "Vin Mec",
    work: ['Special chores'],
    offers: 3,
  }
]

const RequestBox = (props) => {
  const { color, id, work, offers } = props;
  const history = useHistory();
  const classes = useStyles();

  const handleBoxClick = () => {
    history.push(`requests/${id}`);
  }

  return (
    <Box onClick={handleBoxClick} className={classes.box} style={{ backgroundColor: props.color }}>
      <Grid container spacing={2} className={classes.grid}>
        <Grid item xs={6}>
          <strong>{props.name}, {props.role} | {props.facility}</strong>
          <div>{props.work.join(", ")}</div>
        </Grid>
        <Grid item xs={6}>{props.offers} offers</Grid>
      </Grid>
    </Box>
  )
}

const Volunteer = () => {
  const history = useHistory();
  const classes = useStyles();
  const locale = useContext(localeContext);
  const moveToSignUp = () => {
    history.push("/volunteer/signup");
  }

  return (
    <>
      <div className={classes.root}>
        <h2 className={classes.h2}> {getText("volunteer", "h2_volunteer", locale.lang)} </h2>
        <Container className={classes.container}>
          <p className={classes.p}>
            {getText("volunteer", "p", locale.lang)}
          </p>
          <Button onClick={moveToSignUp} color="primary" variant="contained" className={classes.button}> {getText("volunteer", "button", locale.lang)}</Button>
        </Container>
      </div>
      <div className={classes.root}>
        <h2 className={classes.h2}>{getText("volunteer", "h2_request", locale.lang)}</h2>
        <div style={{ display: 'flex' }}>
          <IconButton type="submit" className={classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            style={{ alignSelf: 'center' }}
            className={classes.input}
            placeholder={getText("volunteer", "search_bar", locale.lang)}
            inputProps={{ 'aria-label': 'search requests' }}
          />
        </div>
        <div className='requests-container'>
          {
            data.map((box, id) => {
              if (id % 2 === 0) {
                return (
                  <RequestBox
                    color='#f2f2f2'
                    id={data[id].id}
                    name={data[id].name}
                    role={data[id].role}
                    facility={data[id].facility}
                    work={data[id].work}
                    offers={data[id].offers}
                  />
                )
              } else {
                return (
                  <RequestBox
                    color='#ffffff'
                    id={data[id].id}
                    name={data[id].name}
                    role={data[id].role}
                    facility={data[id].facility}
                    work={data[id].work}
                    offers={data[id].offers}
                  />
                )
              }
            })
          }

        </div>
      </div>
    </>
  )
}

export default Volunteer
