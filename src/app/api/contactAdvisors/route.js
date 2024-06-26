import { NextResponse as res } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
export async function POST(req) {
	const body = await req.json();
	const {
		name,
		genero,
		pension,
		mail,
		telefono,
		whatsapp,
		edad,
		saldo,
		recaptchaToken,
		formattedDate,
	} = body;
	if (
		name == undefined ||
		genero == undefined ||
		saldo == undefined ||
		edad == undefined ||
		pension == undefined
	) {
		return new res(JSON.stringify({ msg: 'todos los campos requeridos' }), {
			status: 400,
			headers: { 'content-type': 'application/json' },
		});
	}
	if (telefono == '' && mail == '' && whatsapp == '') {
		return new res(
			JSON.stringify({ msg: 'Al menos un método de contaco es necesario.' }),
			{
				status: 400,
				headers: { 'content-type': 'application/json' },
			}
		);
	}

	//verificando si raptcha existe
	// if (recaptchaToken === null || recaptchaToken === undefined) {
	// 	return res.status(400).send({ msg: 'Fill reCaptcha Auth', status: 400 });
	// }
	//verificando validez de recaptcha
	// try {
	// 	const response = await axios.post(
	// 		`https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`
	// 	);
	// 	if (
	// 		!response.data.success ||
	// 		response.data.score < 0.5 ||
	// 		response.data.action !== 'AssesorContactFormCaptcha'
	// 	) {
	// 		return res.status(400).send({ msg: 'ERROR_RECAPTCHA_AUTHENTICATION' });
	// 	}
	// } catch (error) {
	// 	return res.status(500).send({ msg: 'ERROR_INTERNAL_CAPTCHA' });
	// }
	if (name == '' || genero == '' || saldo == 0 || edad == 0 || pension == '') {
		return new res(JSON.stringify({ msg: 'Hay campos incompletos' }), {
			status: 400,
			headers: { 'content-type': 'application/json' },
		});
	} else {
		const IDUNICO = uuidv4();
		// const subject = `Pensión tipo: ${pension}`;
		// const sender = { name: 'Mauro', email: 'mauro@pensionfi.com' };
		// const message = `<html><body>
		//     <h1>Quiero contactar a un asesor</h1>
		//     ${name ? `<p>Nombre: ${name}</p>` : ''}
		//     ${genero ? `<p>Género: ${genero}</p>` : ''}
		//     ${edad ? `<p>Edad: ${edad}</p>` : ''}
		//     ${saldo ? `<p>Saldo: ${saldo}</p>` : ''}
		//     ${pension ? `<p>Tipo de pensión: ${pension}</p>` : ''}
		//     <p>Medio de contacto:</p>
		//     ${mail ? `<p>Email: ${mail}</p>` : ''}
		//     ${telefono ? `<p>Teléfono: ${telefono}</p>` : ''}
		//     ${whatsapp ? `<p>Whatsapp: ${whatsapp}</p>` : ''}
		//     </body></html>`;

		// await sendMail(sender, message, subject);
		const contact_options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Request-Headers': '*',
			},
			body: JSON.stringify({
				IDUNICO,
				NOMBRE: name,
				EDAD: edad,
				EMAIL: mail,
				GENERO: genero,
				SALDO: saldo,
				TELEFONO: telefono,
				WHATSAPP: whatsapp,
				PENSION: pension,
				FECHA: formattedDate,
			}),
		};

		try {
			const response = await fetch(
				`${G_SHEET_URL}?endpoint=contact-asesor`,
				contact_options
			);
			if (response.ok) {
				const data = await response.json();
				return new res(JSON.stringify({ msg: data }), {
					status: 200,
					headers: { 'content-type': 'application/json' },
				});
			} else {
				const errorData = await response.json();
				return new res(JSON.stringify({ errorData }), {
					status: response.status,
					headers: { 'content-type': 'application/json' },
				});
			}
		} catch (error) {
			return new res(JSON.stringify({ error: 'Network error' }), {
				status: 500,
				headers: { 'content-type': 'application/json' },
			});
		}
	}
}
