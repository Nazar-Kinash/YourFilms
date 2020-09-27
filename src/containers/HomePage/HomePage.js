import React, { useState, useEffect } from "react";
import { getTpendingMovies } from "../../servise/movies-API";
import MoviesSlider from "../../components/MoviesSlider/MoviesSlider";

const HomePage = () => {
	const [trendingMoviesList, setTrendingMoviesList] = useState([]);

	useEffect(() => {
		getTpendingMovies().then((movies) => {
			setTrendingMoviesList(movies);
		});
	}, []);

	return <MoviesSlider moviesList={trendingMoviesList} />;
};

export default HomePage;
