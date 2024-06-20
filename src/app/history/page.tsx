'use client';
import React, { useContext } from 'react';
import { useIdiomaContext } from '../../Context/IdiomaContext';

const History = () => {
	const { textos } = useIdiomaContext();
	return (
		<div className="w-full flex flex-col px-2">
			<h1 className="text-center font-bold text-2xl">{textos.history.title}</h1>
			<h2 className="text-center italic text-gray-400 font-semibold mb-4">
				{textos.history.sub}
			</h2>
			<div className="flex flex-col gap-y-2 md:gap-y-6">
				{textos.history.desc}
			</div>
		</div>
	);
};

export default History;
