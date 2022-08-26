import Link from "next/link";

export default function Home() {
	return (
		<div>
			<h1>Hello world</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab maxime
				accusamus at sequi reprehenderit, vitae optio excepturi ratione dolorum!
				Iusto exercitationem blanditiis libero assumenda placeat dolor commodi
				rem reiciendis minima?
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab maxime
				accusamus at sequi reprehenderit, vitae optio excepturi ratione dolorum!
				Iusto exercitationem blanditiis libero assumenda placeat dolor commodi
				rem reiciendis minima?
			</p>
			<Link href="/ninjas">
				<a>See all Ninjas</a>
			</Link>
		</div>
	);
}
