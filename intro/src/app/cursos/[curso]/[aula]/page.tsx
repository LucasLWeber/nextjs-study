import { getAula } from "@/api/cursos";
import Link from "next/link";

interface PageParams {
	params: {
		curso: string;
		aula: string;
	}
};

export default async function CursoPage({ params }: PageParams){
	const aula = await getAula(params.curso, params.aula);
	return (
		<main>
			<h1>Aula de {aula.nome}</h1>
				<div key={aula.id} style={{ border: '1px solid black', padding: '1rem', borderRadius: '4px', maxWidth: '400px'}}>
					<p>{aula.descricao}</p>
					<p>Duração: {aula.tempo}</p>
					<Link href={`/cursos/${params.curso}/`}>Voltar</Link>
				</div>
		</main>
	);
}