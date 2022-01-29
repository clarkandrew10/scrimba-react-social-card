import React from "react";

export default function Info() {
	return (
		<div className="info">
			<div className="info-img">
				<img
					src="https://www.apclark.org/img/self.png"
					alt="Andrew Clark Headshot"
				/>
			</div>
			<div className="info-contact-copy">
				<h1>Andrew Clark</h1>
				<h2>Frontend Developer</h2>
				<a href="https://www.apclark.org" target="_blank">
					apclark.org
				</a>
			</div>
			<div className="info-contact-btns">
				<a className="btn email-btn" href="mailto:andrew@dev.apclark.org">
					<i class="fas fa-envelope"></i>Email
				</a>
				<a
					className="btn li-btn"
					href="http://linkedin.com/in/aclark19"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i class="fab fa-linkedin"></i>LinkedIn
				</a>
			</div>
		</div>
	);
}
