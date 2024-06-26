'use client';
import { createContext, useEffect, useState } from 'react';

const IdiomaContext = createContext();
const traducciones = {
	es: {
		menu: {
			home: 'Inicio',
			about: 'Acerca de',
			who: 'Quiénes somos',
			believe: 'En qué creemos',
			history: 'Nuestra historia',
			product: 'Productos',
			advisors: 'Contactar asesores',
			simulator: 'Simulador reforma previsional',
			pensionfi_simulator: 'Simulador antiguo Pensionfi',
			learn: 'Aprende',
			data: 'Datos',
			library: 'Biblioteca',
			contact: 'Contacto',
		},
		home: {
			header: (
				<>
					Diseñamos, desarrollamos y comunicamos <br />
					soluciones previsionales,
				</>
			),
			newsletter: {
				title: 'Únete para recibir updates de nuestros próximos productos',
				name: 'Nombre',
				btn: 'Unirme',
				response: {
					name: '*El nombre solo debe de tener letras',
					email: '*Inserte formato correcto de email',
					ok: '¡Datos enviados con éxito!',
				},
			},
			products: {
				title: 'Nuestros productos',
				stitle: 'Simulador reforma previsional',
				sdesc: 'Descubre como te afecta la reforma previsional.',
				sbtn: 'Ver simulador',
				atitle: 'Asesores previsionales',
				adesc:
					'¿Estás por jubilar? Agenda con un asesor previsional certificado.',
				abtn: 'Quiero un asesor',
			},
			cta: '¿Te gustaría trabajar con nosotros ? Escríbenos!',
		},
		home2: {
			header: (
				<>
					Descubre cómo obtener la pensión
					<br /> que deseas HOY.
				</>
			),
			btn: 'Aprende más',
			company: {
				fst: 'Somos una empresa dedicada a diseñar, desarrollar y distribuir soluciones previsionales.',
				scnd: 'Somos un equipo chico, remoto, 100% comprometidos con	entregar las mejores herramientas y productos para hacer de este un sistema mejor.',
				trd: 'Somos rápidos, somos creativos. Pensamos fuera de la caja.',
				frd: 'Estudiamos a concho, somos expertos en lo que hacemos. Y nos apasiona el tema previsional.',
			},
		},
		team: {
			title: 'El Dream Team',
			manager: 'Gerente TI',
		},
		history: {
			title: 'Nuestra historia',
			sub: 'Narrada por Nicolás Arrieta, fundador y CEO de Pension Fi',
			desc: (
				<>
					<p>
						La idea detrás de la creación de Pension Fi se remonta al año 2016…
					</p>

					<p>
						Me encontraba en el último año de pregrado de Ingeniería Comercial
						en la Universidad de Chile.
					</p>

					<p>Justo aquí fue que comenzó con fuerza el movimiento NO+AFP.</p>

					<p>
						Se hicieron algunas de las marchas más masivas que se había visto en
						la historia del país, con millones de personas saliendo a las calles
						a exigir un sistema de pensiones mejor.
					</p>

					<p>
						Estaba tomando ya los ramos electivos del postgrado de finanzas que
						se llamaba Mercado de Capitales, donde básicamente el profesor decía
						lo extraordinario que era el sistema previsional chileno.
					</p>

					<p>
						Recuerdo cómo si fuera ayer un día, que salgo de clases y me
						encuentro con esta marcha multitudinaria en las afueras del campus.
						Pesco un poster que habían pegado ahí; Que decía “Las comisiones son
						un robo” “Queremos pensiones dignas ya!!!” Entre otras cosas.
					</p>

					<p>
						Esto me llamó poderosamente la atención y fue desde ahí que me picó
						el bichito por estudiar el sistema más a fondo.
					</p>

					<p>
						Mi única experiencia personal con el tema de las pensiones tenía que
						ver con mi viejo. Yo veía cómo trabaja él, y deseaba que ojalá se
						pudiera jubilar ahora ya. No parecía estar disfrutando mucho el
						trabajo que hacía, pero tenía que hacerlo, para poder mantenernos a
						mí y a mi familia. Personalmente ver esto lo encontraba desgarrador.
					</p>

					<p>
						Me puse a leer e investigar a fondo, cada material que podía poner
						en mis manos lo leía, desde las planillas de la Super de Pensiones a
						papers académicos sobre el tema.
					</p>

					<p>
						Creé algunas páginas que nunca has escuchado cómo afpfeliz.cl o
						retirateantes.com para ver si podíamos agregar valor a la industria
						de alguna forma. Ninguna funcionó.
					</p>

					<p>
						“Build it and they will come” parecía ser una estrategia de negocio
						del siglo pasado, ahora estaba surgiendo el movimiento Lean Startup:
						fail cheap, fail fast.
					</p>

					<p>
						Podía tener el mejor sitio, pero necesitaba crear una comunidad
						primero.
					</p>

					<p>
						Bueno. Al paso del tiempo, salí de la U y decidí buscar pega. Luego
						de un proceso de entrevistas quedé seleccionado para entrar a
						trabajar cómo analista de inversiones a un prestigioso family office
						que administraba cerca de US$300m y los invertía a nivel global.
					</p>

					<p>
						Fue una escuela enorme para mí. Pude aprender cómo funcionaban las
						empresas administradoras de capital pero desde adentro, no desde el
						libro.
					</p>

					<p>
						“Sell 5000 shares of Facebook at $151.5usd, buy Amazon at…” Una de
						mis pegas era llamar a Luxemburgo (donde estaban radicados los
						fondos) para ejecutar los trades (o las órdenes de compra y venta).
						Yo podía ver sus estados financieros en Bloomberg y rápidamente
						empecé a entender que ratios o en qué tenía que fijarme a la hora de
						identificar una buena empresa para invertir. Me fue bien, creo que
						era bueno para esto. Tenía dedos pal piano.
					</p>

					<p>
						Para el 2019, cuando empezó el estallido social, sentado en el
						último piso de la torre de vidrio más alta, en pleno Sanhattan,
						sentía la necesidad de hacer algo al respecto.
					</p>

					<p>
						A lo largo de los últimos años, yo me había instruido en el tema
						previsional y disponía de información relevante que sentía debía
						compartir con la gente.
					</p>

					<p>
						Había muchas cosas que se hablaban que no eran ciertas, mientras que
						había otras que sí lo eran.
					</p>

					<p>Lo de las pensiones malas era innegable.</p>

					<p>
						Recuerdo desde chico, debo haber tenido unos 15 años, que empecé a
						desarrollar el bichito por emprender, por crear mi propia empresa, y
						no depender de un jefe y ser un asalariado, que no tiene
						participación en la empresa en la que trabaja.
					</p>

					<p>
						Todo esto partió cuando mi papá me regaló el libro “Padre Rico,
						Padre Pobre” de Robert Kiyosaki. Me cambió la vida.
					</p>

					<p>
						El punto es que estaba con el bichito de emprender, y había asistido
						ya a varias charlas de emprendimiento. En estas, recuerdo que
						siempre se recalcaba la necesidad de “resolver un problema real”. El
						problema de las pensiones me parecía un problema bastante “real” y
						bastante “urgente”.
					</p>

					<p>
						En fin, entonces tenía la necesidad de hacer algo, pero no sabía
						qué. Salir a las calles a protestar en contra de la revolución era
						impensado. Me trasquilaban en un segundo.
					</p>

					<p>
						Así que opté por el uso del medio que todos estaban ocupando para
						comunicarse en ese entonces: las redes sociales.
					</p>

					<p>
						Yo ya desde el 2013 había creado mis primeras comunidades virtuales
						con mi primer emprendimiento, “Te Paseo”, una empresa de paseo de
						perros.
					</p>

					<p>
						Me había dado cuenta ya del potencial que tenían, y la facilidad con
						la que uno podía llegar a la gente. En ese entonces, sin invertir $1
						en publicidad, logré armar una comunidad de entorno a 5.000 personas
						en Facebook. Tenía sólo 19 años.
					</p>

					<p>
						Es más, me metí tanto en el tema que me di cuenta de una idea
						empoderante; el negocio no estaba en el paseo de perros, sino que en
						vender productos y servicios a través de la comunidad, sin salir yo
						de la casa. Ser intermediario. Y que otros paseen perros. Que otros
						vendan sus productos. Y yo sólo creo esta comunidad.
					</p>

					<p>
						Creo que 10 años después esto sigue siendo cierto pero
						sorprendentemente poca gente lo ve.
					</p>

					<p>
						En fin, me creé una cuenta en Twitter en Noviembre de 2019, donde
						empecé a compartir datos y derribando mitos sobre el sistema. No
						sólo el sistema AFP, sino que el sistema económico chileno. El más
						exitoso de la región.
					</p>

					<p>
						La cuenta empezó a crecer rápidamente de manera orgánica, con
						algunos posts bastante virales.
					</p>

					<p>
						Cómo buen ingeniero comercial, me creé una planilla de Excel donde
						iba monitoreando las views y las interacciones que generaba. Era
						brutal. Cientos de miles de personas estaban leyendo lo que yo tenía
						que decir. Estaba creando una marca. Estaba creando una comunidad.
					</p>

					<p>
						En Mayo de 2020, en plena pandemia, decidí renunciar al trabajo
						(bien?) remunerado que tenía. Estaba chato. No daba más. Desde el
						segundo que nos llamaron de vuelta a la oficina yo dije: No más.
					</p>

					<p>
						Mis papás estaban devastados. No lo podían creer. Pensaban que era
						una pésima idea, creían yo debía seguir trabajando ahí, tal como lo
						había hecho mi padre.
					</p>

					<p>
						Yo desde ahora trabajo desde casa y vendo mis conocimientos en
						línea. Es el negocio soñado. Y ahora me iba a dedicar full time. ¡No
						sabía lo que me esperaba! Pensé que sería más fácil…
					</p>

					<p>
						Decidí contactar a algunos actores relevantes de la industria
						previsional. Cuando les escribía todos sabían quién era. Ah “El
						Chico AFP!, sí!, te conocemos! Encantados!”
					</p>

					<p>
						Empecé a monetizar mi cuenta lentamente. Me di cuenta que
						básicamente habían 2 modelos de negocio; o les vendía algo a mi
						audiencia directo, o le vendía algo a una AFP o institución
						previsional.
					</p>

					<p>
						Hice ambas. Me creé un newsletter semanal “El Chico AFP Pro” donde
						enviaba información todos los viernes a mis suscriptores sobre cómo
						habían andado los fondos, papitas de inversión, etc. No me fue mal.
					</p>

					<p>
						Después, hice algunas colaboraciones con AFPs, o contenido
						sponsoreado, donde les armaba un plan de contenidos de educación
						previsional. Tampoco fue malo.
					</p>

					<p>
						Pero cómo que quería algo más. No quería ser meramente el influencer
						de las AFP. Y tampoco sentía que esto solucionaba el problema de las
						bajas pensiones.
					</p>

					<p>Había que hacer algo más.</p>

					<p>La gente necesitaba soluciones, y la necesitaba ya.</p>

					<p>La mayoría cotiza en la AFP más cara.</p>

					<p>
						La mayoría invierte en el multifondo que no le corresponde según su
						edad.
					</p>

					<p>
						La mayoría está destinada a pensiones de miseria, y lo peor de todo
						es que no lo saben. O lo saben pero no lo quieren asumir. O ambas.
					</p>

					<p>Es aquí que nace Pension Fi.</p>

					<p>
						Una empresa que se dedica a diseñar, desarrollar y comunicar
						soluciones previsionales.
					</p>

					<p>¿Qué es una solución previsional?</p>

					<p>
						Desde un simulador que te ayuda a entender mejor su situación
						previsional, a un comparador de AFPs, a un nuevo producto de
						inversión, más seguro, más transparente, más rentable, y más barato.
					</p>

					<p>Las posibilidades dentro de este rubro son infinitas.</p>

					<p>Y aquí estamos.</p>

					<p>
						Tratando de contribuir nuestro granito de arena. A ver si algún día,
						podemos crear un sistema mejor para todos.
					</p>
				</>
			),
			// date1: {
			// 	date: '2016 - Parte movimiento No+AFP.',
			// 	desc: 'Nico nuestro fundador se pone a estudiar el tema previsional.',
			// },
			// date2: {
			// 	date: '2019 - Estallido social.',
			// 	desc: 'Nace El Chico AFP y se viraliza rápidamente en las redes sociales, llegando a cientos de miles de personas.',
			// },
			// date3: {
			// 	date: '2024 - Nace Pension Fi.',
			// },
		},
		mission: {
			title: 'Nuestra misión',
			desc: 'Mejorar la pensión de 1 millón de chilenos.',
		},
		believe: {
			title: 'En qué creemos',
			afirm: {
				siete:
					'Creemos que tu pensión depende de ti y sólo de ti. No de alguien más.',
				title: 'En que SÍ creemos',
				uno: 'Tú decides cuando jubilar',
				dos: 'Tú decides donde jubilar',
				tres: 'Tú decides con quien compartir tu $$',
				cuatro: 'Tú decides en que moneda la recibes',
				quinto: 'Donde se invierte la $$',
				sexto: 'Quien la administra',
			},
			subtitle:
				'No creemos en un sistema monopolico,controlado por el Estado, burocratico, lento, corrupto, poco transparente y caro.',
			negative: {
				title: 'En que NO creemos',
				uno: 'Donde mi $$ no es mía',
				dos: 'Donde la $$ no renta',
				tres: 'Donde la $$ se la roban los politicos o los empresarios',
				cuatro: 'Donde no hay libertad de elección',
				cinco: 'Donde no hay confianza',
				sexto: 'Donde no hay amor',
			},
			system: {
				title: 'Creemos en un sistema transparente',
				desc: 'Creemos que tu pensión depende de ti y sólo de ti. No de alguien más.',
				card1:
					'En un sistema libre, simple, donde distintos actores	pueden competir y que todos podamos entender.',
				card2: 'En un sistema global. Que te acompaña a donde sea que vayas.',
				card3:
					'En un sistema que funciona para nosotros, y no nosotros funcionamos para el sistema.',
				card4:
					'En un sistema donde yo soy el dueño de mi destino, sin letra chica y sólo con números grandes.',
				card5: 'En un sistema, donde todos podamos jubilar feliz.',
			},
			revolution: {
				question: 'Eso creemos. ¿Y tú? 👍👎',
				line1: 'De Chile al mundo🚀',
				line2: 'Lo viste aquí primero.',
				line3: 'Únete a la revolución previsional.',
				line4: 'Únete a Pension Fi',
			},
		},
		assesors: {
			form: {
				title: 'Contacta a un asesor',
				name: 'Nombre',
				sex: {
					sex: 'Sexo',
					man: 'Hombre',
					woman: 'Mujer',
				},
				age: 'Edad',
				balance: 'Saldo',
				medios: {
					medio: 'Medio de contacto',
					tel: 'Teléfono',
				},
				pen: {
					title: 'Tipo de pensión',
					old: 'Pensión por vejez',
					ant: 'Pensión anticipada',
					inv: 'Pensión por invalidez',
					sup: 'Pensión por sobrevivencia',
				},
				response: {
					name: '*El nombre no debe tener números ni caracteres especiales',
					sex: '*El Sexo es obligatorio',
					age: '*La edad es obligatoria y sólo debe de tener números',
					balance: '*El saldo es obligatorio y sólo debe de tener números',
					medio: '*Al menos 1 medio de contacto es necesario.',
					tel: '*Este campo solo permite números',
					mail: `*Formato de correo inválido <i>Ejemplo: mail@ejemplo.com</i> `,
					pension: '*El tipo de pensión es obligatorio ',
					loading: 'Cargando...',
					success: '¡Mensaje enviado con éxito.!',
				},
				btn: 'Contactar asesor',
			},
			title: '¿En qué consiste una asesoría previsional?',
			desc: {
				p1: 'Las asesorías previsionales están orientadas a personas próximas a jubilar.',
				p2: 'Un asesor previsional te puede ayudar a elegir una modalidad de	pensión según tus necesidades; Retiro Programado, Renta Vitalicia o	alguna mezcla de ambas.',
				p3: (
					<>
						Los asesores previsionales son personas o empresas certificadas por
						la Superintendencia de pensiones. Puedes ver el registro completo de
						asesores{' '}
						<a
							href="https://www.spensiones.cl/apps/consultaRAP/AsesoresVigentes"
							target="_blank"
							className="underline font-semibold"
						>
							acá.
						</a>
						.
					</>
				),
				p4: 'Nosotros en Pension Fi no somos asesores previsionales. Sólo te podemos referir a alguno que sí lo sea, sin costo extra para tí.',
			},
		},
		data: {
			main_title: 'Datos',
			desc: '	En esta sección tendrás información actualizada de los diferentes paises de la región y sus sistemas previsionales, para que puedas comparar y aprender cómo funcionan los diferentes sistemas alrededor del Mundo.',
			subtitle: 'Aquí algunos datos del sistema chileno:',
			title: 'Datos sistema de pensiones chileno 🇨🇱',
			table: {
				col1title: 'Tipo de sistema',
				col2title: 'MIXTO',
				row1: 'Número total de afiliados',
				row2: 'Número total de cotizantes',
				row3: 'saldo promedio afiliado (en CLP)',
				row4: 'ingreso imponible promedio (en CLP)',
				row5: 'Comisión promedio mensual (en CLP)',
				row6: 'Número total de jubilados',
				row7: 'Pensión promedio jubilados (auto-financiada en UF)',
				row8: 'Número de administradoras',
				row9: 'Densidad promedio de cotización',
				row10: 'Edad promedio de ingreso al sistema',
			},
		},
		contact: {
			title: 'Contáctanos',
			desc: 'En Pension Fi, estaremos contentos de recibir tu mensaje. Intentaremos responderlo a la brevedad.',
			name: 'Nombre',
			subject: {
				title: 'Asunto',
				client: 'Cliente',
				press: 'Prensa',
				investor: 'Inversionista',
				work: 'Trabaja con nosotros',
			},
			msg: 'Escriba su mensaje',
			response: {
				name: '*El nombre no debe tener números ni caracteres especiales',
				mail: (
					<>
						*El email debe tener un formato correcto: <i>ejemplo@mail.com</i>
					</>
				),
				subject: '*El asunto es requerido',
				msg: '*El mensaje es requerido',
				loading: 'Cargando...',
				success: '¡Mensaje enviado con éxito.!',
			},
			btn: 'Enviar',
		},
		library: {
			title: 'Biblioteca Previsional',
			sub: 'Educación previsional gratuita y de calidad',
			desc: 'A continuación queremos poner a disposición de la comunidad una serie de documentos, archivos, artículos, libros, documentales, que creemos son útiles para el entendimiento de la tematica previsional. Es 100% gratuito y esta lista será actualizada constantemente con nueva información. Sientete libre de investigarla y compartirla con tus más cercanos.',
		},
		footer: 'Síguenos',
	},
	en: {
		menu: {
			home: 'Home',
			about: 'About',
			who: 'Who we are',
			believe: 'What we believe',
			history: 'Our history',
			product: 'Products',
			advisors: 'Contact advisors',
			simulator: 'Pension reform simulator',
			pensionfi_simulator: 'Old Pensionfi Simulator',
			learn: 'Learn',
			data: 'Data',
			library: 'Library',
			contact: 'Contact',
		},
		home: {
			header: 'We design, develop, and communicate pension solutions',
			newsletter: {
				title: 'Join us to receive updates on our upcoming products',
				name: 'Name',
				btn: 'Join',
				response: {
					name: '*The name must contain only letters',
					email: '*Insert correct email format',
					ok: 'Data sent successfully!',
				},
			},
			products: {
				title: 'Our products',
				stitle: 'Pension reform simulator',
				sdesc: 'Discover how the pension reform affects you.',
				sbtn: 'View simulator',
				atitle: 'Pension advisors',
				adesc:
					'Are you about to retire? Schedule an appointment with a certified pension advisor.',
				abtn: 'I want an advisor',
			},
			cta: 'Would you like to work with us ? Contact us!',
		},
		home2: {
			header: (
				<>
					Discover how to get the pension
					<br /> you desire TODAY.
				</>
			),
			btn: 'Learn more',
			company: {
				fst: 'We are a company dedicated to designing, developing, and distributing retirement solutions.',
				scnd: 'We are a small, remote team, 100% committed to delivering the best tools and products to make this system better.',
				trd: 'We are fast, we are creative. We think outside the box.',
				frd: 'We study thoroughly, we are experts in what we do. And we are passionate about retirement planning.',
			},
		},
		team: {
			title: 'The Dream Team',
			manager: 'Manager IT',
		},
		history: {
			title: 'Our history',
			sub: 'Narrated by Nicolás Arrieta, founder and CEO of Pension Fi',
			desc: (
				<>
					<p>
						The idea behind the creation of Pension Fi dates back to 2016...
					</p>
					<p>
						I was in the last year of my undergraduate studies in Commercial
						Engineering at the University of Chile.
					</p>
					<p>
						It was right here that the NO+AFP movement began to gain momentum.
					</p>
					<p>
						Some of the largest marches in the country’s history took place,
						with millions of people taking to the streets to demand a better
						pension system.
					</p>
					<p>
						I was already taking the elective courses for the postgraduate
						finance program called Capital Markets, where basically the
						professor praised the Chilean pension system as extraordinary.
					</p>
					<p>
						I remember as if it were yesterday, one day, I left class and
						encountered this massive march outside the campus. I grabbed a
						poster they had put up; it said “Commissions are a robbery” “We want
						dignified pensions now!!!” among other things.
					</p>
					<p>
						This caught my attention powerfully, and it was from there that I
						got the itch to study the system more deeply.
					</p>
					<p>
						My only personal experience with pensions was related to my dad. I
						watched him work and wished he could retire already. He didn’t seem
						to enjoy his job much, but he had to do it to support my family and
						me. Personally, I found watching this heartbreaking.
					</p>
					<p>
						I started reading and researching thoroughly; I read every material
						I could get my hands on, from Super de Pensiones spreadsheets to
						academic papers on the subject.
					</p>
					<p>
						I created some websites you’ve never heard of like afpfeliz.cl or
						retirateantes.com to see if we could add value to the industry
						somehow. None of them worked.
					</p>
					<p>
						“Build it and they will come” seemed like a business strategy from
						the last century; now the Lean Startup movement was emerging: fail
						cheap, fail fast.
					</p>
					<p>
						I could have the best site, but I needed to create a community
						first.
					</p>
					<p>
						Well, over time, I graduated from the university and decided to look
						for a job. After a series of interviews, I was selected to work as
						an investment analyst at a prestigious family office that managed
						around US$300m and invested it globally.
					</p>
					<p>
						It was an enormous learning experience for me. I could learn how
						capital management companies operated from the inside, not from a
						book.
					</p>
					<p>
						“Sell 5000 shares of Facebook at $151.5 USD, buy Amazon at…” One of
						my tasks was to call Luxembourg (where the funds were based) to
						execute the trades (or buy and sell orders). I could see their
						financial statements on Bloomberg and quickly started to understand
						which ratios or indicators to focus on when identifying a good
						company to invest in. I did well; I think I was good at it. I had a
						knack for it.
					</p>
					<p>
						By 2019, when the social outbreak began, sitting on the top floor of
						the tallest glass tower in the heart of Sanhattan, I felt the need
						to do something about it.
					</p>
					<p>
						Over the years, I had educated myself on the pension issue and had
						relevant information that I felt I should share with people.
					</p>
					<p>
						There were many things being said that were not true, while others
						were true.
					</p>
					<p>The issue of poor pensions was undeniable.</p>
					<p>
						I remember from a young age, I must have been about 15 years old,
						that I started developing the itch to start my own business and not
						depend on a boss and be a salaried worker with no stake in the
						company they work for.
					</p>
					<p>
						All this started when my dad gave me the book “Rich Dad, Poor Dad”
						by Robert Kiyosaki. It changed my life.
					</p>
					<p>
						The point is that I had the entrepreneurial itch, and I had already
						attended several entrepreneurship talks. In these, I remember that
						the need to “solve a real problem” was always emphasized. The
						pension issue seemed like a pretty “real” and quite “urgent” problem
						to me.
					</p>
					<p>
						In short, I felt the need to do something, but I didn’t know what.
						Going out to protest against the revolution was unthinkable. I would
						be sheared in a second.
					</p>
					<p>
						So I opted to use the medium everyone was using to communicate at
						that time: social media.
					</p>
					<p>
						Since 2013, I had already created my first virtual communities with
						my first venture, “Te Paseo,” a dog-walking company.
					</p>
					<p>
						I had already realized the potential they had and the ease with
						which one could reach people. Back then, without investing $1 in
						advertising, I managed to build a community of around 5,000 people
						on Facebook. I was only 19 years old.
					</p>
					<p>
						What’s more, I got so involved in the subject that I realized an
						empowering idea: the business wasn’t in dog walking but in selling
						products and services through the community, without leaving the
						house. Being an intermediary. Let others walk dogs. Let others sell
						their products. And I just create this community.
					</p>
					<p>
						I think 10 years later, this is still true, but surprisingly few
						people see it.
					</p>
					<p>
						Anyway, I created a Twitter account in November 2019, where I
						started sharing data and debunking myths about the system. Not just
						the AFP system but the Chilean economic system. The most successful
						in the region.
					</p>
					<p>
						The account began to grow rapidly, organically, with some quite
						viral posts.
					</p>
					<p>
						As a good commercial engineer, I created an Excel spreadsheet where
						I monitored the views and interactions I generated. It was brutal.
						Hundreds of thousands of people were reading what I had to say. I
						was creating a brand. I was creating a community.
					</p>
					<p>
						In May 2020, in the midst of the pandemic, I decided to quit the
						(well?) paid job I had. I was fed up. I couldn’t take it anymore.
						From the second we were called back to the office, I said: No more.
					</p>
					<p>
						My parents were devastated. They couldn’t believe it. They thought
						it was a terrible idea; they believed I should continue working
						there, just like my father had done.
					</p>
					<p>
						Now I work from home and sell my knowledge online. It’s the dream
						business. And now I was going to dedicate myself full time. I didn’t
						know what awaited me! I thought it would be easier…
					</p>
					<p>
						I decided to contact some relevant players in the pension industry.
						When I wrote to them, everyone knew who I was. Ah “El Chico AFP!,
						yes!, we know you! Delighted!”
					</p>
					<p>
						I slowly started to monetize my account. I realized that there were
						basically two business models; either I sold something directly to
						my audience or sold something to an AFP or pension institution.
					</p>
					<p>
						I did both. I created a weekly newsletter “El Chico AFP Pro” where I
						sent information to my subscribers every Friday about how the funds
						had performed, investment tips, etc. It didn’t go badly.
					</p>
					<p>
						Later, I did some collaborations with AFPs or sponsored content,
						where I put together a plan of pension education content for them.
						That wasn’t bad either.
					</p>
					<p>
						But I wanted something more. I didn’t want to be merely the AFP
						influencer. And I didn’t feel this solved the problem of low
						pensions either.
					</p>
					<p>Something more needed to be done.</p>
					<p>People needed solutions, and they needed them now.</p>
					<p>Most contribute to the most expensive AFP.</p>
					<p>
						Most invest in the multifund that does not correspond to their age.
					</p>
					<p>
						Most are destined for miserable pensions, and the worst part is that
						they don’t know it. Or they know it but don’t want to admit it. Or
						both.
					</p>
					<p>This is where Pension Fi was born.</p>
					<p>
						A company dedicated to designing, developing, and communicating
						pension solutions.
					</p>
					<p>What is a pension solution?</p>
					<p>
						From a simulator that helps you better understand your pension
						situation, to an AFP comparator, to a new investment product, safer,
						more transparent, more profitable, and cheaper.
					</p>
					<p>The possibilities within this field are endless.</p>
					<p>And here we are.</p>
					<p>
						Trying to contribute our grain of sand. To see if someday, we can
						create a better system for everyone.
					</p>
				</>
			),
			// date1: {
			// 	date: '2016 - No+AFP movement starts.',
			// 	desc: 'Our founder Nico starts studying retirement planning.',
			// },
			// date2: {
			// 	date: '2019 - Social outbreak.',
			// 	desc: 'The Chico AFP is born and quickly goes viral on social media, reaching hundreds of thousands of people.',
			// },
			// date3: {
			// 	date: '2024 - Pension Fi is born.',
			// },
		},
		mission: {
			title: 'Our mission',
			desc: 'Improve the pension of 1 million Chileans.',
		},
		believe: {
			title: 'What we believe in',
			afirm: {
				siete:
					'We believe your pension depends on you and only you. Not on someone else.',
				title: 'What we DO believe in',
				uno: 'You decide when to retire',
				dos: 'You decide where to retire',
				tres: 'You decide who to share your $$ with',
				cuatro: 'You decide in which currency you receive it',
				quinto: 'Where the $$ is invested',
				sexto: 'Who manages it',
			},
			subtitle:
				"We don't believe in a monopolistic system, controlled by the state, bureaucratic, slow, corrupt, lacking transparency, and expensive",
			negative: {
				title: "What we DON'T believe in",
				uno: 'Where my $$ is not mine',
				dos: 'Where the $$ does not generate returns',
				tres: 'Where politicians or businessmen steal the $$',
				cuatro: 'Where there is no freedom of choice',
				cinco: 'Where there is no trust',
				sexto: 'Where there is no love',
			},
			system: {
				title: 'We believe in a transparent system',
				desc: 'We believe that your pension depends on you and only you. Not on someone else.',
				card1:
					'In a free, simple system, where different actors can compete and we can all understand.',
				card2: 'In a global system. That accompanies you wherever you go.',
				card3:
					"In a system that works for us, and we don't work for the system.",
				card4:
					'In a system where I am the owner of my destiny, with no fine print and only big numbers.',
				card5: 'In a system where everyone can retire happily.',
			},
			revolution: {
				question: "That's what we believe. And you? 👍👎",
				line1: 'From Chile to the world🚀',
				line2: 'You saw it here first.',
				line3: 'Join the retirement revolution.',
				line4: 'Join to Pension Fi',
			},
		},
		assesors: {
			form: {
				title: 'Contact an advisor',
				name: 'Name',
				sex: {
					sex: 'Sex',
					man: 'Man',
					woman: 'Woman',
				},
				age: 'Age',
				balance: 'Balance',
				medios: {
					medio: 'Contact method',
					tel: 'Phone',
				},
				pen: {
					title: 'Pension type',
					old: 'Old-age pension',
					ant: 'Early pension',
					inv: 'Disability pension',
					sup: 'Survivor pension',
				},
				response: {
					name: '*The name must not have numbers or special characters',
					sex: '*Sex is mandatory',
					age: '*Age is mandatory and must only contain numbers',
					balance: '*The balance is mandatory and must only contain numbers',
					medio: '*At least 1 contact method is required',
					tel: '*This field only allow numbers',
					mail: `*Wrong e-mail format <i>Example: mail@example.com</i> `,
					pension: '*The pension type is mandatory',
					loading: 'Loading...',
					success: 'Message sent successfully!',
				},
				btn: 'Contact advisor',
			},
			title: 'What does retirement planning advice involve?',
			desc: {
				p1: 'Retirement planning consultations are aimed at people nearing retirement age.',
				p2: 'A retirement planner can help you choose a pension plan according to your needs: Programmed Withdrawal, Lifetime Annuity, or a combination of both.',
				p3: (
					<>
						Retirement advisors are individuals or companies certified by the
						Pension Superintendence. You can see the complete registry of
						advisors{' '}
						<a
							href="https://www.spensiones.cl/apps/consultaRAP/AsesoresVigentes"
							target="_blank"
							className="underline font-semibold"
						>
							here.
						</a>
					</>
				),
				p4: 'We at Pension Fi are not retirement advisors. We can only refer you to one who is, at no extra cost to you.',
			},
		},
		data: {
			main_title: 'Data',
			desc: 'In this section, you will have updated information on the different countries in the region and their retirement systems, so you can compare and learn how different systems around the world work.',
			subtitle: 'Here are some facts about the Chilean system:',
			title: 'Chilean pension system data 🇨🇱',
			table: {
				col1title: 'System type',
				col2title: 'MIXED',
				row1: 'Total number of affiliates',
				row2: 'Total number of contributors',
				row3: 'Average balance per affiliate (in CLP)',
				row4: 'Average taxable income (in CLP)',
				row5: 'Average monthly fee (in CLP)',
				row6: 'Total number of retirees',
				row7: 'Average pension for retirees (self-funded in UF)',
				row8: 'Number of administrators',
				row9: 'Average contribution density',
				row10: 'Average age of entry into the system',
			},
		},
		contact: {
			title: 'Contact us',
			desc: 'At Pension Fi, we will be happy to receive your message. We will try to answer it as soon as possible.',
			name: 'Name',
			subject: {
				title: 'Subject',
				client: 'Client',
				press: 'Press',
				investor: 'Investor',
				work: 'Work with us',
			},
			msg: 'Write your message',
			response: {
				name: '*The name must not have numbers or special characters',
				mail: (
					<>
						The email must have a correct format: <i>example@mail.com</i>
					</>
				),
				subject: '*The subject is mandatory',
				msg: '*The message is mandatory',
				loading: 'Loading...',
				success: 'Message sent successfully!',
			},
			btn: 'Send',
		},
		library: {
			title: 'Pension Library',
			sub: 'Free and quality pension education',
			desc: 'Below, we want to make available to the community a series of documents, files, articles, books, documentaries that we believe are useful for understanding the retirement topic. It is 100% free, and this list will be constantly updated with new information. Feel free to explore it and share it with your closest ones.',
		},
		footer: 'Follow us',
	},
};

