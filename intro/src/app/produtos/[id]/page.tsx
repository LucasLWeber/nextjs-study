interface PageParams {
	params: {
		id: string
	}
}

interface Produto {
	id: number;
	nome: string;
	preco: number;
	descricao: string;
	estoque: number;
	importado: number;
	message?: string;
}

export default async function ProdutoPage({ params }: PageParams){

	const response = await fetch(`https://api.origamid.online/produtos/${params.id}`);
	const data = await response.json() as Produto;

	return (
		<main>
			<h1>Produto</h1>
			<p>Produto solicitado: {params.id}</p>

			{data.message ? 
				(<p>{data.message}</p>) : 
				(<ul key={data.id}>
					<li>Nome: <strong>{data.nome}</strong></li>
					<li>Descrição: <strong>{data.descricao}</strong></li>
					<li>Quantidade em estoque: <strong>{data.estoque}</strong></li>
					<li>R$ {data.preco}</li>
					<li>Produto importado: <strong>{data.importado ? "Sim" : "Não"}</strong></li>
				</ul>)
			}
		</main>
	);
}