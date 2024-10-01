interface Produto {
	id: number;
	nome: string;
}

export default async function ServerFetch(){

	const response = await fetch("https://api.origamid.online/produtos");
	const data = await response.json() as Produto[];

	return(
		<div style={{ marginTop: '16px'}}>
			<h3>Fetch Server Side</h3>
			{data.map(p => 
				<li key={p.id}>{p.nome}</li>
			)}
		</div>
	);

}