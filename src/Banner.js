import React, { useState, useEffect } from 'react'

function Banner({ url }) {

    const [movie, setMovie] = useState([]);
    const img_url = process.env.REACT_APP_IMG_URL;

    useEffect(() => {
        fetch(url)
            .then(data => data.json())
            .then(data => setMovie(data.results[5]));
    }, []);

    function truncate(str, n) {
        return str?.length > n ? str.slice(0, n - 1) + "..." : str;
    }

    return (
        <header className='banner'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(${img_url}${movie.backdrop_path})`,
                backgroundPosition: "centre centre"
            }}
        >
            <div className='banner_content'>
                <h1>{movie.title}</h1>
                <div className="buttons">
                    <button>Play</button>
                    <button>My List</button>
                </div>
                <p>{truncate(movie.overview, 200)}</p>
            </div>
            <div className="faded"></div>
        </header>
    )
}

export default Banner