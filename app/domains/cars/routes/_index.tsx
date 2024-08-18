import type { MetaFunction } from "@remix-run/node";
import { Typography } from "~/components.global/typography/Typography";
import * as styles from "~/domains/cars/styles/Styles.css";

export const meta: MetaFunction = () => {
	return [
		{ title: "Welcome to Remix" },
		{
			name: "description",
			content: "A modern web framework with vanilla-extract styling",
		},
	];
};

export default function Index() {
	return (
		<div className={styles.container}>
			<Typography variant="h1" className={styles.heading}>
				Welcome to Remix
			</Typography>

			<section className={styles.section}>
				<Typography variant="h2" className={styles.sectionHeading}>
					Quick Links
				</Typography>
				<ul className={styles.list}>
					<li className={styles.listItem}>
						<Typography
							as="a"
							className={styles.link}
							target="_blank"
							href="https://remix.run/start/quickstart"
							rel="noreferrer"
						>
							5m Quick Start
						</Typography>
					</li>
					<li className={styles.listItem}>
						<Typography
							as="a"
							className={styles.link}
							target="_blank"
							href="https://remix.run/start/tutorial"
							rel="noreferrer"
						>
							30m Tutorial
						</Typography>
					</li>
					<li className={styles.listItem}>
						<Typography
							as="a"
							className={styles.link}
							target="_blank"
							href="https://remix.run/docs"
							rel="noreferrer"
						>
							Remix Docs
						</Typography>
					</li>
				</ul>
			</section>

			<section className={styles.section}>
				<Typography variant="h2" className={styles.sectionHeading}>
					Why Remix?
				</Typography>
				<Typography variant="body">
					Remix is a full stack web framework that lets you focus on the user
					interface and work back through web fundamentals to deliver a fast,
					slick, and resilient user experience.
				</Typography>
			</section>

			<section className={styles.section}>
				<Typography variant="h2" className={styles.sectionHeading}>
					Getting Started
				</Typography>
				<Typography variant="body">
					To get started with Remix, check out the quick links above or dive
					into the official documentation. Happy coding!
				</Typography>
			</section>
		</div>
	);
}
