import React from 'react';
import { useState, useEffect } from 'react';
import MoviePage from './MoviePage';

const img_url = process.env.REACT_APP_IMG_URL;

function Movie({ title, url, isOriginals }) {
    const [movies, setMovies] = useState([]);


    useEffect(() => {
        fetch(url).then((data) => data.json())
            .then((data) => {
                //console.log(data.results);
                setMovies(data.results);
                // movies.map((movie) => {
                //     console.log(`${img_url}` + movie.poster_path);
                // })
                // console.log(movies);
            });
    }, [movies]);

    return (
        <div className='movies-row'>
            <h2>{title}</h2>
            <div className={`movies_list ${isOriginals && "originals"}`}>
                {movies.map(movie => (
                    <section>
                        <a href="/MoviePage" element={<MoviePage />}><img key={movie.id} src={`${img_url}${isOriginals ? movie.poster_path : movie.backdrop_path}`} /></a>
                        <h3>{movie.title}</h3>
                    </section>
                ))}
            </div>
        </div>
    )
}

export default Movie;