'use client';
import React, { useContext } from 'react';
import { IoIosCloseCircle, IoIosCheckmarkCircle } from 'react-icons/io';
import { AiOutlineGlobal } from 'react-icons/ai';
import { MdAttachMoney } from 'react-icons/md';
import { GiFreedomDove } from 'react-icons/gi';
import { GrSystem } from 'react-icons/gr';
import { HiOutlineEmojiHappy } from 'react-icons/hi';
import { useIdiomaContext } from '../../Context/IdiomaContext';
const URL = 'window.location.href';
const Believe = () => {
	const { textos } = useIdiomaContext();
	return (
		<div className="px-4 w-full">
			<div className="bg-white md:bg-[#F4F5FA]  rounded-xl pb-8">
				<div className="flex flex-col gap-y-4  md:space-y-0 items-center ">
					<h1 className="text-center text-md md:text-2xl mb-4">
						{textos.believe.title}
					</h1>
					<div className="bg-white flex flex-row gap-x-2 justify-center  pb-4 md:bg-[#eeeeee] rounded-xl w-full">
						<div className="w-full md:w-2/3 shadow-xl md:bg-white flex flex-col rounded-xl items-center ">
							<div className=" flex flex-col justify-center ">
								<ul className="flex flex-col space-y-4 p-4">
									<li className="flex">
										<IoIosCheckmarkCircle className="mr-2 text-md text-green-600 " />

										<p className="text-xs md:text-sm max-w-72  ">
											{textos.believe.afirm.siete}
										</p>
									</li>
									<li className="flex">
										<IoIosCheckmarkCircle className="mr-2 text-md text-green-600 " />

										<p className="text-xs md:text-sm max-w-72  ">
											{textos.believe.system.title}
										</p>
									</li>
									<li className="flex">
										<IoIosCheckmarkCircle className="mr-2 text-md text-green-600 " />

										<p className="text-xs md:text-sm ">
											{textos.believe.afirm.uno}
										</p>
									</li>
									<li className="flex">
										<IoIosCheckmarkCircle className="mr-2 text-md text-green-600 " />
										<p className="text-xs md:text-sm ">
											{textos.believe.afirm.dos}
										</p>
									</li>
									<li className="flex">
										<IoIosCheckmarkCircle className="mr-2 text-md text-green-600 " />
										<p className="text-xs md:text-sm ">
											{textos.believe.afirm.tres}
										</p>
									</li>
									<li className="flex">
										<IoIosCheckmarkCircle className="mr-2 text-md text-green-600 " />
										<p className="text-xs md:text-sm ">
											{textos.believe.afirm.cuatro}
										</p>
									</li>
									<li className="flex">
										<IoIosCheckmarkCircle className="mr-2 text-md text-green-600 " />
										<p className="text-xs md:text-sm ">
											{textos.believe.afirm.quinto}
										</p>
									</li>
									<li className="flex">
										<IoIosCheckmarkCircle className="mr-2 text-md text-green-600 " />
										<p className="text-sm ">{textos.believe.afirm.sexto}</p>
									</li>
									<li className="flex">
										<IoIosCheckmarkCircle className="mr-2 text-md text-green-600 " />
										<p className="text-sm  max-w-72">
											{textos.believe.system.card1}
										</p>
									</li>
									<li className="flex">
										<IoIosCheckmarkCircle className="mr-2 text-md text-green-600 " />
										<p className="text-sm  max-w-72">
											{textos.believe.system.card2}
										</p>
									</li>
									<li className="flex">
										<IoIosCheckmarkCircle className="mr-2 text-md text-green-600 " />
										<p className="text-sm  max-w-72">
											{textos.believe.system.card3}
										</p>
									</li>
									<li className="flex">
										<IoIosCheckmarkCircle className="mr-2 text-md text-green-600 " />
										<p className="text-sm  max-w-72">
											{textos.believe.system.card4}
										</p>
									</li>
									<li className="flex">
										<IoIosCheckmarkCircle className="mr-2 text-md text-green-600 " />
										<p className="text-sm  max-w-72">
											{textos.believe.system.card5}
										</p>
									</li>
								</ul>
								<ul className="flex flex-col space-y-4 p-4">
									<li className="flex">
										<IoIosCloseCircle className="mr-2  text-md  text-red-600 " />

										<p className="text-xs md:text-sm ">
											{textos.believe.negative.uno}
										</p>
									</li>
									<li className="flex">
										<IoIosCloseCircle className="mr-2 text-md  text-red-600 " />
										<p className="text-xs md:text-sm ">
											{textos.believe.negative.dos}
										</p>
									</li>
									<li className="flex">
										<IoIosCloseCircle className="mr-2 text-md  text-red-600" />
										<p className="text-xs max-w-[180px] md:text-xs  ">
											{textos.believe.negative.tres}
										</p>
									</li>
									<li className="flex">
										<IoIosCloseCircle className="mr-2 text-md  text-red-600 " />
										<p className="text-xs md:text-sm ">
											{textos.believe.negative.cuatro}
										</p>
									</li>
									<li className="flex">
										<IoIosCloseCircle className="mr-2 text-md  text-red-600 " />
										<p className="text-xs md:text-sm ">
											{textos.believe.negative.cinco}
										</p>
									</li>
									<li className="flex">
										<IoIosCloseCircle className="mr-2 text-md  text-red-600 " />
										<p className="text-xs md:text-sm ">
											{textos.believe.negative.sexto}
										</p>
									</li>
									<li className="flex">
										<IoIosCloseCircle className="mr-2 text-md  text-red-600 " />
										<p className="text-xs md:text-sm max-w-72 ">
											{textos.believe.subtitle}
										</p>
									</li>
								</ul>
							</div>
							<div className="flex flex-col justify-center text-center w-full p-4">
								<p className="text-xl mb-4 ">
									{textos.believe.revolution.question}
								</p>
								<p className="text-xl ">{textos.believe.revolution.line1}</p>
								<p className="text-xl ">{textos.believe.revolution.line2}</p>
								<p className="text-xl  font-bold">
									{textos.believe.revolution.line3}
								</p>
								<p className="text-xl  font-bold mb-8">
									{textos.believe.revolution.line4}
								</p>
							</div>
						</div>
						{/* <div className='w-full md:w-1/2 flex flex-col  rounded-xl bg-white shadow-xl items-center '>
						</div> */}
						{/* <div className='w-full md:w-96   rounded-xl bg-white shadow-xl '>
							<div className='flex flex-col-reverse md:flex-row items-center justify-end'>
								<div className='w-full flex flex-col items-center'>
							
									<ul className='mt-3  flex flex-col space-y-4 p-4 '>
										<li className='flex'>
											<IoIosCloseCircle className='mr-2  text-md  text-red-600 ' />

											<p className='text-xs md:text-sm '>
												{textos.believe.negative.uno}
											</p>
										</li>
										<li className='flex'>
											<IoIosCloseCircle className='mr-2 text-md  text-red-600 ' />
											<p className='text-xs md:text-sm '>
												{textos.believe.negative.dos}
											</p>
										</li>
										<li className='flex'>
											<IoIosCloseCircle className='mr-2 text-md  text-red-600' />
											<p className='text-xs max-w-[180px] md:text-xs  '>
												{textos.believe.negative.tres}
											</p>
										</li>
										<li className='flex'>
											<IoIosCloseCircle className='mr-2 text-md  text-red-600 ' />
											<p className='text-xs md:text-sm '>
												{textos.believe.negative.cuatro}
											</p>
										</li>
										<li className='flex'>
											<IoIosCloseCircle className='mr-2 text-md  text-red-600 ' />
											<p className='text-xs md:text-sm '>
												{textos.believe.negative.cinco}
											</p>
										</li>
										<li className='flex'>
											<IoIosCloseCircle className='mr-2 text-md  text-red-600 ' />
											<p className='text-xs md:text-sm '>
												{textos.believe.negative.sexto}
											</p>
										</li>
										<li className='flex'>
											<IoIosCloseCircle className='mr-2 text-md  text-red-600 ' />
											<p className='text-xs md:text-sm max-w-72 '>
												{textos.believe.subtitle}
											</p>
										</li>
									</ul>
								</div>
							
							</div>
						</div> */}
						{/* <div className='bg-white flex flex-col items-center md:bg-[#F9ECFF] rounded-xl w-full p-4'>
						</div> */}
					</div>

					{/* <p className='text-center text-sm md:text-2xl'>
						{textos.believe.subtitle}
					</p> */}
				</div>
			</div>
			{/* <section className=' bg-gray-100'>
				<h3 className='font-bold text-center text-md md:text-2xl'>
					{textos.believe.system.title}
				</h3> 
				<p className='text-center text-sm'>{textos.believe.system.desc}</p> 
				<div className=' block  relative bg-opacity-50  z-40  '>
					<div className='relative mx-auto h-full  md:pb-10 sm:max-w-xl md:max-w-full lg:max-w-screen-xl '>
						<div className='mx-auto max-w-7xl relative'>
							<div className='grid grid-cols-1 gap-2  sm:grid-cols-3 lg:mt-8  '>
								<a
									href='#!'
									className='transition-all  duration-1000 bg-white hover:bg-primario hover:shadow-xl m-2 md:p-4 relative group  '
								>
									<div className=' absolute  bg-primario top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  '></div>
									<div className='py-2 px-9 relative  '>
										<GiFreedomDove className='w-16 h-16 fill-primario group-hover:fill-white' />

										<p className='mt-4 text-base text-gray-600 group-hover:text-white  '>
											{textos.believe.system.card1}
										</p>
									</div>
								</a>

								<a
									href='#!'
									className='transition-all  duration-1000 bg-white hover:bg-primario hover:shadow-xl m-2 md:p-4 relative  group  '
								>
									<div className=' absolute  bg-primario top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  '></div>
									<div className='py-2 px-9 relative  '>
										<AiOutlineGlobal className='w-16 h-16 fill-primario group-hover:fill-white' />

										<p className='mt-4 text-base text-gray-600 group-hover:text-white'>
											{textos.believe.system.card2}
										</p>
									</div>
								</a>

								<a
									href='#!'
									className='transition-all  duration-1000 bg-white hover:bg-primario  hover:shadow-xl m-2 md:p-4 relative group  '
								>
									<div className=' absolute  bg-primario top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  '></div>
									<div className='py-2 px-9 relative  '>
										<GrSystem className='w-16 h-16 text-primario group-hover:text-white' />
										<p className='mt-4 text-base text-gray-600 group-hover:text-white'>
											{textos.believe.system.card3}
										</p>
									</div>
								</a>

								<a
									href='#!'
									className='transition-all  duration-1000 bg-white hover:bg-primario  hover:shadow-xl m-2 md:p-4 relative  group  '
								>
									<div className=' absolute  bg-primario top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  '></div>
									<div className='py-2 px-9 relative  '>
										<MdAttachMoney className='w-16 h-16 fill-primario group-hover:fill-white' />
										<p className='mt-4 text-base text-gray-600 group-hover:text-white'>
											{textos.believe.system.card4}
										</p>
									</div>
								</a>
								<a
									href='#!'
									className='transition-all  duration-1000 bg-white hover:bg-primario  hover:shadow-xl m-2 md:p-4 relative  group  '
								>
									<div className=' absolute  bg-primario top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  '></div>
									<div className='py-2 px-9 relative  '>
										<HiOutlineEmojiHappy className='w-16 h-16 text-primario group-hover:text-white' />
										<p className='mt-4 text-base text-gray-600 group-hover:text-white'>
											{textos.believe.system.card5}
										</p>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section> */}
		</div>
	);
};

export default Believe;
