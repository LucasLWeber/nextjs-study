import fs from 'fs/promises';

export default async function Acesso(){
	await fs.appendFile('acesso.txt', `${Date.now()}\n`, 'utf8');
	const data = fs.readFile('acesso.txt', 'utf8');

	return(
		<div>{data}</div>
	);

}