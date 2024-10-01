'use client';

import { useEffect, useState } from "react";

export default function Width(){
	// Sendo um component client side eu não posso iniciar esse state com um recurso do lado do cliente
	// Devido à pré-renderização irá ocorrer um erro do lado do servidor: "document is not defined"
	// Para poder utilizar assim: deve ser feito o carregamento dinâmico onde este component é utilizado
	const [width, setWidth] = useState(document.documentElement.clientWidth);
	const [ativo, setAtivo] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setWidth(document.documentElement.clientWidth);
		}
		handleResize();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		}
	}, [])

	return (
		<div>
			<p style={{ color: ativo ? '#680' : '#b00'}}>Largura da tela do usuário: {width}</p>
			<button onClick={() => setAtivo(b => !b)}>{ativo ? 'Desativar' : 'Ativar'}</button>
		</div>
	);
}