const IdiomaProvider = ({ children }) => {
	const [lang, setLang] = useState('es');
	const [isChecked, setIsChecked] = useState(lang === 'en');
	const [textos, setTextos] = useState(traducciones[lang]);
	const [dropdownAbout, setDropdownAbout] = useState(false);
	const [dropdownAprende, setDropdownAprende] = useState(false);
	const [dropdownProducto, setDropdownProducto] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	useEffect(() => {
		initTheme();
	}, [lang]);

	function initTheme() {
		if (!lang) {
			// setCookie('lang', 'es')
			setLang('es');
		} else if (lang === 'en') {
			setTextos(traducciones.en);
		} else {
			setTextos(traducciones.es);
		}
	}

	// function getCookie(cname) {
	// 	const name = cname + '='
	// 	const decodedCookie = decodeURIComponent(document.cookie)
	// 	const ca = decodedCookie.split(';')
	// 	for (let i = 0; i < ca.length; i++) {
	// 		let c = ca[i].trim()
	// 		if (c.indexOf(name) === 0) {
	// 			return c.substring(name.length, c.length)
	// 		}
	// 	}
	// 	return ''
	// }

	// function setCookie(cname, cvalue) {
	// 	document.cookie = `${cname}=${cvalue};SameSite=Strict`
	// }

	const handleTraduce = e => {
		console.log('click');
		const selectedLang = e.target.checked ? 'en' : 'es';
		setIsChecked(selectedLang == 'en' ? true : false);
		setLang(selectedLang);
		// setCookie('lang', selectedLang)
		setTextos(traducciones[selectedLang]);
	};

	const handleAllDropdowns = () => {
		setDropdownAbout(false);
		setDropdownAprende(false);
		setDropdownProducto(false);
	};
	const data = {
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
	};

	return (
		<IdiomaContext.Provider value={data}>{children}</IdiomaContext.Provider>
	);
};
export { IdiomaProvider, IdiomaContext };
