'use client';
import React, { useContext } from 'react';
import { useIdiomaContext } from '../../Context/IdiomaContext';
const Datos = () => {
	const { textos } = useIdiomaContext();
	return (
		<div className="mb-4 px-2">
			<h1 className="text-2xl font-bold text-center">
				{textos.data.main_title}
			</h1>
			<p className="pb-2">{textos.data.desc}</p>
			<p className="pb-2">{textos.data.subtitle}</p>
			<h1 className="text-center text-xl">{textos.data.title}</h1>
			<div className="md:px-8 py-8 w-full mb-4">
				<div className="shadow overflow-hidden rounded border-b border-gray-200">
					<table className="min-w-full bg-white ">
						<thead className="bg-primario text-white">
							<tr>
								<th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
									{textos.data.table.col1title}
								</th>
								<th className="w-1/3 text-center py-3 px-4 uppercase font-semibold text-sm">
									{textos.data.table.col2title}
								</th>
							</tr>
						</thead>
						<tbody className="text-gray-700">
							<tr>
								<td className="w-1/3 text-left py-3 px-4">
									{textos.data.table.row1}
								</td>
								<td className="w-1/3 text-center py-3 px-4">11.731.653</td>
							</tr>
							<tr className="bg-gray-100">
								<td className="w-1/3 text-left py-3 px-4">
									{textos.data.table.row2}
								</td>
								<td className="w-1/3 text-center py-3 px-4">5.734.755</td>
							</tr>
							<tr>
								<td className="w-1/3 text-left py-3 px-4">
									{textos.data.table.row3}
								</td>
								<td className="w-1/3 text-center py-3 px-4">$10.660.000</td>
							</tr>
							<tr className="bg-gray-100">
								<td className="w-1/3 text-left py-3 px-4">
									{textos.data.table.row4}
								</td>
								<td className="w-1/3 text-center py-3 px-4">$1.142.888</td>
							</tr>
							<tr className="bg-gray-100">
								<td className="w-1/3 text-left py-3 px-4">
									{textos.data.table.row5}
								</td>
								<td className="w-1/3 text-center py-3 px-4">$17.213</td>
							</tr>
							<tr className="bg-gray-100">
								<td className="w-1/3 text-left py-3 px-4">
									{textos.data.table.row6}
								</td>
								<td className="w-1/3 text-center py-3 px-4">1.170.225</td>
							</tr>
							<tr className="bg-gray-100">
								<td className="w-1/3 text-left py-3 px-4">
									{textos.data.table.row7}
								</td>
								<td className="w-1/3 text-center py-3 px-4">8</td>
							</tr>
							<tr className="bg-gray-100">
								<td className="w-1/3 text-left py-3 px-4">
									{textos.data.table.row8}
								</td>
								<td className="w-1/3 text-center py-3 px-4">7</td>
							</tr>
							<tr className="bg-gray-100">
								<td className="w-1/3 text-left py-3 px-4">
									{textos.data.table.row9}
								</td>
								<td className="w-1/3 text-center py-3 px-4">50%</td>
							</tr>
							<tr className="bg-gray-100">
								<td className="w-1/3 text-left py-3 px-4">
									{textos.data.table.row10}
								</td>
								<td className="w-1/3 text-center py-3 px-4">28</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			{/* <p>¿Qué otros países te gustaría ver acá ? </p>
			<p className='mb-4'>
				<strong>Perú</strong>
			</p>
			<p>¿Qué otros datos te gustaría ver?</p>
			<p>¿Qué te pareció esta sección del 1 al 5 ?</p> */}
		</div>
	);
};

export default Datos;
