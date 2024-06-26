import { NextResponse as res } from 'next/server';

export async function POST(req) {
	const body = await req.json();
	const { name, email, subject, msg, formattedDate } = body;
	console.log(req.body);
	if (
		name == undefined ||
		email == undefined ||
		subject == undefined ||
		msg == undefined
	) {
		return new res(JSON.stringify({ msg: 'todos los campos requeridos' }), {
			status: 400,
			headers: { 'content-type': 'application/json' },
		});
	}

	//verificando si recaptcha existe
	// if (recaptchaToken === null || recaptchaToken === undefined) {
	// 	return res.status(400).send({ msg: 'Fill reCaptcha Auth', status: 400 });
	// }
	// verificando validez de recaptcha
	// try {
	// 	const response = await axios.post(
	// 		`https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`
	// 	);
	// 	if (
	// 		!response.data.success ||
	// 		response.data.score < 0.5 ||
	// 		response.data.action !== 'contactFormAreaContact'
	// 	) {
	// 		return res.status(400).send({ msg: 'ERROR_RECAPTCHA_AUTHENTICATION' });
	// 	}
	// } catch (error) {
	// 	return res.status(500).send({ msg: 'ERROR_INTERNAL_CAPTCHA' });
	// }
	if (name == '' || email == '' || subject == '' || msg == '') {
		return new res(JSON.stringify({ msg: 'Hay campos incompletos' }), {
			status: 400,
			headers: { 'content-type': 'application/json' },
		});
	} else {
		// const sender = { name: 'Mauro', email: 'mauro@pensionfi.com' };
		// const message = `<html><body><h1>${subject}</h1><p>Remitente: ${name}</p><p>${msg}</p></body></html>`;
		// const IdUnico = uuidv4();
		// await sendMail(sender, message, subject);
		//CONEXION A GOOGLE SHEET
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Request-Headers': '*',
			},
			body: JSON.stringify({
				IdUnico,
				CORREO: email,
				NOMBRE: name,
				ASUNTO: subject,
				MENSAJE: msg,
				FECHA: formattedDate,
			}),
		};

		try {
			const response = await fetch(
				'https://script.google.com/macros/s/AKfycbx2BUvHftCIaVBT94_oJOgPkxxsKqaiy3YzwdYf1FOkv6m_9vQazOz48_EgXK4_lXHqhA/exec?endpoint=contact',
				options
			);
			const data = await response.json();
			return new res(JSON.stringify({ msg: data }), {
				status: response.status,
				headers: { 'content-type': 'application/json' },
			});
		} catch (error) {
			return new res(JSON.stringify({ error: 'Something went wrong' }), {
				status: 500,
				headers: { 'content-type': 'application/json' },
			});
		}
	}
}
