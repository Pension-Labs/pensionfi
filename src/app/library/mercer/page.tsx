'use client';
import React, { useContext } from 'react';
// import GoBiblioteca from '../GoBiblioteca'
const Mercer = () => {
	// const { handleAllDropdowns } = useContext(IdiomaContext)
	return (
		<div
			// onClick={handleAllDropdowns}
			className="w-full min-h-screen flex flex-col px-2"
		>
			<h1 className="text-center font-bold text-2xl">Mercer</h1>
			<ul className="mb-4 flex flex-col gap-y-2 text-blue-500">
				<li className="underline hover:text-blue-600">
					<a href="#" target="_blank">
						Mercer CFA Institute Global Pension Index, Pension Reforms in
						challenging times 2021
					</a>
				</li>
			</ul>
			{/* <GoBiblioteca /> */}
		</div>
	);
};

export default Mercer;
