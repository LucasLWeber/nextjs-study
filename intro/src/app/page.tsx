// Components SSR podem ter components CSR como children
// Component CSR só podem ter CSR como children

import Acesso from "@/components/Acesso";
import ClientFecth from "@/components/ClientFetch";
import ServerFetch from "@/components/ServerFetch";

export default async function Home() {
	return (
		<main>
			<h1>Home</h1>
			<Acesso />
			<div style={{display: 'flex', gap: '32px'}}>
				<ServerFetch />
				<ClientFecth />
			</div>
		</main>
	);
}
