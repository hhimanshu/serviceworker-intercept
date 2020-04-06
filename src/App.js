import React, { useState } from 'react';
import UserTable from './UserTable'
import { Grid, makeStyles } from '@material-ui/core';
import Form from './Form';

const useStyles = makeStyles(theme => ({
  form: {
    paddingTop: theme.spacing(4)
  },
  table: {
    marginTop: theme.spacing(6),
  }
}));

function App() {
  const classes = useStyles()
  const [user, setUser] = useState({})

  const getUserData = (userName) => {
    console.log("fetching data")
    fetch(`https://api.github.com/users/${userName}`)
      .then(res => res.json())
      .then(user => setUser(user))
  }

  return (
    <div className="App">
      <Grid container justify="center">
        <Grid item xs={12} className={classes.form}>
          <Form onClick={getUserData} />
        </Grid>
        <Grid item xs={12} className={classes.table}>
          <UserTable user={user} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
