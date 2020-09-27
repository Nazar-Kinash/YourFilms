import React from "react";
import styles from "./MoviesList.module.css";
import MoviesListItem from "../MoivesListItem.js/MoviesListItem";
import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const MoviesList = ({ moviesList }) => {
	return (
		<>
			<TransitionGroup component="div" className={styles["movies-list"]}>
				{!!moviesList.length &&
					moviesList.map((movie) => (
						<CSSTransition
							{...movie}
							key={movie.id}
							timeout={4000}
							classNames="ListItem"
						>
							<MoviesListItem {...movie} />
						</CSSTransition>
					))}
			</TransitionGroup>
		</>
	);
};

MoviesList.propTypes = {
	moviesList: PropTypes.array,
};

export default MoviesList;
