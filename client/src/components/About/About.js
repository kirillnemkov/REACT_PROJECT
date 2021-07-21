import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { initUserInfo } from '../../redux/actions/user.ac'
import styles from './About.module.css'

const About = () => {
    const user = useSelector(state => state.user?.info?.about)

    return (
        <>
            <div className={styles.about_container}>
                <img src="/profile-user.png" className={styles.about_photo} alt=""></img>
                <div className={styles.about_item}>
                    <h3 className={styles.about_title}>О себе</h3>
                    <p className={styles.about_subtitle}>{user}</p>
                </div>
            </div>
        </>
    )
}

export default About
