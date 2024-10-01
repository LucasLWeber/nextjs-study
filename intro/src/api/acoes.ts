// Informando de maneira explícita para o Next para revalidar as informações vinda do fetch a cada x tempo
// O fetch de maneira SSR, porém o html é bvildado novamente a cada novo acesso na pagina.
// Resultando em uma informação enviada sempre anterior, visto que, ele é enviado ao cliente e em seguida buildado o novo html.
// Caso seja necessário que a informação seja em real time, deve optar pela estratégia CSR, padrão react via useEffect 

interface Acao{
	id: number,
	preco_anterior: number,
	preco: number,
	simbolo: string,
	nome: string,
	descricao: string,
	vendas: number,
	atualizada: number
  }

export async function getAcoes(): Promise<Acao>{
	const response = await fetch("https://api.origamid.online/acoes/lua", { next: { revalidate: 5 }});
	return await response.json();
}