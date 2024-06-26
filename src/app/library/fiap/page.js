'use client';
import GoBiblioteca from '@/componets/GoBiblioteca';
import { IdiomaContext } from '@/Context/IdiomaContext';
import React, { useContext } from 'react';
const Fiap = () => {
	const { handleAllDropdowns } = useContext(IdiomaContext);
	return (
		<div
			onClick={handleAllDropdowns}
			className="w-full min-h-screen flex flex-col px-2"
		>
			<h1 className="text-center font-bold text-2xl">Fiap</h1>
			<ul className="mb-4 flex flex-col gap-y-2 text-blue-500">
				<li className="underline hover:text-blue-600">
					<a
						href="/books/Las tendencias en los sistemas de pensiones en el mundo _ Diario Financiero.pdf"
						download="Las tendencias en los sistemas de pensiones en el mundo _ Diario Financiero"
					>
						Las tendencias de los sistemas de pensiones en el mundo, según FIAP,
						Agosto 2023
					</a>
				</li>
			</ul>
			<GoBiblioteca />
		</div>
	);
};

export default Fiap;
