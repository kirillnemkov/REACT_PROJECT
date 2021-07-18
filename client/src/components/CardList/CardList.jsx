import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './style.module.css'
import { getPosts } from '../../redux/actions/posts.ac'

export default function CardList() {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.posts)
  useEffect(() => {
    dispatch(getPosts())
  }, [])

    return (
        <div className="container" style={{ paddingTop: '80px' }}>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {posts.map((el) => {
                    return (
                        <div key={el._id} className={`col ${styles.col}`}>
                            <div className={`card ${styles.card}`}>
                                <div className={`picture ${styles.picture}`}>
                                    <Link to={`/project/${el._id}`}>
                                        <img src={el.image} className="card-img-top" alt={el.name} />
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{el.name}</h5>
                                    <p className="card-text">{el.about}</p>
                                </div>
                                <div
                                    className={`cardfooter ${styles.cardfooter}`}
                                >
                                    <div>
                                        <p>#хештег</p>
                                    </div>
                                    <div>
                                        <img src="https://img.icons8.com/ios-glyphs/24/000000/visible--v1.png" />
                                        <span
                                            className={`views ${styles.views}`}
                                        >
                                            {el.likes}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
