import React, { useState } from 'react';
import Image1 from '../assets/Logo1-removebg-preview.png';
import { IoMenu, IoClose } from 'react-icons/io5';
import { IoMdAdd } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isServicesOpen, setIsServicesOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen((prevState) => !prevState);
	};

	const toggleServices = () => {
		setIsServicesOpen((prevState) => !prevState);
	};

	return (
		<>
			<div className='relative top-0 left-0 w-full z-10 '>
				<div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32'>
					<img
						className='w-[120px] h-[70px]'
						src={Image1}
						alt='Logo'
					/>
					<ul className='hidden md:flex gap-7 text-2xl text-black'>
						<NavLink
							to='/'
							className='cursor-pointer hover:text-sky-400'>
							Home
						</NavLink>
						<NavLink
							to='/about'
							className='cursor-pointer hover:text-sky-400'>
							About
						</NavLink>

						<li
							className='relative cursor-pointer hover:text-sky-400'
							onMouseEnter={() => setIsServicesOpen(true)}
							onMouseLeave={() => setIsServicesOpen(false)}>
							<NavLink
								to='/about'
								className='cursor-pointer hover:text-sky-400'>
								Services
							</NavLink>

							{isServicesOpen && (
								<ul className='absolute left-0 top-full mt-2 w-60 bg-gray-100 text-gray-800 shadow-lg rounded-2xl'>
									<NavLink
										to='/'
										className='block my-2 mx-2 text-lg text-center rounded-2xl  px-4 py-2 hover:bg-sky-400 hover:text-white'>
										Water Proofing
									</NavLink>
									<NavLink
										to='/'
										className='block my-2 mx-2 text-lg text-center rounded-2xl px-4 py-2 hover:bg-sky-400 hover:text-white'>
										Injection Grouting
									</NavLink>
									<NavLink
										to='/'
										className='block my-2 mx-2 text-lg text-center rounded-2xl px-4 py-2 hover:bg-sky-400 hover:text-white'>
										Epoxy Floor Coating
									</NavLink>
									<NavLink
										to='/'
										className='block my-2 mx-2 text-lg text-center rounded-2xl px-4 py-2 hover:bg-sky-400 hover:text-white'>
										Expansion Joint
									</NavLink>
									<NavLink
										to='/'
										className='block my-2 mx-2 text-lg text-center rounded-2xl px-4 py-2 hover:bg-sky-400 hover:text-white'>
										Concrete Repair
									</NavLink>
									<NavLink
										to='/'
										className='block my-2 mx-2 text-lg text-center rounded-2xl px-4 py-2 hover:bg-sky-400 hover:text-white'>
										Swimming Pool
									</NavLink>
								</ul>
							)}
						</li>
						<NavLink
							to='/project'
							className='cursor-pointer hover:text-sky-400'>
							Projects
						</NavLink>
						<NavLink
							to='/contact'
							className='cursor-pointer hover:text-sky-400'>
							Contact
						</NavLink>
					</ul>
					<button className='hidden md:block hover:bg-white hover:text-black bg-blue-500 px-8 py-3 text-white rounded-full'>
						Free Demo
					</button>
					<IoMenu
						className='md:hidden text-white text-3xl cursor-pointer'
						onClick={toggleMenu}
					/>
				</div>

				<div
					className={`md:hidden fixed w-1/2 right-0 top-0 bottom-0 bg-white shadow-lg transition-transform duration-300 ease-in-out ${
						isMenuOpen ? 'translate-x-0' : 'translate-x-full'
					}`}>
					<div className='flex justify-end p-6'>
						<IoClose
							className='text-3xl cursor-pointer'
							onClick={toggleMenu}
						/>
					</div>
					<ul className='flex flex-col items-start gap-4 mt-5 pl-5 text-lg font-medium'>
						<NavLink
							to='/'
							className='mb-2'
							onClick={toggleMenu}>
							Home
						</NavLink>

						<div className='flex items-center gap-20 cursor-pointer'>
							<li className=' mb-2'>
								<NavLink
									to='/about'
									onClick={toggleMenu}
									className='cursor-pointer hover:text-sky-400'>
									Services
								</NavLink>
							</li>
							<IoMdAdd
								onClick={toggleServices}
								className='border border-black text-3xl rounded-lg py-1 px-2 '
							/>
						</div>

						{isServicesOpen && (
							<ul className='flex flex-col items-center bg-gray-100 rounded-2xl mt-2'>
								<NavLink
									to='/'
									className='block my-2 mx-4 text-sm text-center rounded-2xl py-2 px-6 hover:bg-sky-400 hover:text-white'
									onClick={toggleMenu}>
									Water Proofing
								</NavLink>
								<NavLink
									to='/'
									className='block my-2 text-sm text-center rounded-2xl  px-6 py-2 hover:bg-sky-400 hover:text-white'
									onClick={toggleMenu}>
									Injection Grouting
								</NavLink>
								<NavLink
									to='/'
									className='block my-2 text-sm text-center rounded-2xl px-6 py-2 hover:bg-sky-400 hover:text-white'
									onClick={toggleMenu}>
									Epoxy Floor Coating
								</NavLink>
								<NavLink
									to='/'
									className='block my-2 text-sm text-center rounded-2xl  px-6 py-2 hover:bg-sky-400 hover:text-white'
									onClick={toggleMenu}>
									Expansion Joint
								</NavLink>
								<NavLink
									to='/'
									className='block my-2 text-sm text-center rounded-2xl px-6 py-2 hover:bg-sky-400 hover:text-white'
									onClick={toggleMenu}>
									Concrete Repair
								</NavLink>
								<NavLink
									to='/'
									className='block my-2 text-sm text-center rounded-2xl px-6 py-2 hover:bg-sky-400 hover:text-white'
									onClick={toggleMenu}>
									Swimming Pool
								</NavLink>
							</ul>
						)}
						
						<NavLink
							to='/project'
							className='mb-2'
							onClick={toggleMenu}>
							Projects
						</NavLink>
						<NavLink
							to='/contact'
							className=''
							onClick={toggleMenu}>
							Contact
						</NavLink>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Navbar;
