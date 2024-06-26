'use client';
import React, { useContext } from 'react';
import book1 from '../../assets/img/book1.png';
import book2 from '../../assets/img/book2.png';
import book3 from '../../assets/img/book3.png';
import book4 from '../../assets/img/book4.png';
import book5 from '../../assets/img/book5.png';
import book6 from '../../assets/img/book6.png';
import book7 from '../../assets/img/book7.png';
import { IdiomaContext } from '@/Context/IdiomaContext';
import Link from 'next/link';
import Image from 'next/image';
const Biblioteca = () => {
	const { textos, handleAllDropdowns } = useContext(IdiomaContext);
	return (
		<div onClick={handleAllDropdowns} className="w-full flex flex-col px-2">
			<h1 className="text-center font-bold text-2xl">{textos.library.title}</h1>
			<h2 className="text-center italic text-gray-400 font-semibold mb-4">
				{textos.library.sub}
			</h2>
			<p className="text-center mb-4">{textos.library.desc}</p>
			<ul
				role="list"
				className="grid grid-cols-2 gap-x-8 w-full lg:w-2/3 lg:h-[600px] md:grid-cols-3 m-auto gap-y-16 md:col-span-3"
			>
				<li className="">
					<Link href="/library/robertmerton">
						<div className="flex relative justify-center w-full">
							<p className="absolute font-semibold py-2 text-center bg-white w-2/3 mt-6">
								Robert Merton
							</p>
							<Image src={book2} alt="" />
						</div>
					</Link>
				</li>
				<li className="">
					<Link href="/library/oecd">
						<div className="flex relative justify-center  w-full">
							<p className="absolute font-semibold py-2 text-center bg-white w-2/3 mt-6">
								OECD
							</p>

							<Image src={book1} alt="" />
						</div>
					</Link>
				</li>
				<li className="">
					<Link href="/library/fenuchile">
						<div className="flex relative justify-center w-full">
							<p className="absolute font-semibold py-2 text-center bg-white w-2/3 mt-6">
								FEN, UChile
							</p>
							<Image src={book3} alt="" />
						</div>
					</Link>
				</li>
				<li className="">
					<Link href="/library/fiap">
						<div className="flex relative justify-center w-full">
							<p className="absolute font-semibold py-2 text-center bg-white w-2/3 mt-6">
								FIAP
							</p>
							<Image src={book4} alt="" />
						</div>
					</Link>
				</li>
				<li className="">
					<Link href="/library/mercer">
						<div className="flex relative justify-center w-full">
							<p className="absolute font-semibold py-2 text-center bg-white w-2/3 mt-6">
								Mercer
							</p>
							<Image src={book5} alt="" />
						</div>
					</Link>
				</li>
				<li className="">
					<Link href="/library/oliviamitchell">
						<div className="flex relative justify-center w-full">
							<p className="absolute font-semibold py-2 text-center bg-white w-2/3 mt-6">
								Olivia Mitchell
							</p>
							<Image src={book7} alt="" />
						</div>
					</Link>
				</li>
				<li className="">
					<Link href="/library/others">
						<div className="flex relative justify-center w-full">
							<p className="absolute font-semibold py-2 text-center bg-white w-2/3 mt-6">
								Otros
							</p>
							<Image src={book6} alt="" />
						</div>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Biblioteca;
