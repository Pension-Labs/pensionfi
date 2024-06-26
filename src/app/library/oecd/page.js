'use client';
import React, { useContext } from 'react';
import { IdiomaContext } from '@/Context/IdiomaContext';
import GoBiblioteca from '@/componets/GoBiblioteca';

const Oecd = () => {
	const { handleAllDropdowns } = useContext(IdiomaContext);
	return (
		<div
			onClick={handleAllDropdowns}
			className="w-full min-h-screen flex flex-col px-2"
		>
			<h1 className="text-center font-bold text-2xl">OECD</h1>
			<ul className="mb-4 flex flex-col gap-y-2 text-blue-500">
				<li className="underline hover:text-blue-600">
					<a
						href="/books/Pension-Markets-in-Focus-2021.pdf"
						download="Pension-Markets-in-Focus-2021"
					>
						Pension Markets in Focus 2021, OECD
					</a>
				</li>
				<li className="underline hover:text-blue-600">
					<a
						href="/books/Cobertura en pensiones-  Pensions at a Glance OCDE 2021.pdf"
						download="Cobertura en pensiones-  Pensions at a Glance OCDE 2021"
					>
						Pensions at a Glance 2021, OECD
					</a>
				</li>
				<li className="underline hover:text-blue-600">
					<a
						href="/books/Pension-Funds-in-Figures-2021.pdf"
						download="Pension-Funds-in-Figures-2021"
					>
						Pension funds in figures, 2021, OECD
					</a>
				</li>
				<li className="underline hover:text-blue-600">
					<a
						href="/books/Pension-Markets-in-Focus-2020.pdf"
						download="Pension-Markets-in-Focus-2020"
					>
						Pension Markets in Focus 2020, OECD
					</a>
				</li>
				<li className="underline hover:text-blue-600">
					<a
						href="/books/Global-Insurance-Market-Trends-2020.pdf"
						download="Global-Insurance-Market-Trends-2020"
					>
						Global Insurance market trends, 2020, OECD
					</a>
				</li>
				<li className="underline hover:text-blue-600">
					<a
						href="/books/national-annuity-markets.pdf"
						download="national-annuity-markets"
					>
						National Annuity Markets, Rob Rusconi
					</a>
				</li>
			</ul>
			<GoBiblioteca />
		</div>
	);
};

export default Oecd;
