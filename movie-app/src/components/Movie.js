import propTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css"

function Movie({id, coverImg, title, summary, genres}) {
    return (
    <div className={styles.movie_container}>
        <img className={styles.movie_img} src={coverImg} alt="coverImg"/>
        <div>
            <Link className={styles.movie_title} to={`/movie/${id}`}>{title}</Link>
        </div>
        <div>
        {genres.map((g) => (
            <span className={styles.movie_genre} key={g}>{g}</span>
        ))}
        </div>
        <p className={styles.movie_summary}>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
    </div>
  )
}

Movie.propTypes = {
    id: propTypes.number.isRequired,
    coverImg: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired
}

export default Movie;