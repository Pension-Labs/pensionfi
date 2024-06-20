'use client';
import React, { useContext } from 'react';
import { FaLaptopCode } from 'react-icons/fa6';
import { AiOutlineTeam } from 'react-icons/ai';
import { BsSpeedometer } from 'react-icons/bs';
import { GiTeamIdea } from 'react-icons/gi';
import user from '../../assets/img/user.png';
import jprofile from '../../assets/img/jprofile.png';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import { useIdiomaContext } from '../../Context/IdiomaContext';
const URL = 'http://localhost:3000';
const About = () => {
	const { textos } = useIdiomaContext();

	return (
		<div className="flex flex-col ">
			<section className=" bg-gray-100">
				<div className=" block  relative bg-opacity-50  z-40  ">
					<div className="relative mx-auto h-full pb-20   md:pb-10 sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
						<div className="mx-auto max-w-7xl relative">
							<div className="grid grid-cols-1 gap-2 mt-12 sm:grid-cols-2 lg:mt-20   ">
								<a
									href="#!"
									className="transition-all  duration-1000 bg-white hover:bg-primario hover:shadow-xl m-2 p-4 relative group  "
								>
									<div className=" absolute  bg-primario top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  "></div>
									<div className="py-2 px-9 relative  ">
										<FaLaptopCode className="w-16 h-16 fill-primario group-hover:fill-white" />

										<p className="mt-4 text-base text-acento">
											{textos.home2.company.fst}
										</p>
									</div>
								</a>

								<a
									href="#!"
									className="transition-all  duration-1000 bg-white hover:bg-primario hover:shadow-xl m-2 p-4 relative  group  "
								>
									<div className=" absolute  bg-primario top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  "></div>
									<div className="py-2 px-9 relative  ">
										<AiOutlineTeam className="w-16 h-16 fill-primario group-hover:fill-white" />

										<p className="mt-4 text-base text-acento">
											{textos.home2.company.scnd}
										</p>
									</div>
								</a>

								<a
									href="#!"
									className="transition-all  duration-1000 bg-white hover:bg-primario  hover:shadow-xl m-2 p-4 relative group  "
								>
									<div className=" absolute  bg-primario top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  "></div>
									<div className="py-2 px-9 relative  ">
										<BsSpeedometer className="w-16 h-16 fill-primario group-hover:fill-white" />
										<p className="mt-4 text-base text-acento">
											{textos.home2.company.trd}
										</p>
									</div>
								</a>

								<a
									href="#!"
									className="transition-all  duration-1000 bg-white hover:bg-primario  hover:shadow-xl m-2 p-4 relative  group  "
								>
									<div className=" absolute  bg-primario top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  "></div>
									<div className="py-2 px-9 relative  ">
										<GiTeamIdea className="w-16 h-16 fill-primario group-hover:fill-white" />
										<p className="mt-4 text-base text-acento ">
											{textos.home2.company.frd}
										</p>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className="bg-white py-8 sm:py-8">
				<div className="mx-auto grid gap-x-8 gap-y-8 px-6 lg:px-8 xl:grid-cols-1">
					<div className="">
						<h2 className="text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">
							{textos.team.title}
						</h2>
					</div>
					<ul
						role="list"
						className="grid gap-x-8 gap-y-4 sm:grid-cols-2 m-auto sm:gap-y-16  xl:col-span-2"
					>
						<li>
							<div className="flex items-center gap-x-6">
								<img className="h-20 w-20 rounded-full" src={user} alt="" />
								<div>
									<h3 className="text-xl font-semibold leading-7 tracking-tight text-gray-900">
										Nicolás Arrieta
									</h3>
									<p className="text-sm text-center font-semibold leading-6 text-indigo-600">
										CEO & Founder
									</p>
									<div className="flex flex-row gap-x-2 text-indigo-600 text-xl justify-center">
										<a href="https://x.com/nicocapital" target="_blank">
											<FaSquareXTwitter />
										</a>
										<a
											href="https://cl.linkedin.com/in/nico-arrieta-74a53995"
											target="_blank"
										>
											<FaLinkedin />
										</a>
									</div>
								</div>
							</div>
						</li>
						<li>
							<div className="flex items-center gap-x-6">
								<img className="h-20 w-20 rounded-full" src={user} alt="" />
								<div>
									<h3 className="text-xl font-semibold leading-7 tracking-tight text-gray-900">
										Mauricio Pastorini
									</h3>
									<p className="text-sm text-center font-semibold leading-6 text-indigo-600">
										{textos.team.manager}
									</p>
									<div className="flex flex-row gap-x-2 text-indigo-600 text-xl justify-center">
										<a href="#">
											<FaSquareXTwitter />
										</a>
										<a href="#">
											<FaLinkedin />
										</a>
									</div>
								</div>
							</div>
						</li>
						<li>
							<div className="flex items-center gap-x-6">
								<img className="h-20 w-20 rounded-full" src={jprofile} alt="" />
								<div>
									<h3 className="text-xl font-semibold leading-7 tracking-tight text-gray-900">
										Javier Márquez
									</h3>
									<p className="text-sm text-center  font-semibold leading-6 text-indigo-600">
										Web developer
									</p>
									<div className="flex flex-row gap-x-2 text-indigo-600 text-xl justify-center">
										<a
											href="https://twitter.com/hello_jmarquez"
											target="_blank"
										>
											<FaSquareXTwitter />
										</a>
										<a
											href="https://www.linkedin.com/in/javier-marquez-web-front-end/"
											target="_blank"
										>
											<FaLinkedin />
										</a>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>

			<div className="flex flex-col  gap-4 p-6 justify-center ">
				<h3 className="font-bold text-3xl text-left">{textos.mission.title}</h3>
				<p>{textos.mission.desc}</p>
			</div>
			<p className="text-center">
				<button className="underline" >
					{textos.home.cta}
				</button>
			</p>
		</div>
	);
};

export default About;
