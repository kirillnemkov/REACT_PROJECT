import styles from './userProfile.module.css'
import { Button, Paper, Tabs, Tab } from '@material-ui/core/';
import SendIcon from '@material-ui/icons/Send';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';
import Diagram from '../Daigram/Diagram'
import SocialLinks from '../SocialLinks/SocialLinks';
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
        boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 3px 0px -2px rgb(0 0 0 / 12%)'
    }
}));


const UserProfile = () => {
    const classes = useStyles();


    return (
        <div className={styles.userProfile_container}>

            <div className={styles.main_info}>
                <div className={styles.img_container}>
                    <img src="/profile-user.png" className={styles.user_img}></img>
                    <Button variant="contained" color="secondary">
                        Добавить фото
                    </Button>
                </div>
                <div className={styles.name_and_info_container}>
                    <h5 className={styles.user_name}>lastName firstName middleName</h5>
                    <div className={styles.location}>
                        <p className={styles.location_name}>location</p>
                        <img className={styles.location_img} src="/location.png"></img>
                    </div>
                    <p>job</p>
                </div>
                <div className={styles.button_group__userProfile}>
                    <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        endIcon={<SendIcon />}
                    ></Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        endIcon={<EditIcon />}
                    ></Button>
                </div>
            </div>
            <Paper className={classes.root}>
                <Tabs
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab tabindex='1' label="О себе" />
                    <Tab tabindex='2' label="Проекты" />
                    <Tab tabindex='3' label="Скиллы" />
                    <Tab tabindex='4' label="Контакты" />
                </Tabs>
            </Paper>

            <div className={styles.skills_container}>
                <div style={{ height: 400, width: '100%', marginTop: '3%' }}>
                    <Diagram />
                </div>
            </div>

            <div className={styles.about_container}>
                <img src="/profile-user.png" className={styles.about_photo}></img>
                <div className={styles.about_item}>
                    <h3 className={styles.about_title}>О себе</h3>
                    <p className={styles.about_subtitle}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident</p>
                </div>
            </div>


            <SocialLinks />

        </div>
    )
}

export default UserProfile