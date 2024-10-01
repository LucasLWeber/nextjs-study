import { getAcoes } from "@/api/acoes";

export default async function AcoesPage(){
	const data = await getAcoes();
	
	return (
		<main>
			<h1>{data.simbolo}</h1>
			<h2>Atualizado em: {data.atualizada}</h2>
		</main>
	);
}