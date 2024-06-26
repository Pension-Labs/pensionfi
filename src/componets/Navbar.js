'use client';
import React, { useContext } from 'react';
import { usePathname } from 'next/navigation';

import logo from '../assets/img/logo.png';
import es from '../assets/img/es.png';
import en from '../assets/img/en.png';
import { MdArrowDropDown } from 'react-icons/md';
import { CgMenuBoxed } from 'react-icons/cg';
import { IdiomaContext } from '../Context/IdiomaContext';
import Image from 'next/image';
import Link from 'next/link';
const Navbar = () => {
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

	return (
		<nav className="bg-white border-gray-200 w-full landscape:min-w-2/6 md:w-full md:flex md:flex-row md:justify-between">
			<div className="max-w-screen-xl flex md:w-full justify-between items-center mx-auto p-4">
				<Link href="/">
					<Image src={logo} width={128} alt="Pensión FI Logo" />
				</Link>
				<div className="flex md:order-1">
					<button
						type="button"
						onClick={toggleMenu}
						className="inline-flex z-[1000] items-center p-2 w-10 h-10 justify-center text-sm text-primario rounded-lg md:hidden hover:bg-secundario focus:outline-none focus:ring-2 focus:ring-primario"
					>
						<CgMenuBoxed />
					</button>
				</div>
				<div
					className="menu-container bg-white left-0 top-0 absolute z-[900] h-screen md:h-auto items-center justify-between w-full md:relative md:flex md:w-auto md:order-1"
					id="navbar-search"
				>
					<ul className="flex flex-col items-center text-center p-12 md:p-0 mt-4 gap-y-4 font-medium border bg-white border-gray-100 rounded-lg text-sm lg:text-lg md:flex-row md:gap-x-4 md:mt-0 md:border-0">
						<Link href="/" onClick={handleAllDropdowns}>
							<span className={PATHNAME === '/contact' ? '' : 'text-green-300'}>
								{textos.menu.home}
							</span>
						</Link>
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
									className={
										!dropdownAbout
											? 'hidden'
											: 'md:absolute z-50 p-2 flex flex-col right-0 mt-2 rounded-md shadow-lg bg-white md:w-40 ring-1 ring-black ring-opacity-5 space-y-1'
									}
								>
									<Link
										href="/believe"
										onClick={BlurAbout}
										className="text-gray-600 text-sm lg:text-lg"
									>
										{textos.menu.believe}
									</Link>
									<Link
										href="/about"
										onClick={BlurAbout}
										className="text-red-400 text-sm lg:text-lg"
									>
										{textos.menu.who}
									</Link>
									<Link
										href="/history"
										onClick={BlurAbout}
										className="text-gray-600 text-sm lg:text-lg"
									>
										{textos.menu.history}
									</Link>
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
									className={
										!dropdownProducto
											? 'hidden'
											: 'md:absolute z-50 flex flex-col right-0 mt-2 rounded-md shadow-lg bg-white md:w-52 ring-1 ring-black ring-opacity-5 p-2 space-y-1'
									}
								>
									<Link
										href="/contactar-asesor"
										onClick={blurProducto}
										className="text-gray-600 text-sm lg:text-lg"
									>
										{textos.menu.advisors}
									</Link>
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
									className={
										!dropdownAprende
											? 'hidden'
											: 'md:absolute z-50 flex flex-col right-0 mt-2 rounded-md shadow-lg bg-white md:w-40 ring-1 ring-black ring-opacity-5 p-1 space-y-1'
									}
								>
									<Link
										href="/data"
										onClick={blurAprende}
										className="text-gray-600 text-sm lg:text-lg"
									>
										{textos.menu.data}
									</Link>
									<Link
										href="/library"
										onClick={blurAprende}
										className="text-gray-600 text-sm lg:text-lg"
									>
										{textos.menu.library}
									</Link>
								</div>
							</div>
						</div>
						<Link
							href="/contact"
							onClick={toggleMenu}
							className="text-gray-600 text-sm lg:text-lg md:py-2"
						>
							{textos.menu.contact}
						</Link>
						<div className="flex flex-row md:pt-2 justify-center">
							<div className="w-6">
								<Image src={es} width={20} height={20} alt="spanish icon" />
							</div>
							<div>
								<label
									className="relative inline-flex cursor-pointer items-center"
									onChange={handleTraduce}
									id="trasnalte-btn"
								>
									<input id="switch" type="checkbox" className="peer sr-only" />
									<div className="peer h-6 w-11 rounded-full border bg-secundario after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primario peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
								</label>
							</div>
							<div className="w-6">
								<Image src={en} width={20} height={20} alt="english icon" />
							</div>
						</div>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
