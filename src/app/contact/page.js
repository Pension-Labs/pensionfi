'use client';
import { IdiomaContext } from '@/Context/IdiomaContext';
import React, { useState, useContext, useRef } from 'react';
// import useRecaptchaV3 from '../hooks/useRecaptchaV3'

const Contact = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [msg, setMsg] = useState('');
	const [loading, setLoading] = useState(false);
	const correcto = useRef(null);
	const name_error = useRef(null);
	const email_error = useRef(null);
	const subject_error = useRef(null);
	const msg_error = useRef(null);
	const error = useRef(null);
	let emptyField = false;
	const { textos, handleAllDropdowns } = useContext(IdiomaContext);
	// const executeRecaptcha = useRecaptchaV3({
	// 	SITE_KEY: import.meta.env.VITE_APP_RECAPTCHA_SITEKEY,
	// })

	const handleSubmit = async e => {
		e.preventDefault();

		const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
		const containNumbers = /\d/;
		const emailFormat =
			/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

		//se ocultan los campos de error en caso de ser visibles antes de enviar el formulario
		correcto.current.classList.add('hidden');
		error.current.classList.add('hidden');
		name_error.current.classList.add('hidden');
		email_error.current.classList.add('hidden');
		subject_error.current.classList.add('hidden');
		msg_error.current.classList.add('hidden');
		setLoading(true);

		if (!name || specialChars.test(name) || containNumbers.test(name)) {
			name_error.current.classList.remove('hidden');
			emptyField = true;
		}
		if (!email || !emailFormat.test(email)) {
			email_error.current.classList.remove('hidden');
			emptyField = true;
		}
		if (!subject) {
			subject_error.current.classList.remove('hidden');
			emptyField = true;
		}
		const recaptchaToken = await executeRecaptcha('contactFormAreaContact');
		// Obtener la fecha y hora actuales en milisegundos desde el epoch
		const now = Date.now();

		// Crear un objeto Date a partir del timestamp actual
		const date = new Date(now);

		// Especificar la región y opciones de formato para Chile
		const options = {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
			timeZone: 'America/Santiago', // Zona horaria específica de Chile
			hour12: false, // Utiliza formato de 24 horas
		};

		// Crear el formateador de fecha y hora para la región especificada
		const dateTimeFormat = new Intl.DateTimeFormat('es-CL', options);

		// Formatear la fecha
		const formattedDate = dateTimeFormat.format(date);
		const data = { name, email, subject, msg, formattedDate };
		const apiUrl = import.meta.env.VITE_APP_API_URL || window.location.origin;
		!emptyField &&
			(await fetch(`${apiUrl}/contacto`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				credentials: 'include',
				body: JSON.stringify(data),
			})
				.then(async res => {
					if (!res.ok) {
						const errorData = await res.json();
						error.classList.remove('hidden');
						throw new Error(
							errorData.msg || errorData || 'Todos los campos son requeridos'
						);
					}
					return res.json();
				})
				.then(response => {
					correcto.current.classList.remove('hidden');
				})
				.catch(err => {
					error.current.innerHTML = err.msg;
					error.current.classList.remove('hidden');
				})
				.finally(() => {
					setLoading(false);
					setTimeout(() => {
						correcto.current.classList.add('hidden');
						error.current.classList.add('hidden');
					}, 6000);
				}));
	};
	return (
		<div
			onClick={handleAllDropdowns}
			className="w-full md:w-1/2 lg:ms-auto mx-auto  "
		>
			<h1 className="font-bold text-2xl mb-2 text-center">
				{textos.contact.title}
			</h1>
			<p className="text-center">{textos.contact.desc}</p>
			<div className="py-8 w-full px-7 rounded-md bg-white">
				<form className="" action="" method="POST">
					<div className="grid gap-2">
						<input
							type="text"
							id="fname"
							onChange={e => setName(e.target.value)}
							name="fname"
							placeholder={textos.contact.name}
							className="w-full col-span-2 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-primario "
							required
						/>
						<span
							ref={name_error}
							className="text-error_acento text-sm mb-2 hidden"
						>
							{textos.contact.response.name}
						</span>
						<div className="col-span-2">
							<input
								type="text"
								id="email"
								onChange={e => setEmail(e.target.value)}
								name="email"
								placeholder="E-mail"
								className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-primario"
								required
							/>
						</div>
						<span
							ref={email_error}
							className="text-error_acento text-sm mb-2 hidden"
						>
							{textos.contact.response.mail}
						</span>
						<div className="col-span-2">
							<select
								id="subject"
								name="subject"
								value={subject}
								onChange={e => setSubject(e.target.value)}
								className="appearance-none w-full border border-gray-300 bg-white rounded-md py-2 px-3 focus:outline-none focus:border-primario"
								required
							>
								<option className="text-[#919191] " value="">
									{textos.contact.subject.title}
								</option>
								<option value="cliente">{textos.contact.subject.client}</option>
								<option value="Trabaja con nosotros">
									{textos.contact.subject.work}
								</option>
								<option value="Inversionista">
									{textos.contact.subject.investor}
								</option>
								<option value="Prensa">{textos.contact.subject.press}</option>
							</select>
							<span
								ref={subject_error}
								className="text-left text-error_acento text-sm mb-2 hidden"
							>
								{textos.contact.response.subject}
							</span>
						</div>
						<div className="col-span-2">
							<textarea
								name="message"
								onChange={e => setMsg(e.target.value)}
								rows="5"
								cols=""
								placeholder={textos.contact.msg}
								className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-primario"
								required={true}
							></textarea>
							<span
								ref={msg_error}
								className="text-left text-error_acento text-sm mb-2 hidden"
							>
								{textos.contact.response.msg}
							</span>
						</div>
						{loading && (
							<div className="text-center  col-span-2" role="status">
								<svg
									aria-hidden="true"
									className="inline w-8 h-8 text-secundario animate-spin  fill-green-500"
									viewBox="0 0 100 101"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
										fill="currentColor"
									/>
									<path
										d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
										fill="currentFill"
									/>
								</svg>
								<span className="sr-only">
									{textos.contact.response.loading}
								</span>
							</div>
						)}
						<p
							ref={correcto}
							className="transition-all bg-secundario text-acento text-center py-2 col-span-2 hidden"
						>
							{textos.contact.response.success}
						</p>
						<p
							id="error"
							className=" bg-error text-error_acento py-2 text-center col-span-2 hidden"
						>
							Error
						</p>
						<div className="col-span-2">
							<button
								onClick={handleSubmit}
								className="disabled:bg-green-200 py-3 text-base font-medium rounded text-acento bg-primario w-full hover:bg-secundario transition duration-300"
								disabled={loading}
							>
								{textos.contact.btn}
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contact;
