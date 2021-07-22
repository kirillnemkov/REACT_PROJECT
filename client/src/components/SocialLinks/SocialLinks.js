import { useSelector } from 'react-redux'
import AddToHomeScreenIcon from '@material-ui/icons/AddToHomeScreen'
import { grey } from '@material-ui/core/colors'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import GitHubIcon from '@material-ui/icons/GitHub'
import IconButton from '@material-ui/core/IconButton'
import styles from './SocialLinks.module.css'

const SocialLinks = ({id}) => {
    const currentUser = useSelector(state => state?.user)
    const anotherUser = useSelector(state => state?.AnotherUser)

    return (
      <div className={styles.web}>
        <a href="https://github.com/">
            <IconButton>
                <GitHubIcon
                    fontSize="large"
                    style={{ color: grey[900] }}
                    />
            </IconButton>
        </a>
        <a href="https://twitter.com/kirillnemkov">
            <IconButton>
                <TwitterIcon
                    fontSize="large"
                    style={{ color: grey[900] }}
                    />
            </IconButton>
        </a>
        <a href="https://www.instagram.com/kirillnemkov/">
            <IconButton>
                <InstagramIcon
                    fontSize="large"
                    style={{ color: grey[900] }}
                    />
            </IconButton>
        </a>
        <a href="https://www.facebook.com/public/%D0%9A%D0%B8%D1%80%D0%B8%D0%BB%D0%BB-%D0%9D%D0%B5%D0%BC%D0%BA%D0%BE%D0%B2">
            <IconButton>
                <FacebookIcon
                    fontSize="large"
                    style={{ color: grey[900] }}
                    />
            </IconButton>
        </a>
    </div>
    )
  }
  
  export default SocialLinks
  
  // <>
      {/* <div className={styles.links_container}>
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
      </div> */}
  // </>
