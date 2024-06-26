import Link from 'next/link';
import React from 'react';

const GoBiblioteca = () => {
	return (
		<Link href="/library">
			<span className="underline mt-auto mb-6 text-blue-700 hover:text-blue-800 font-bold">
				Regresar a biblioteca
			</span>
		</Link>
	);
};

export default GoBiblioteca;
