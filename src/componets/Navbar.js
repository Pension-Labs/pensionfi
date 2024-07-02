'use client';

import React, { useContext, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { FaRegWindowClose } from 'react-icons/fa';
import logo from '../assets/img/logo.png';
import es from '../assets/img/es.png';
import en from '../assets/img/en.png';
import { MdArrowDropDown } from 'react-icons/md';
import { CgMenuBoxed } from 'react-icons/cg';
import { IdiomaContext } from '../Context/IdiomaContext';
import Image from 'next/image';
import Link from 'next/link';
const Menu = () => {
	const PATHNAME = usePathname();
	console.log(PATHNAME);
	const {
		textos,
		handleTraduce,
		dropdownAbout,
		setDropdownAbout,
		dropdownAprende,
		setDropdownAprende,
		dropdownProducto,
		setDropdownProducto,
		isOpen,
		setIsOpen,
		handleAllDropdowns,
		isChecked,
	} = useContext(IdiomaContext);
	const [Menu, setMenu] = useState(false);
	useEffect(() => {
		// Función para actualizar el estado basado en el ancho de la pantalla
		const updateScreenWidth = () => {
			if (window.innerWidth >= 768) {
				setMenu(true);
			} else {
				setMenu(false);
			}
		};

		// Llama a la función cuando el componente se monta
		updateScreenWidth();

		// Añade un event listener para detectar cambios en el tamaño de la ventana
		window.addEventListener('resize', updateScreenWidth);

		// Limpia el event listener cuando el componente se desmonta
		return () => {
			window.removeEventListener('resize', updateScreenWidth);
		};
	}, []);
	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	const toggleProducto = () => {
		setDropdownAprende(false);
		setDropdownAbout(false);
		setDropdownProducto(!dropdownProducto);
	};
	const toggleAprende = () => {
		setDropdownAprende(!dropdownAprende);
		setDropdownProducto(false);
		setDropdownAbout(false);
	};
	const toggleAbout = () => {
		setDropdownAprende(false);
		setDropdownProducto(false);
		setDropdownAbout(!dropdownAbout);
	};
	const blurAprende = () => {
		setIsOpen(false);
		setDropdownAprende(false);
	};
	const blurProducto = () => {
		setIsOpen(false);
		setDropdownProducto(false);
	};
	const BlurAbout = () => {
		setIsOpen(false);
		setDropdownAbout(false);
	};

	return Menu ? (
		<nav className="bg-white border-gray-200 w-full flex">
			<div className="w-full max-w-screen-xl flex bg-white justify-between items-center  p-4">
				<Link href="/">
					<Image src={logo} width={120} alt="Pensión FI Logo" />
				</Link>

				<ul className="flex flex-row items-center gap-x-4 font-medium text-sm lg:text-lg">
					<li className="text-gray-600 hover:text-primario focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primario">
						<Link href="/">{textos.menu.home}</Link>
					</li>
					<div className="relative group">
						<button
							onClick={toggleAbout}
							className="flex items-center text-gray-600 hover:text-primario focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primario"
						>
							<span>{textos.menu.about}</span>
							<MdArrowDropDown className="w-5 h-5 -ml-1" />
						</button>
						<div
							className={`${
								dropdownAbout ? 'flex' : 'hidden'
							} absolute flex-col  bg-white rounded-md shadow-lg mt-2 w-32 p-4 gap-y-2`}
						>
							<li
								onClick={BlurAbout}
								className="text-gray-600 hover:text-primario focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primario"
							>
								<Link href="/believe">{textos.menu.believe}</Link>
							</li>
							<li
								onClick={BlurAbout}
								className="text-gray-600 hover:text-primario focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primario"
							>
								<Link href="/about">{textos.menu.who}</Link>
							</li>
							<li
								onClick={BlurAbout}
								className="text-gray-600 hover:text-primario focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primario"
							>
								<Link href="history">{textos.menu.history}</Link>
							</li>
						</div>
					</div>
					<div className="relative group">
						<button
							onClick={toggleProducto}
							className="flex items-center text-gray-600 hover:text-primario focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primario"
						>
							<span>{textos.menu.product}</span>
							<MdArrowDropDown className="w-5 h-5 -ml-1" />
						</button>
						<div
							className={`${
								dropdownProducto ? 'flex' : 'hidden'
							} absolute z-50 flex-col bg-white rounded-md shadow-lg mt-2 w-32 p-4 gap-y-2`}
						>
							<li
								onClick={blurProducto}
								className="text-gray-600 hover:text-primario focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primario"
							>
								<Link href="contactadvisors">{textos.menu.advisors}</Link>
							</li>
							<a
								onClick={blurProducto}
								className="text-gray-600 hover:text-primario"
								href="https://simulador.pensionfi.com/"
								target="_blank"
							>
								{textos.menu.pensionfi_simulator}
							</a>
							<a
								onClick={blurProducto}
								className="text-gray-600 hover:text-primario"
								href="https://www.decidetu.cl/"
								target="_blank"
							>
								{textos.menu.simulator}
							</a>
						</div>
					</div>
					<div className="relative group">
						<button
							onClick={toggleAprende}
							className="flex items-center text-gray-600 hover:text-primario focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primario"
						>
							<span>{textos.menu.learn}</span>
							<MdArrowDropDown className="w-5 h-5 -ml-1" />
						</button>
						<div
							className={`${
								dropdownAprende ? 'flex' : 'hidden'
							} absolute z-50 flex-col bg-white rounded-md shadow-lg mt-2 w-32 p-4 gap-y-2`}
						>
							<li
								onClick={blurAprende}
								className="text-gray-600 hover:text-primario focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primario"
							>
								<Link href="/data">{textos.menu.data}</Link>
							</li>
							<li
								onClick={blurAprende}
								className="text-gray-600 hover:text-primario focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primario"
							>
								<Link href="/library">{textos.menu.library}</Link>
							</li>
						</div>
					</div>
					<li className="text-gray-600 hover:text-primario focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primario">
						<Link href="/contact">{textos.menu.contact}</Link>
					</li>
				</ul>
			</div>
		</nav>
	) : (
		<nav className="bg-white border-gray-200 w-full">
			<div className="max-w-screen-xl flex flex-wrap justify-between items-center mx-auto p-4">
				<li to="/">
					<Image src={logo} width={120} alt="Pensión FI Logo" />
				</li>

				{!isOpen && (
					<div className="flex">
						<CgMenuBoxed
							onClick={toggleMenu}
							className="text-2xl z-[2000] cursor-pointer text-primario rounded-lg hover:bg-secundario focus:outline-none focus:ring-2 focus:ring-primario"
						/>
					</div>
				)}

				<div
					className={`${
						isOpen ? 'flex' : 'hidden'
					} w-full flex-col z-[800] absolute top-0 left-0`}
				>
					<div className="flex justify-end p-4">
						<FaRegWindowClose
							onClick={toggleMenu}
							className="text-2xl z-[2000] cursor-pointer text-primario rounded-lg hover:bg-secundario focus:outline-none focus:ring-2 focus:ring-primario"
						/>
					</div>
					<ul className="flex flex-col items-center text-center p-12 mt-4 gap-y-4 font-medium border bg-white border-gray-100 rounded-lg text-sm lg:text-lg">
						<li
							onClick={toggleMenu}
							className="text-primario font-bold underline text-sm lg:text-lg"
						>
							{textos.menu.home}
						</li>
						<div className="flex items-center justify-center">
							<div className="relative group">
								<button
									onClick={toggleAbout}
									className="inline-flex relative w-full text-sm lg:text-lg font-medium text-gray-600 bg-white rounded-md shadow-sm"
								>
									<span className="text-sm lg:text-lg">
										{textos.menu.about}
									</span>
									<MdArrowDropDown className="w-5 h-5 -mr-1" />
								</button>
								<div
									className={`${
										dropdownAbout ? 'block' : 'hidden'
									} absolute z-50 p-2 flex flex-col right-0 mt-2 rounded-md shadow-lg bg-white w-40 ring-1 ring-black ring-opacity-5 space-y-1`}
								>
									<li
										onClick={BlurAbout}
										className="text-primario font-bold underline text-sm lg:text-lg"
									>
										{textos.menu.believe}
									</li>
									<li
										onClick={BlurAbout}
										className="text-primario font-bold underline text-sm lg:text-lg"
									>
										{textos.menu.who}
									</li>
									<li
										onClick={BlurAbout}
										className="text-primario font-bold underline text-sm lg:text-lg"
									>
										<p>{textos.menu.history}</p>
									</li>
								</div>
							</div>
						</div>
						<div className="flex items-center justify-center">
							<div className="relative group">
								<button
									onClick={toggleProducto}
									className="inline-flex justify-center w-full text-sm lg:text-lg font-medium text-gray-600 bg-white rounded-md shadow-sm"
								>
									<span className="text-sm lg:text-lg">
										{textos.menu.product}
									</span>
									<MdArrowDropDown className="w-5 h-5 -mr-1" />
								</button>
								<div
									className={`${
										dropdownProducto ? 'block' : 'hidden'
									} absolute z-50 flex flex-col right-0 mt-2 rounded-md shadow-lg bg-white w-52 ring-1 ring-black ring-opacity-5 p-2 space-y-1`}
								>
									<li
										onClick={blurProducto}
										className="text-primario font-bold underline text-sm lg:text-lg"
									>
										{textos.menu.advisors}
									</li>
									<a
										onClick={blurProducto}
										className="text-gray-600 text-sm lg:text-lg"
										href="https://simulador.pensionfi.com/"
										target="_blank"
									>
										{textos.menu.pensionfi_simulator}
									</a>
									<a
										onClick={blurProducto}
										className="text-gray-600 text-sm lg:text-lg"
										href="https://www.decidetu.cl/"
										target="_blank"
									>
										{textos.menu.simulator}
									</a>
								</div>
							</div>
						</div>

						<div className="flex items-center justify-center">
							<div className="relative group">
								<button
									onClick={toggleAprende}
									className="inline-flex justify-center w-full text-sm lg:text-lg font-medium text-gray-600 bg-white rounded-md shadow-sm"
								>
									<span className="text-sm lg:text-lg">
										{textos.menu.learn}
									</span>
									<MdArrowDropDown className="w-5 h-5 -mr-1" />
								</button>
								<div
									className={`${
										dropdownAprende ? 'block' : 'hidden'
									} absolute z-50 flex flex-col right-0 mt-2 rounded-md shadow-lg bg-white w-40 ring-1 ring-black ring-opacity-5 p-1 space-y-1`}
								>
									<li
										onClick={blurAprende}
										className="text-primario font-bold underline text-sm lg:text-lg"
									>
										{textos.menu.data}
									</li>
									<li
										onClick={blurAprende}
										className="text-primario font-bold underline text-sm lg:text-lg"
									>
										{textos.menu.library}
									</li>
								</div>
							</div>
						</div>

						<li
							onClick={toggleMenu}
							className="text-primario font-bold underline text-sm lg:text-lg"
						>
							{textos.menu.contact}
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Menu;
