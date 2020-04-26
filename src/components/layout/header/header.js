import React, { useContext } from 'react';
import localeContext, { getText } from "../../context/localeCtx";

import { useHistory } from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { Button, MenuItem, FormControl, Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'flex-end',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  font: {
    fontFamily: 'Merriweather, serif',
    fontSize: "15px",
  },
  fontLogo: {
    fontFamily: 'Yeseva One',
  },
  formControl: {
    marginTop: "15px",
  },
  btn: {
    borderRadius: '100px',
    padding: 10,
  }
}));

const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  const locale = useContext(localeContext);

  const handleRouteSwitch = (path) => {
    history.push("/" + path)
  }

  return (
    <div className={classes.root}>
      <Button
        onClick={() => { handleRouteSwitch("") }}
        className={classes.avatar}
        style={{ backgroundColor: 'white' }}
      >
        {/* <img src="logo.jpg" alt="LOGO" style={{ width: "50px", height: "50px" }} /> */}
        <FavoriteIcon style={{color: 'red'}}/>
        <span style={{ marginLeft: 5, fontSize: "30px" }} className={classes.fontLogo}>DoctorAlly</span>
      </Button>
      <div className={classes.buttonGroup}>
        <Button
          variant = "contained"
          onClick={() => { handleRouteSwitch("volunteer") }}
          color="primary"
          classes={{font: classes.font, btn: classes.btn}}
        >{getText("header", "volunteer", locale.lang)}</Button>

        <Button
          variant = "contained"
          onClick={() => { handleRouteSwitch("request_help/1") }}
          color="secondary"
          classes={{font: classes.font, btn: classes.btn}}
        >{getText("header", "request_help", locale.lang)}</Button>

        <Button
          variant = "contained"
          onClick={() => { handleRouteSwitch("supply_stores") }}
          style={{ color: 'green' }}
          classes={{font: classes.font, btn: classes.btn}}
          style={{backgroundColor: 'green', color: 'white'}}
        >{getText("header", "supply_stores", locale.lang)}</Button>

      </div>
      <FormControl className={classes.formControl}>
        <Select
          value={locale.lang}
          onChange={(e) => { locale.setLang(e.target.value) }}
          className={classes.font}
        >
          <MenuItem value={"ENG"} className={classes.font}>ENG</MenuItem>
          <MenuItem value={"VIE"} className={classes.font}>VIE</MenuItem>
        </Select>
      </FormControl>

    </div>
  )
}

export default Header;
