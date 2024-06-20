'use client';
import React, { useState, useContext } from 'react';
import useRecaptchaV3 from '../../hooks/useRecaptchaV3';
import { useIdiomaContext } from '../../Context/IdiomaContext';

const ContactAsesores = () => {
	const [name, setName] = useState('');
	const [saldo, setSaldo] = useState('');
	const [edad, setEdad] = useState('');
	const [genero, setGenero] = useState('');
	const [loading, setLoading] = useState(false);
	const [mail, setMail] = useState('');
	const [telefono, setTelefono] = useState('');
	const [whatsapp, setWhatsapp] = useState('');
	// const [medio, setMedio] = useState('')
	// const [medio_input, setMedioInput] = useState('')
	const [pension, setPension] = useState('');
	const { textos } = useIdiomaContext();
	let emptyField = false;
	const executeRecaptcha = useRecaptchaV3({
		SITE_KEY: 'import.meta.env.VITE_APP_RECAPTCHA_SITEKEY',
	});
	const URL = 'window.location.href';
	const medio_error = document.getElementById('medio_error');
	const tel_error = document.getElementById('tel_error');
	const mail_error = document.getElementById('mail_error');
	const ws_error = document.getElementById('ws_error');
	const correcto = document.getElementById('respuesta');
	const name_error = document.getElementById('name_error');
	const genero_error = document.getElementById('genero_error');
	const edad_error = document.getElementById('edad_error');
	const pension_error = document.getElementById('pension_error');
	const saldo_error = document.getElementById('saldo_error');
	const error = document.getElementById('error');
	const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
	const containNumbers = /\d/;
	const emailFormat =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	const handleSubmit = async e => {
		e.preventDefault();

		//se ocultan los campos de error en caso de ser visibles antes de enviar el formulario
		medio_error.classList.add('hidden');
		tel_error.classList.add('hidden');
		mail_error.classList.add('hidden');
		ws_error.classList.add('hidden');
		correcto.classList.add('hidden');
		error.classList.add('hidden');
		name_error.classList.add('hidden');
		genero_error.classList.add('hidden');
		edad_error.classList.add('hidden');
		saldo_error.classList.add('hidden');

		setLoading(true);
		if (!name || specialChars.test(name) || containNumbers.test(name)) {
			name_error.classList.remove('hidden');
			emptyField = true;
		}

		if (!genero) {
			genero_error.classList.remove('hidden');
			emptyField = true;
		}
		if (!edad || Number(edad) === 0) {
			edad_error.classList.remove('hidden');
			emptyField = true;
		}

		if (telefono && isNaN(Number(telefono))) {
			tel_error.classList.remove('hidden');
			emptyField = true;
		}
		if (whatsapp && isNaN(Number(whatsapp))) {
			ws_error.classList.remove('hidden');
			emptyField = true;
		}
		if (mail && !emailFormat.test(mail)) {
			mail_error.innerHTML = textos.assesors.form.response.mail;
			mail_error.classList.remove('hidden');
			emptyField = true;
		}
		if (!saldo || Number(saldo) === 0) {
			saldo_error.classList.remove('hidden');
			emptyField = true;
		}
		if (!pension) {
			pension_error.classList.remove('hidden');
			emptyField = true;
		}
		if (!mail && !telefono && !whatsapp) {
			medio_error.classList.remove('hidden');
			emptyField = true;
		}
		const recaptchaToken = await executeRecaptcha('AssesorContactFormCaptcha');
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
		const data = {
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
		};

		const apiUrl = import.meta.env.VITE_APP_API_URL || window.location.origin;
		emptyField && setLoading(false);
		!emptyField &&
			(await fetch(`${apiUrl}/contactar-asesores`, {
				method: 'post',
				headers: { 'content-type': 'application/json' },
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
					console.log(response);
					correcto.classList.remove('hidden');
				})
				.catch(err => {
					error.innerHTML = err.message;
					error.classList.remove('hidden');
					console.log(err);
				})
				.finally(() => {
					setLoading(false);
					setTimeout(() => {
						correcto.classList.add('hidden');
						error.classList.add('hidden');
					}, 6000);
				}));
	};
	return (
		<div
			// onClick={handleAllDropdowns}
			className="w-full flex flex-col md:flex-row"
		>
			<div className="w-full md:w-1/2 lg:ms-auto mx-auto  ">
				<h1 className="font-bold text-2xl text-center">
					{textos.assesors.form.title}
				</h1>
				<h2 className="font-semibold text-xl text-center">
					{textos.assesors.title}
				</h2>
				<p className="mb-2">{textos.assesors.desc.p1}</p>
				<p className="mb-2">{textos.assesors.desc.p2}</p>
				<p className="mb-2">{textos.assesors.desc.p3}</p>
				<p className="mb-2">{textos.assesors.desc.p4}</p>
				<div className="py-8 w-full px-7 rounded-md bg-white">
					<form className="" action="" method="POST">
						<div className="grid gap-2">
							<input
								type="text"
								id="fname"
								onChange={e => setName(e.target.value)}
								name="fname"
								placeholder={textos.assesors.form.name}
								className="w-full col-span-2 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-primario "
								required
							/>
							<span
								id="name_error"
								className="text-error_acento text-sm mb-2 hidden"
							>
								{textos.assesors.form.response.name}
							</span>
							<div className="col-span-2">
								<select
									id="genero"
									name="genero"
									value={genero}
									onChange={e => setGenero(e.target.value)}
									className="appearance-none w-full border border-gray-300 bg-white rounded-md py-2 px-3 focus:outline-none focus:border-primario"
									required
								>
									<option className="text-[#919191] " value="">
										{textos.assesors.form.sex.sex}
									</option>
									<option value="Hombre">{textos.assesors.form.sex.man}</option>
									<option value="Mujer">
										{textos.assesors.form.sex.woman}
									</option>
								</select>
								<span
									id="genero_error"
									className="text-left text-error_acento text-sm mb-2 hidden"
								>
									{textos.assesors.form.response.sex}
								</span>
							</div>
							<input
								type="number"
								id="edad"
								name="edad"
								value={edad}
								onChange={e => setEdad(e.target.value)}
								placeholder={textos.assesors.form.age}
								className="w-full col-span-2 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-primario "
								required
							/>
							<span
								id="edad_error"
								className="text-error_acento text-sm mb-2 hidden"
							>
								{textos.assesors.form.response.age}
							</span>
							<input
								type="number"
								id="saldo"
								name="saldo"
								value={saldo}
								onChange={e => setSaldo(e.target.value)}
								placeholder={textos.assesors.form.balance}
								className="w-full col-span-2 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-primario "
								required
							/>
							<span
								id="saldo_error"
								className="text-error_acento text-sm mb-2 hidden"
							>
								{textos.assesors.form.response.balance}
							</span>
							{/* <div className='col-span-2'>
								<select
									id='genero'
									name='medio'
									value={medio}
									onChange={e => setMedio(e.target.value)}
									className='appearance-none w-full border border-gray-300 bg-white rounded-md py-2 px-3 focus:outline-none focus:border-primario'
									required
								>
									<option className='text-[#919191] ' value=''>
										{textos.assesors.form.medios.medio}
									</option>
									<option value='email'>Email</option>
									<option value='tel'>{textos.assesors.form.medios.tel}</option>
									<option value='ws'>Whatsapp</option>
								</select>
							</div> */}
							<div className="col-span-2">
								<select
									id="tipo_pension"
									name="tipo_pension"
									value={pension}
									onChange={e => setPension(e.target.value)}
									className="appearance-none w-full border border-gray-300 bg-white rounded-md py-2 px-3 focus:outline-none focus:border-primario"
									required
								>
									<option className="text-[#919191] " value="">
										{textos.assesors.form.pen.title}
									</option>
									<option value="pension por vejez">
										{textos.assesors.form.pen.old}
									</option>
									<option value="pension anticipada">
										{textos.assesors.form.pen.ant}
									</option>
									<option value="pension por invalidez">
										{textos.assesors.form.pen.inv}
									</option>
									<option value="pension por sobrevivencia">
										{textos.assesors.form.pen.sup}
									</option>
								</select>
							</div>
							<span
								id="pension_error"
								className="text-error_acento text-sm mb-2 hidden"
							>
								{textos.assesors.form.response.pension}
							</span>
							<input
								type="text"
								id="telefono"
								name="telefono"
								value={telefono}
								onChange={e => setTelefono(e.target.value)}
								placeholder={textos.assesors.form.medios.tel}
								className="w-full col-span-2 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-primario "
							/>
							<span
								id="tel_error"
								className="text-error_acento text-sm mb-2 hidden"
							>
								{textos.assesors.form.response.tel}
							</span>
							<input
								type="text"
								id="whatsapp"
								name="whatsapp"
								value={whatsapp}
								onChange={e => setWhatsapp(e.target.value)}
								placeholder="Whatsapp"
								className="w-full col-span-2 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-primario "
							/>
							<span
								id="ws_error"
								className="text-error_acento text-sm mb-2 hidden"
							>
								{textos.assesors.form.response.tel}
							</span>
							<input
								type="email"
								id="email"
								name="email"
								value={mail}
								onChange={e => setMail(e.target.value)}
								placeholder="E-mail"
								className="w-full col-span-2 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-primario "
							/>
							<span
								id="mail_error"
								className="text-error_acento text-sm mb-2 hidden"
							></span>
							{/* <div className='col-span-2'>
								<input
									type='text'
									id='medio_input'
									value={medio_input}
									onChange={e => setMedioInput(e.target.value)}
									name='medio_input'
									placeholder=''
									className='w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-primario'
									required
								/>
							</div> */}
							<span
								id="medio_error"
								className="text-error_acento text-sm mb-2 hidden"
							>
								{textos.assesors.form.response.medio}
							</span>
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
										{textos.assesors.form.response.loading}
									</span>
								</div>
							)}
							<p
								id="respuesta"
								className="transition-all bg-secundario text-acento text-center py-2 col-span-2 hidden"
							>
								{textos.assesors.form.response.success}
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
									{textos.assesors.form.btn}
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ContactAsesores;
