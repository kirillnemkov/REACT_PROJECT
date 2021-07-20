import styles from './SocialLinks.module.css'

const SocialLinks = () => {
    return (
        <>
            <div className={styles.links_container}>
                <div className={styles.links_item}>
                    <p>url</p>
                    <img src="/sites.png" className={styles.links_img} alt=""></img>
                </div>
                <div className={styles.links_item}>
                    <p> gitHub</p>
                    <img src='/github.png' className={styles.links_img} alt=""></img>
                </div>
                <div className={styles.links_item}>
                    <p>twitter</p>
                    <img src='/twitter.png' className={styles.links_img} alt=""></img>
                </div>
                <div className={styles.links_item}>
                    <p>instagram</p>
                    <img src="/instagram.png" className={styles.links_img} alt=""></img>
                </div>
                <div className={styles.links_item}>
                    <p> facebook</p>
                    <img src="/facebook.png" className={styles.links_img} alt=""></img>
                </div>
            </div>
        </>
    )
}

export default SocialLinks
