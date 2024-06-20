'use client';
import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
import Image from 'next/image';
import { useIdiomaContext } from '../../Context/IdiomaContext';
import book1 from '../../assets/img/book1.png';
import book2 from '../../assets/img/book2.png';
import book3 from '../../assets/img/book3.png';
import book4 from '../../assets/img/book4.png';
import book5 from '../../assets/img/book5.png';
import book6 from '../../assets/img/book6.png';
import book7 from '../../assets/img/book7.png';
import Link from 'next/link';
const URL = 'window.location.href';
const Biblioteca = () => {
	const { textos } = useIdiomaContext();

	return (
		<div className="w-full flex flex-col px-2">
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
					<Link href="robert-merton">
						<div className="flex relative justify-center w-full">
							<p className="absolute font-semibold py-2 text-center bg-white w-2/3 mt-6">
								Robert Merton
							</p>
							<Image alt="Robert Merton " src={book2} />
							{/* <img src={book2} className=" min-w-full w-full" alt="" /> */}
						</div>
					</Link>
				</li>
				<li className="">
					<Link href="oecd">
						<div className="flex relative justify-center  w-full">
							<p className="absolute font-semibold py-2 text-center bg-white w-2/3 mt-6">
								OECD
							</p>
							<Image alt="OECD" src={book1} />
							{/* <img src={book1} className=" min-w-full w-full" alt="" /> */}
						</div>
					</Link>
				</li>
				<li className="">
					<Link href="fen-uchile">
						<div className="flex relative justify-center w-full">
							<p className="absolute font-semibold py-2 text-center bg-white w-2/3 mt-6">
								FEN, UChile
							</p>
							<Image alt="FEN, UChile" src={book3} />
							{/* <img src={book3} className=" min-w-full w-full" alt="" /> */}
						</div>
					</Link>
				</li>
				<li className="">
					<Link href="fiap">
						<div className="flex relative justify-center w-full">
							<p className="absolute font-semibold py-2 text-center bg-white w-2/3 mt-6">
								FIAP
							</p>
							<Image alt="FIAP" src={book4} />
							{/* <img src={book4} className=" min-w-full w-full" alt="" /> */}
						</div>
					</Link>
				</li>
				<li className="">
					<Link href="mercer">
						<div className="flex relative justify-center w-full">
							<p className="absolute font-semibold py-2 text-center bg-white w-2/3 mt-6">
								Mercer
							</p>
							<Image alt="Mercer" src={book5} />
							{/* <img src={book5} className=" min-w-full w-full" alt="" /> */}
						</div>
					</Link>
				</li>
				<li className="">
					<Link href="olivia-mitchell">
						<div className="flex relative justify-center w-full">
							<p className="absolute font-semibold py-2 text-center bg-white w-2/3 mt-6">
								Olivia Mitchell
							</p>
							<Image alt="Olivia Mitchell" src={book7} />
							{/* <img src={book7} className=" min-w-full w-full" alt="" /> */}
						</div>
					</Link>
				</li>
				<li className="">
					<Link href="otros">
						<div className="flex relative justify-center w-full">
							<p className="absolute font-semibold py-2 text-center bg-white w-2/3 mt-6">
								Otros
							</p>
							<Image alt="Otros" src={book6} />
							{/* <img src={book6} className=" min-w-full w-full" alt="" /> */}
						</div>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Biblioteca;
