import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import { Link } from "react-router-dom";

function Detail(){
    const { id } = useParams()
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([])
    const getMovie = async () => {
        const json = await ( await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        console.log(json.data.movie)
        setMovie(json.data.movie);
        setLoading(false);
    };

    useEffect(() => {
        getMovie();
    }, [])

    console.log("this", movie)

    return (
        <div>
            {loading ? 
                <h1>loading...</h1>
                : 
                 <div>
                    <Link to="/">back</Link>
                    <h2>Detail</h2>
                    <img src={movie.medium_cover_image} alt="cover_image"/>
                    <p>{movie.description_full}</p>
                 </div>
            }
        </div>
    )
}

export default Detail;