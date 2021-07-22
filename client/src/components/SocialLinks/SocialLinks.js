import { useSelector } from 'react-redux'
import styles from './SocialLinks.module.css'

const SocialLinks = ({id}) => {
    const currentUser = useSelector(state => state?.user)
    const anotherUser = useSelector(state => state?.AnotherUser)

    return (
        <>
            <div className={styles.links_container}>
                <div className={styles.links_item}>
                    <p>{id == currentUser.id ? currentUser?.info?.url : anotherUser?.url}</p>
                    <img src="/sites.png" className={styles.links_img} alt=""></img>
                </div>
                <div className={styles.links_item}>
                    <p>{id == currentUser.id ? currentUser?.info?.gitHub : anotherUser?.gitHub}</p>
                    <img src='/github.png' className={styles.links_img} alt=""></img>
                </div>
                <div className={styles.links_item}>
                    <p>{id == currentUser.id ? currentUser?.info?.twitter : anotherUser?.twitter}</p>
                    <img src='/twitter.png' className={styles.links_img} alt=""></img>
                </div>
                <div className={styles.links_item}>
                    <p>{id == currentUser.id ? currentUser?.info?.instagram : anotherUser?.instagram}</p>
                    <img src="/instagram.png" className={styles.links_img} alt=""></img>
                </div>
                <div className={styles.links_item}>
                    <p>{id == currentUser.id ? currentUser?.info?.facebook : anotherUser?.facebook}</p>
                    <img src="/facebook.png" className={styles.links_img} alt=""></img>
                </div>
            </div>
        </>
    )
}

export default SocialLinks
