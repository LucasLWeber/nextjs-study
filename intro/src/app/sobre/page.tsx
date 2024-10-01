import dynamic from "next/dynamic";

// Para importar elementos de forma dinâmica -> visto que o servidor nao executa codigos client side
// Dessa maneira o pré carregamento do component é desativado
const Width = dynamic(() => import("@/components/Width"), {ssr: false})

export default function SobrePage(){
	return(
		<main>
			<h2>Sobre</h2>
			<Width />
		</main>
	);
}