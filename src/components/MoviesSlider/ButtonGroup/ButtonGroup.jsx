import React from "react";
import styles from "../MoviesSlider.module.css";

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
	const {
		carouselState: { currentSlide },
	} = rest;

	return (
		<>
			<div className={styles["carousel-button-group"]}>
				<div
					className={currentSlide === 0 ? "disable" : `${styles.Prev}`}
					onClick={() => previous()}
				></div>
				<div
					className={currentSlide === 12 ? "disable" : `${styles.Next}`}
					onClick={() => next()}
				></div>
			</div>
		</>
	);
};

export default ButtonGroup;
