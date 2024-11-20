// Navbar.jsx
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FaHome, FaTag, FaInfoCircle, FaPhone } from 'react-icons/fa';  // Import ikon
import { useLocation } from 'react-router-dom';

const navigation = [
    { name: 'Strona Główna', href: '/Home', icon: FaHome, current: false },
    { name: 'Oferty', href: '/Oferts', icon: FaTag, current: false },
    { name: 'O Nas', href: '/About', icon: FaInfoCircle, current: false },
    { name: 'Kontakty', href: '/Contact', icon: FaPhone, current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export const Navbar = () => {
    const location = useLocation(); // Hook do uzyskania bieżącej lokalizacji

    const currentLocation = navigation.find(item => item.href === location.pathname);

    return (
            <Disclosure as="nav" className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-md rounded-2xl shadow-lg p-4 border border-white/20 transition-all ease-in-out duration-300 transform flex flex-col md:flex-row md:justify-between md:items-center">
                {({ open }) => (
                        <>
                            <div className="flex items-center justify-between w-full md:w-auto">
                                <a href="/" className="text-xl font-semibold text-gray-800">
                                    {/* Wyświetl nazwę aktualnej lokalizacji */}
                                    {currentLocation ? currentLocation.name : 'Strona Główna'}
                                </a>
                                <Disclosure.Button className="md:hidden text-gray-700 text-2xl focus:outline-none" aria-label="Toggle menu">
                                    {open ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="block h-6 w-6" aria-hidden="true" />}
                                </Disclosure.Button>
                            </div>

                            <Disclosure.Panel className="md:hidden w-full mt-4">
                                <div className="flex flex-col items-center gap-4">
                                    {navigation.map((item) => (
                                            <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className={classNames(
                                                            item.current ? 'text-gray-900' : 'text-gray-700 hover:text-gray-900',
                                                            'text-lg font-medium transition-colors duration-300 flex items-center gap-2'
                                                    )}
                                            >
                                                <item.icon className="h-5 w-5" aria-hidden="true" />
                                                {item.name}
                                            </a>
                                    ))}
                                </div>
                            </Disclosure.Panel>

                            <div className="hidden md:flex md:flex-row md:items-center md:gap-4">
                                {navigation.map((item) => (
                                        <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                        item.current ? 'text-gray-900' : 'text-gray-700 hover:text-gray-900',
                                                        'text-lg font-medium transition-colors duration-300 flex items-center gap-2'
                                                )}
                                        >
                                            <item.icon className="h-5 w-5" aria-hidden="true" />
                                            {item.name}
                                        </a>
                                ))}
                            </div>
                        </>
                )}
            </Disclosure>
    );
};
