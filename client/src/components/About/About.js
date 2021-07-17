import styles from './About.module.css'

const About = () => {
    return (
        <>
            <div className={styles.about_container}>
                <img src="/profile-user.png" className={styles.about_photo}></img>
                <div className={styles.about_item}>
                    <h3 className={styles.about_title}>О себе</h3>
                    <p className={styles.about_subtitle}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident</p>
                </div>
            </div>
        </>
    )
}

export default About