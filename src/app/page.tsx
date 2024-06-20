'use client';
import { useContext, useState } from 'react';
import useRecaptchaV3 from '../hooks/useRecaptchaV3';
let emptyField: boolean = false;
import { FaCalculator } from 'react-icons/fa6';
import { RiTeamFill } from 'react-icons/ri';
import { useIdiomaContext } from '@/Context/IdiomaContext';
export default function Home() {
	const executeRecaptcha = useRecaptchaV3({
		SITE_KEY: 'import.meta.env.VITE_APP_RECAPTCHA_SITEKEY',
	});
	const { textos } = useIdiomaContext();
	const [correo, setMail] = useState('');
	const [name, setName] = useState('');
	const name_error = document.getElementById('name_error');
	const email_error = document.getElementById('email_error');
	const correcto = document.getElementById('respuesta');
	const error = document.getElementById('error');
	const emailFormat =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
	const containNumbers = /\d/;
	emptyField = false;
	const URL = window.location.href;
	const handleJoin = async e => {
		e.preventDefault();
		correcto.classList.add('hidden');
		error.classList.add('hidden');
		name_error.classList.add('hidden');
		email_error.classList.add('hidden');
		if (!name || specialChars.test(name) || containNumbers.test(name)) {
			name_error.classList.remove('hidden');
			emptyField = true;
		}
		if (!correo || !emailFormat.test(correo)) {
			email_error.classList.remove('hidden');
			emptyField = true;
		}
		const recaptchaToken = await executeRecaptcha('newsletteraction');
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
			correo,
			recaptchaToken,
			FECHA: formattedDate,
		};
		const apiUrl = import.meta.env.VITE_APP_API_URL || window.location.origin;

		!emptyField &&
			(await fetch(`${apiUrl}/waitlist`, {
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
					correcto.classList.remove('hidden');
					setMail('');
					setName('');
				})
				.catch(err => {
					error.innerHTML = err.message;
					error.classList.remove('hidden');
				})
				.finally(() => {
					setTimeout(() => {
						correcto.classList.add('hidden');
						error.classList.add('hidden');
					}, 100000);
				}));
	};
	return (
		<div
			// onClick={handleAllDropdowns}
			className="flex flex-col  w-full py-6 items-center gap-y-8 text-center"
		>
			<div className="flex flex-col-reverse md:flex-row justify-center items-center">
				<div className="w-full flex flex-col items-center justify-center">
					<h1 className="text-3xl md:text-4xl mb-6 font-light">
						{textos.home.header}
					</h1>
					<p className=" text-center mb-2  font-bold">
						{textos.home.newsletter.title}
					</p>
					<form
						action=""
						className="flex  flex-col justify-center gap-y-1 md:gap-y-0 md:flex-row w-2/3 text-left"
					>
						<div className="flex flex-col  w-full md:w-1/3 ">
							<input
								type="text"
								placeholder={textos.home.newsletter.name}
								value={name}
								onChange={e => setName(e.target.value)}
								className="shadow-[0_20px_50px_rgba(120,_253,_206,_0.7)]  md:mr-2 col-span-2 border border-acento rounded-md py-2 px-3 focus:outline-none focus:border-primario "
							/>
							<span
								id="name_error"
								className="text-error_acento text-sm hidden"
							>
								{textos.home.newsletter.response.name}
							</span>
						</div>
						<div className="flex flex-col w-full md:w-1/3">
							<input
								type="email"
								placeholder="Email"
								value={correo}
								onChange={e => setMail(e.target.value)}
								className="shadow-[0_20px_50px_rgba(120,_253,_206,_0.7)] md:mr-2 col-span-2 border border-acento rounded-md py-2 px-3 focus:outline-none focus:border-primario "
							/>
							<span
								id="email_error"
								className="text-error_acento text-sm hidden"
							>
								{textos.home.newsletter.response.email}
							</span>
						</div>
						<button
							onClick={handleJoin}
							className="bg-primario text-acento w-full md:w-28 h-10 rounded-md hover:bg-secundario"
						>
							{textos.home.newsletter.btn}
						</button>
					</form>
					<p
						id="respuesta"
						className="transition-all w-2/3 bg-secundario text-acento text-center py-2 col-span-2 hidden "
					>
						{textos.home.newsletter.response.ok}
					</p>
					<p
						id="error"
						className=" bg-error text-error_acento py-2 text-center col-span-2 hidden "
					></p>
				</div>
			</div>
			<div className="flex flex-col justify-center gap-y-4 w-full">
				<h2 className="text-4xl text-primario font-semibold">
					{textos.home.products.title}
				</h2>
				<div className="flex flex-col md:flex-row items-center justify-center w-full md:h-96 ">
					<div className="w-full md:w-1/2 lg:w-1/3 flex gap-y-2 flex-col text-left h-full justify-between py-8 px-16 ">
						<div className="flex flex-col w-full">
							<FaCalculator className="text-sky-500 text-3xl  md:text-6xl md:min-h-10 md:mb-2  " />
							<h3 className="text-2xl  font-semibold">
								{textos.home.products.stitle}
							</h3>
							<p className="">{textos.home.products.sdesc}</p>
						</div>
						<div className="flex flex-row gap-x-4">
							<a
								className="border-2 border-acento text-acento py-2 px-4 rounded-md"
								href="https://www.decidetu.cl/"
								target="_blank"
							>
								{textos.home.products.sbtn}
							</a>
						</div>
					</div>
					<div className="w-11/12  md:w-1/2 lg:w-1/3 flex gap-y-2 flex-col border-solid border-2 border-gray-400 justify-between h-full py-8 px-16 rounded-lg  shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] ">
						<div className="flex flex-col text-left w-full">
							<RiTeamFill className="text-rose-500 text-3xl md:text-6xl md:min-h-12 md:mb-2" />
							<h3 className="text-2xl  font-semibold">
								{textos.home.products.atitle}
							</h3>
							<p className="">{textos.home.products.adesc}</p>
						</div>
						<div className="flex flex-row gap-x-4">
							<button
								className="bg-primario text-emerald-600 py-2 px-4 rounded-md"
								// to="/contactar-asesor"
							>
								{textos.home.products.abtn}
							</button>
						</div>
					</div>
				</div>
			</div>

			<p>
				<button className="underline" >
					{textos.home.cta}
				</button>
			</p>
		</div>
	);
}
