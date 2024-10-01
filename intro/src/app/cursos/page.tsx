import { getCursos } from "@/api/cursos";
import Link from "next/link";

export  default async function CursosPage(){

	const cursos = await getCursos();
	console.log(cursos);

	return (
		<main>
			<h1>Cursos</h1>
			<div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
				{cursos.map(c => 
					<div key={c.id} style={{ border: '1px solid black', padding: '1rem', borderRadius: '4px', maxWidth: '400px'}}>
						<h3>{c.nome}</h3>
						<p>{c.descricao}</p>
						<p>Total aulas: {c.total_aulas}</p>
						<p>Total horas: {c.total_horas}</p>

						<Link href={`/cursos/${c.slug}`}>Mais sobre</Link>
					</div>)
				}
			</div>
		</main>
	);
}