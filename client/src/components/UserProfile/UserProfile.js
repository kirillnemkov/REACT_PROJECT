import styles from './userProfile.module.css';
import { Route, Switch, Link, useHistory } from 'react-router-dom';
import { Paper, Tabs, Tab } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import Diagram from '../Daigram/Diagram'
import SocialLinks from '../SocialLinks/SocialLinks';
import About from '../About/About';
import UserMainInfo from '../UserMainInfo/UserMainInfo';
import { useState } from 'react';
// import { useEffect, useState } from 'react';
const useStyles = makeStyles((theme) => ({
    button: {
        marginLeft: '8px',
        '& .MuiButton-label': {
            justifyContent: 'end'
        },
    },
    root: {
        marginTop: '5%',
        marginBottom: '3%',
        boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 3px 0px -2px rgb(0 0 0 / 12%)'
    }
}));


const UserProfile = () => {
    const classes = useStyles();
    const [value, setValue] = useState('');
    let history = useHistory();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function handleClick(e, value) {
        history.push(value);
      }

    return (
        <div className={styles.userProfile_container}>

            <UserMainInfo />
            <Paper className={classes.root}>
                <Tabs
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                    value={value}
                    onChange={handleClick}
                >
                    <Tab label="О себе" value="/About" />
                    <Tab label="Проекты" value='/projects' />
                    <Tab label="Скиллы" value='/skills' />
                    <Tab label="Контакты" value='/contacts' />
                </Tabs>
            </Paper>

            <Switch>
                <Route exact path="/about"><About /></Route>
                <Route exact path="/projects"></Route>
                <Route exact path="/skills"><Diagram /></Route>
                <Route exact path="/contacts"><SocialLinks /></Route>
            </Switch>






        </div>
    )
}

export default UserProfile
