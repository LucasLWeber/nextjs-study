import { getCursoBySlug } from "@/api/cursos";
import Link from "next/link";

interface PageParams {
	params: {
		curso: string
	}
}

export default async function CursoPage({ params }: PageParams){
	const curso = await getCursoBySlug(params.curso);
	return (
		<main>
			<h1>Curso de {curso.nome}</h1>
			<div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
				{curso.aulas.map(c => 
					<div key={c.id} style={{ border: '1px solid black', padding: '1rem', borderRadius: '4px', maxWidth: '400px'}}>
						<h3>{c.nome}</h3>
						<p>{c.descricao}</p>
						<p>Duração: {c.tempo}</p>

						<Link href={`/cursos/${params.curso}/${c.slug}`}>Mais sobre</Link>
					</div>)
				}
			</div>
		</main>
	);
}