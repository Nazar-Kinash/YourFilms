import React from "react";
import { Link, useLocation } from "react-router-dom";

import styles from "./MoviesSlider.module.css";
import { defaultPoster, imageBaseUrl } from "../../servise/movies-API";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ButtonGroup from "./ButtonGroup/ButtonGroup";

const MoviesSlider = ({ moviesList }) => {
	const location = useLocation();

	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 8,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 8,
			slidesToSlide: 5,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	return (
		<div className={styles.Slider}>
			<Carousel
				responsive={responsive}
				arrows={false}
				transitionDuration={700}
				itemClass={styles.SliderItem}
				sliderClass={styles["carousel-list"]}
				containerClass={styles["carousel-container"]}
				customButtonGroup={<ButtonGroup />}
				renderButtonGroupOutside={true}
			>
				{!!moviesList.length &&
					moviesList.map((movie) => (
						<Link
							to={{
								pathname: `/movies/${movie.id}`,
								state: {
									from: location,
								},
							}}
							key={movie.id}
						>
							<div className={styles.ItemInfo}>
								<img
									src={
										movie.poster_path
											? `${imageBaseUrl}${movie.poster_path}`
											: defaultPoster
									}
									alt={movie.title}
								/>
								<div className={styles.Title}>{movie.title}</div>
							</div>
						</Link>
					))}
			</Carousel>
		</div>
	);
};

export default MoviesSlider;
