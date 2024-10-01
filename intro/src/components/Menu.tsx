import Link from "next/link"

// Prefetch -> realiza o pré carregamento (SSR) de todas as paginas que podem ser navegadas com os links da pagina atual

export default function Menu(){
	return (
		<ul className="menu">
			<li><Link href="/" prefetch={true}>Home</Link></li>
			<li><Link href="/sobre">Sobre</Link></li>
			<li><Link href="/contato">Contato</Link></li>
			<li><Link href="/imc">Imc</Link></li>
			<li><Link href="/cursos">Cursos</Link></li>
			<li><Link href="/acoes">Ações</Link></li>
		</ul>
	);
}