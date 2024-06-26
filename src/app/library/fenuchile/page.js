'use client';
import React, { useContext } from 'react';

import { IdiomaContext } from '@/Context/IdiomaContext';
import GoBiblioteca from '@/componets/GoBiblioteca';

const Fen = () => {
	const { handleAllDropdowns } = useContext(IdiomaContext);
	return (
		<div
			onClick={handleAllDropdowns}
			className="w-full min-h-screen flex flex-col px-2"
		>
			<h1 className="text-center font-bold text-2xl">Fen</h1>
			<ul className="mb-4 flex flex-col gap-y-2 text-blue-500">
				<li className="underline hover:text-blue-600">
					<a href="/books/IREF-S-20-01407.pdf" download="gender_policies">
						Gender policies, governance and financial inclusion, Jose Luis Ruiz,
						2020
					</a>
				</li>
				<li className="underline hover:text-blue-600">
					<a
						href="/books/Clase_A_Hipoteca_reversa.pdf"
						download="hipoteca_reversa"
					>
						Hipoteca reversa, Jose Luis Ruiz
					</a>
				</li>
				<li className="underline hover:text-blue-600">
					<a
						href="/books/biblio-fen-el-sistema-de-pensiones-administrado-por-el-sector-privado-en-chile-un-analisis-institucional.pdf"
						download="papc"
					>
						El sistema de pensiones administrado por el sector privado en chile,
						2000
					</a>
				</li>
				<li className="underline hover:text-blue-600">
					<a
						href="/books/INFORME DESEMPEÑO FINANCIERO.pdf"
						download="INFORME DESEMPEÑO FINANCIERO"
					>
						Tamaño de los fondos de pensiones y su desempeño financiero,
						Patricio Arrau, 1997
					</a>
				</li>
			</ul>
			<GoBiblioteca />
		</div>
	);
};

export default Fen;
