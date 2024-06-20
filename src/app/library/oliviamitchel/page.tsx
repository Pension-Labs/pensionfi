'use client';
import React, { useContext } from 'react';
const URL = window.location.origin;
// import GoBiblioteca from '../GoBiblioteca'

const Olivia = () => {
	return (
		<div
			// onClick={handleAllDropdowns}
			className="w-full min-h-screen flex flex-col px-2"
		>
			<h1 className="text-center font-bold text-2xl">Olivia Mitchell</h1>
			<ul className="mb-4 flex flex-col gap-y-2 text-blue-500">
				<li className="underline hover:text-blue-600">
					<a
						href={`${URL}/books/Changing Frameworks for Retirement Security.pdf`}
						download="Changing Frameworks for Retirement Security"
					>
						Changing framework for retirement security, Olivia Mitchel, 2014
					</a>
				</li>
				<li className="underline hover:text-blue-600">
					<a
						href={`${URL}/books/How FinTech is Reshaping the Retirement Planning Process.pdf`}
						download="How FinTech is Reshaping the Retirement Planning Process"
					>
						How Fintech is reshaping the retirement planning process, 2018,
						Olivia Mitchell
					</a>
				</li>
				<li className="underline hover:text-blue-600">
					<a href="#" target="_blank">
						Olivia Mitchell 2019
					</a>
				</li>
				<li className="underline hover:text-blue-600">
					<a
						href={`${URL}/books/financial-literacy-planning.pdf`}
						download="financial-literacy-planning"
					>
						Financial literacy and financial planning in the United States,
						Olivia Mitchell, 2011
					</a>
				</li>
				<li className="underline hover:text-blue-600">
					<a
						href={`${URL}/books/FinTech-Chapter-1-Agnew-and-Mitchell.pdf`}
						download="FinTech-Chapter-1-Agnew-and-Mitchell"
					>
						The Disruptive Impact of FinTech on Retirement Systems
					</a>
				</li>
			</ul>
			{/* <GoBiblioteca /> */}
		</div>
	);
};

export default Olivia;
