import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<>
			<Head>
				<title>Ninja list | Home</title>
			</Head>
			<div>
				<h1 className={styles.title}>Homepage</h1>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab maxime
					accusamus at sequi reprehenderit, vitae optio excepturi ratione
					dolorum! Iusto exercitationem blanditiis libero assumenda placeat
					dolor commodi rem reiciendis minima?
				</p>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab maxime
					accusamus at sequi reprehenderit, vitae optio excepturi ratione
					dolorum! Iusto exercitationem blanditiis libero assumenda placeat
					dolor commodi rem reiciendis minima?
				</p>
				<Link href="/ninjas">
					<a className={styles.btn}>See all Ninjas</a>
				</Link>
			</div>
		</>
	);
}
