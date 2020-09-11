import React, { useEffect, useState } from "react";
import { getMovieDetals, getMovieTreiler } from "../../servise/movies-API";
import {
	NavLink,
	Switch,
	Route,
	useParams,
	useHistory,
	useLocation,
} from "react-router-dom";
import Cast from "../../components/Cast/Cast";
import Reviews from "../../components/Reviews/Reviews";
import { routes } from "../../routes/routes";
import styles from "./MovieDetailsPage.module.css";
import Video from "../../components/Video/Video";

const MovieDetailsPage = () => {
	const [movieDetalInfo, setMovieDetalInfo] = useState({});
	const [trailers, setTrailers] = useState([]);
	const locationState = useLocation();
	const history = useHistory();
	const { movieId } = useParams();
	const { poster_path, title, vote_average, overview, genres } = movieDetalInfo;

	console.log(movieDetalInfo);

	useEffect(() => {
		getMovieDetals(movieId).then((movieDetals) =>
			setMovieDetalInfo(movieDetals)
		);
		getMovieTreiler(movieId)
			.then((videos) =>
				videos.filter(
					(video) => video.type === "Trailer" || video.type === "Teaser"
				)
			)
			.then((trailers) => setTrailers(trailers));
	}, [movieId]);

	const goBack = () => {
		if (locationState.state) {
			history.push(locationState.state.from);
			return;
		}
		history.push(routes.HOME);
	};

	return (
		<div className={`PageContainer ${styles.MovieDetailsPageContainer}`}>
			<h2 className={styles.Title}>{title}</h2>

			<div className={styles.MovieDetalsContainer}>
				<div className={styles.MovieCard}>
					<button className={styles["btn-go-back"]} onClick={goBack}>
						{`<= Go back`}
					</button>
					<img
						className={styles["card-image"]}
						src={`https://image.tmdb.org/t/p/w500${poster_path}`}
						alt={`belongs_to_collection.poster_path`}
					/>
					<h3>Overvive</h3>
					<p>{overview} </p>
				</div>
				<div>
					<div className={styles["card-info"]}>
						<p>{`Uesr score: ${vote_average}`}</p>
						<h3>Genres</h3>
						{genres &&
							genres.map(({ id, name }) => (
								<li key={id}>
									<span>{name}</span>
								</li>
							))}
					</div>
					<Video trailers={trailers} />
				</div>
			</div>

			<div className={styles["nav-container"]}>
				<h4>Additional information</h4>
				<nav className={styles.Navigation}>
					<NavLink
						className={styles["navigation-link"]}
						activeClassName={styles["navigation-link-active"]}
						to={{
							pathname: `/movies/${movieId}/cast`,
							state: {
								from: locationState.state.from,
							},
						}}
					>
						Cast
					</NavLink>
					<NavLink
						className={styles["navigation-link"]}
						activeClassName={styles["navigation-link-active"]}
						to={{
							pathname: `/movies/${movieId}/reviews`,
							state: {
								from: locationState.state.from,
							},
						}}
					>
						Reviews
					</NavLink>
				</nav>
			</div>

			<Switch>
				<Route
					path={`${routes.MOVIE_DETAILS}${routes.MOVIE_CAST}`}
					component={Cast}
				/>
				<Route
					path={`${routes.MOVIE_DETAILS}${routes.MOVIE_REVIEWS}`}
					component={Reviews}
				/>
			</Switch>
		</div>
	);
};

export default MovieDetailsPage;
