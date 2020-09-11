import React, { useState, useEffect } from "react";
import styles from "./Video.module.css";
const Video = ({ trailers }) => {
	const [currentTrailer, setCurrentTrailer] = useState("");

	useEffect(() => {
		!!trailers.length && setCurrentTrailer(trailers[0].key);
	}, [trailers]);

	const onClick = (e) => {
		setCurrentTrailer(e.target.id);
	};

	return (
		<div className={styles.VideoContainer}>
			<div className={styles.VideoSelector}>
				{trailers.map((el) => (
					<div className={styles.VideoSelectorItem} key={el.key}>
						<p onClick={onClick} id={el.key}>
							{el.type}
						</p>
					</div>
				))}
			</div>

			<iframe
				className={styles.TrailerIframe}
				title="Trailers"
				src={`https://www.youtube.com/embed/${currentTrailer}`}
				frameBorder="0"
			></iframe>
		</div>
	);
};

export default Video;
