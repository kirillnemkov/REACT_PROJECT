import { Link } from "react-router-dom"
import styles from "./style.module.css"

export default function CardList() {
    return (
    <div className="container" style={{paddingTop: "80px"}}>
    <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className={`col ${styles.col}`}>
    <div className={`card ${styles.card}`}>
      <div className={`picture ${styles.picture}`}>
      <Link to="..."><img src="https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg" className="card-img-top" alt="..."/></Link>
      </div>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Info</p>
      </div>
      <div className={`cardfooter ${styles.cardfooter}`}>
        <div>
          <p className="q">#хештег</p>
          </div>
        <div>
        <img src="https://img.icons8.com/ios-glyphs/24/000000/visible--v1.png"/>
        <span className={`views ${styles.views}`}>10</span>
        </div>
      </div>
    </div>
  </div>

  <div className={`col ${styles.col}`}>
    <div className={`card ${styles.card}`}>
      <div className={`picture ${styles.picture}`}>
      <img src="https://static6.depositphotos.com/1029473/605/i/600/depositphotos_6058054-stock-photo-abstract-3d-image.jpg" className="card-img-top" alt="..."/>
      </div>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Info</p>
      </div>
      <div className={`cardfooter ${styles.cardfooter}`}>
        <div>
          <p>#хештег</p>
          </div>
        <div>
        <img src="https://img.icons8.com/ios-glyphs/24/000000/visible--v1.png"/>
        <span className={`views ${styles.views}`}>10</span>
        </div>
      </div>
    </div>
  </div>

  <div className={`col ${styles.col}`}>
    <div className={`card ${styles.card}`}>
      <div className={`picture ${styles.picture}`}>
      <img src="https://kartinki-dlya-srisovki.ru/wp-content/uploads/2018/10/kartinki-dlya-srisovki-glaza-1.jpg" className="card-img-top" alt="..."/>
      </div>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Info</p>
      </div>
      <div className={`cardfooter ${styles.cardfooter}`}>
        <div>
          <p>#хештег</p>
          </div>
        <div>
        <img src="https://img.icons8.com/ios-glyphs/24/000000/visible--v1.png"/>
        <span className={`views ${styles.views}`}>10</span>
        </div>
      </div>
    </div>
  </div>

  

  

  </div>
    </div>
 
  
    )
}
