import React, { useState } from 'react';
import { Grid, Button, TextField, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    button: {
        marginLeft: theme.spacing(4)
    },
}));

export default function Form({ onClick }) {
    const classes = useStyles()
    const [userName, setUserName] = useState("")

    const onChange = (e) => {
        setUserName(e.target.value)
    }

    return <Grid container item justify="center">
        <TextField id="userName" label="GitHub UserName" onChange={onChange} />
        <Button color="primary" variant="contained" onClick={() => onClick(userName)} className={classes.button}>Fetch</Button>
    </Grid >
}