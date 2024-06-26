import { NextResponse as res } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
export async function POST(req) {
	const body = await req.json();
	const { name, FECHA, correo } = body;
	console.log(name, FECHA, correo);
	if (name == undefined || correo == undefined) {
		return new res(JSON.stringify({ message: 'todos los campos requeridos' }), {
			status: 401,
			headers: { 'content-type': 'application/json' },
		});
	}
	if (name == '' || correo == '') {
		return new res(JSON.stringify({ message: 'Hay campos incompletos' }), {
			status: 401,
			headers: { 'content-type': 'application/json' },
		});
	}
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Request-Headers': '*',
		},
		body: JSON.stringify({
			IDUNICO: uuidv4(),
			NOMBRE: name,
			CORREO: correo,
			FECHA: FECHA,
		}),
	};

	try {
		const response = await fetch(
			`https://script.google.com/macros/s/AKfycbx2BUvHftCIaVBT94_oJOgPkxxsKqaiy3YzwdYf1FOkv6m_9vQazOz48_EgXK4_lXHqhA/exec?endpoint=newsletter`,
			options
		);
		const data = await response.json();
		if (!response.ok) {
			throw new Error(data);
		}

		return new res(JSON.stringify({ message: data }), {
			status: response.status,
			headers: { 'content-type': 'application/json' },
		});
	} catch (error) {
		return new res(JSON.stringify({ error: error.message }), {
			status: error.status || 500,
			headers: { 'content-type': 'application/json' },
		});
	}
}
