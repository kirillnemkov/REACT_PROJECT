import { useSelector } from 'react-redux'
import styles from './About.module.css'

const About = () => {
    const user = useSelector(state => state.user?.info?.about)

    return (
        <>
            <div className={styles.about_container}>
                <div className={styles.about_item}>
                    <h3 className={styles.about_title}>О себе</h3>
                    <p className={styles.about_subtitle}>{user}</p>
                </div>
            </div>
        </>
    )
}

export default About
