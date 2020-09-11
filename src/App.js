import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { routes } from "./routes/routes";
import "./App.css";
import Header from "./components/Header/Header";
import Loader from "react-loader-spinner";

const HomePage = lazy(() => import("./containers/HomePage/HomePage"));
const MovieDetailsPage = lazy(() =>
	import("./containers/MovieDetailsPage/MovieDetailsPage")
);
const MoviesPage = lazy(() => import("./containers/MoviesPage/MoviesPage"));

function App() {
	return (
		<>
			<div className="App">
				<Header />
				<Suspense
					fallback={
						<Loader type="Rings" color="#00BFFF" height={80} width={80} />
					}
				>
					<Switch>
						<Route exact path={routes.HOME} component={HomePage} />
						<Route path={routes.MOVIE_DETAILS} component={MovieDetailsPage} />
						<Route path={routes.MOVIES} component={MoviesPage} />
						<Redirect to={routes.HOME} />
					</Switch>
				</Suspense>
			</div>
		</>
	);
}

export default App;
