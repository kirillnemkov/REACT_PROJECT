import { useSelector } from 'react-redux'
import styles from './SocialLinks.module.css'

const SocialLinks = () => {
    const user = useSelector(state => state.user?.info)

    return (
        <>
            <div className={styles.links_container}>
                <div className={styles.links_item}>
                    <p>{user?.url}</p>
                    <img src="/sites.png" className={styles.links_img}></img>
                </div>
                <div className={styles.links_item}>
                    <p>{user?.gitHub}</p>
                    <img src='/github.png' className={styles.links_img}></img>
                </div>
                <div className={styles.links_item}>
                    <p>{user?.twitte}r</p>
                    <img src='/twitter.png' className={styles.links_img}></img>
                </div>
                <div className={styles.links_item}>
                    <p>{user?.instagram}</p>
                    <img src="/instagram.png" className={styles.links_img}></img>
                </div>
                <div className={styles.links_item}>
                    <p>{user?.facebook}</p>
                    <img src="/facebook.png" className={styles.links_img}></img>
                </div>
            </div>
        </>
    )
}

export default SocialLinks