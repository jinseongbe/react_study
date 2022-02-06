import {useEffect, useState} from "react";
import Movie from "../components/Movie"

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
        // const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year");
        // const json = await response.json();
        // 위의 코드를 완전 축약하여 사용한것이 아래 구문임
        const json = await (await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")).json();
        
        setMovies(json.data.movies);
        setLoading(false);
    }

    useEffect(() => {
        // 아래 코드에서 then을 사용하는 것 대신에 async,await을 사용하는 코드가 getMovies임
        // fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
        // .then((response) => response.json())
        // .then((json) => {
        //   setMovies(json.data.movies);
        //   setLoading(false);
        // });

        getMovies()
        console.log("call api")
    }, []);

    return (
        <div>

        {loading ? (
            <h1>Loading...</h1>
            ) : (
            <div>
            {movies.map((movie) => (
                <Movie 
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image} 
                title={movie.title} 
                summary={movie.summary}
                genres={movie.genres} 
                />
            ))}
            </div>
            )}

        </div>
    );
}

export default Home;