'use client';

import React, { useState } from "react";

export default function IMC(){
	const [imc, setImc] = useState('');
	const [peso, setPeso] = useState('');
	const [altura, setAltura] = useState('');
	const [calculado, setCalculado] = useState(false);

	const handleCalcular = (e: React.FormEvent) => {
		e.preventDefault();
		setImc((+peso / (+altura * +altura)).toFixed(2))
		setCalculado(true);
	}	

	return(
		<>
			<form onSubmit={handleCalcular}>
				<label htmlFor="peso">Seu peso</label>	
				<input 
					id="peso"
					type="number" 
					value={peso} 
					onChange={(e) => setPeso(e.target.value)}
				/>
				<label htmlFor="altura">Sua altura</label>
				<input 
					id="altura"
					type="number"
					value={altura}
					onChange={(e) => setAltura(e.target.value)}
				/>
				<button>Calcular IMC</button>
			</form>
			<p>
				{ calculado && `Seu IMC é de: ${imc}` }
			</p>
		</>
	);
}