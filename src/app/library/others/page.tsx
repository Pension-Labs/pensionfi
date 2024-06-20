'use client';
import React, { useContext } from 'react';
// import GoBiblioteca from '../GoBiblioteca'
const URL = window.location.origin;

const Otros = () => {
	return (
		<div
			// onClick={handleAllDropdowns}
			className="w-full min-h-screen flex flex-col px-2"
		>
			<h1 className="text-center font-bold text-2xl">Otros</h1>
			<ul className="mb-4 flex flex-col gap-y-2 text-blue-500">
				<li className="underline hover:text-blue-600">
					<a
						href={`${URL}/books/Pensiones_chile2023.pdf`}
						download="Pensiones_chile2023."
					>
						Reforma de pensiones Chile, Encuesta Cadem, Diciembre 2023.
					</a>
				</li>
				<li className="underline hover:text-blue-600">
					<a
						href={`${URL}/books/Fixed_and_Variable_Longevity_Annuities_in_Defined_Contribution Pl.pdf`}
						download="Fixed_and_Variable_Longevity_Annuities_in_Defined_Contribution Pl"
					>
						Fixed and variable annuities, 2023
					</a>
				</li>
				<li className="underline hover:text-blue-600">
					<a
						href={`${URL}/books/Rentas_Privadas_BiceLifePlan.pdf`}
						download="Rentas_Privadas_BiceLifePlan"
					>
						Renta Privadas Bice LifePlan
					</a>
				</li>
				<li className="underline hover:text-blue-600">
					<a href={`${URL}/books/Informe2022.pdf`} download="informe2022">
						Informe del estado de las microfinanzas Chile 2022
					</a>
				</li>
				<li className="underline hover:text-blue-600">
					<a
						href={`${URL}/books/ficha estadística previsional n°129-agosto 2023.pdf`}
						download="ficha estadística previsional n°129-agosto 2023"
					>
						Ficha estadistica previsional Chile, Agosto 2023
					</a>
				</li>
				<li className="underline hover:text-blue-600">
					<a href={`${URL}/books/deloitte.pdf`} download="deloitte">
						Deloitte 2022 Reforma previsional Boric
					</a>
				</li>
				<li className="underline hover:text-blue-600">
					<a href="#">Preserve MYGA Annuity</a>
				</li>
				<li className="underline hover:text-blue-600">
					<a
						href={`${URL}/books/2023_Retirement_Income_Pulse_Check.pdf`}
						download="2023_Retirement_Income_Pulse_Check"
					>
						Fidelity Q2 Retirement Analysis 2023
					</a>
				</li>
				<li className="underline hover:text-blue-600">
					<a
						href="https://www.df.cl/costo-fiscal-de-la-pgu-sube-29-en-primeros-seis-meses-de-implementacion"
						target="_blank"
					>
						Costo fiscal PGU
					</a>
				</li>
				<li className="underline hover:text-blue-600">
					<a
						href="https://www.visualcapitalist.com/worlds-100-biggest-pension-funds/"
						target="_blank"
					>
						100 fondos de pensiones más grandes del mundo . Visual Capitalist
					</a>
				</li>
				<li className="underline hover:text-blue-600">
					<a
						href={`${URL}/books/How Gloomy is the Retirement Outlook for Millennials_.pdf`}
						download="How Gloomy is the Retirement Outlook for Millennials"
					>
						How Gloomy is the retirement outlook for millennials ? 2022
					</a>
				</li>
				<li className="underline hover:text-blue-600">
					<a
						href={`${URL}/books/Memoria-Anual-InsurteChile-2022_.pdf`}
						download="Memoria-Anual-InsurteChile-2022"
					>
						Memoria annual Insurtech Chile 2022
					</a>
				</li>
				<li className="underline hover:text-blue-600">
					<a
						href={`${URL}/books/Presentation-Lusardi-EFAMA-Nov30.pdf`}
						download="Presentation-Lusardi-EFAMA-Nov30"
					>
						The importance of financial literacy, Lousardi, 2020
					</a>
				</li>
				<li className="underline hover:text-blue-600">
					<a
						href="https://journals.openedition.org/estetica/5747"
						target="_blank"
					>
						Diseñando un sistema de pensiones
					</a>
				</li>
				<li className="underline hover:text-blue-600">
					<a href="#" target="_blank">
						Reverse morgages risk profile
					</a>
				</li>
				<li className="underline hover:text-blue-600">
					<a
						href={`${URL}/books/chile-modalidad-pension-2023.pdf`}
						download="chile-modalidad-pension-2023"
					>
						Selección de modalidad de pensión Superintendencia de pensiones,
						Chile 2023
					</a>
				</li>
				<li className="underline hover:text-blue-600">
					<a
						href={`${URL}/books/society-of-actuaries.pdf`}
						download="society-of-actuaries"
					>
						Society of actuaries, sample exam questions life contingency, 2016
					</a>
				</li>
				<li className="underline hover:text-blue-600">
					<a
						href={`${URL}/books/designing-payout-phase.pdf`}
						download="designing-payout-phase"
					>
						Designing the payout phase in pension systems, 2010
					</a>
				</li>
				<li className="underline hover:text-blue-600">
					<a
						href={`${URL}/books/financial-market-history-full-book.pdf`}
						download="financial-market-history-full-book"
					>
						Financial Market History
					</a>
				</li>
				<li className="underline hover:text-blue-600">
					<a
						href={`${URL}/books/teoria-del-dinero-y-del-credito-de-ludwig-von-mises.pdf`}
						download="teoria-del-dinero-y-del-credito-de-ludwig-von-mises"
					>
						Teoría del dinero y del crédito, Ludwig von mises
					</a>
				</li>
			</ul>
			{/* <GoBiblioteca /> */}
		</div>
	);
};

export default Otros;
