interface Curso {
	id: number,
	slug: string,
	nome: string,
	descricao: string,
	total_aulas: number,
	total_horas: number
}

interface Aula{
	id: number,
	slug: string,
	nome: string,
	descricao: string,
	curso_id: number,
	tempo: number,
	ordem: number
}

export async function getCursos(): Promise<Curso[]>{
	const response = await fetch('https://api.origamid.online/cursos');
	return await response.json();
}

export async function getCursoBySlug(slug: string) {
	const response = await fetch(`https://api.origamid.online/cursos/${slug}`);
	return await response.json() as Curso & { aulas: Aula[]; };
}

export async function getAula(slug: string, aula: string): Promise<Aula> {
	const response = await fetch(`https://api.origamid.online/cursos/${slug}/${aula}`);
	return await response.json();
}