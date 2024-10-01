'use client';
import { useEffect, useState } from "react";

interface Produto {
	id: number;
	nome: string;
}

export default function ClientFecth(){
	const [data, setData] = useState<Produto[]>([]);

	useEffect(() => {
		async function fetchData(){
			const response = await fetch("https://api.origamid.online/produtos");
			const json = await response.json();
			setData(json);			
		}

		fetchData();
	}, []);


	return( 
		<div style={{ marginTop: '16px'}}>
			<h3>Fetch Client Side</h3>
			{data.map(p => 
				<li key={p.id}>{p.nome}</li>
			)}
		</div>
	);
}