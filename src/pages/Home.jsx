// Home.jsx
import { Spa, Basen, Gabinet, Wlosy } from "../Text.js";
import { FaSwimmingPool, FaSpa, FaCut, FaLeaf } from 'react-icons/fa';
import {CookiesConsent} from "../components/CookiesConsent.jsx";

export const Home = () => {
    return (
            <>
                <CookiesConsent/>
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col justify-center items-center">
                    <img src="img/6.jpg" className="w-full h-96 md:w-3/4 lg:w-2/3 object-cover rounded-xl shadow-lg mb-10" alt="Home" />
                    <h1 className="text-4xl font-bold mb-6">NewWaveSpa Hotel</h1>
                    <h2 className="text-2xl font-semibold mb-4 text-center">Nasze Usługi</h2>

                    <div className="w-full flex flex-wrap justify-center">
                        {Spa.map((spa, index) => (
                                <div key={index} className="text-center mb-8 p-4 border rounded-lg shadow-lg bg-white w-full md:w-1/2 lg:w-1/3 xl:w-1/4 m-2">
                                    <FaSpa className="text-5xl mb-4 mx-auto" />
                                    <h1 className="text-xl font-bold mb-2">{spa.title}</h1>
                                    <p className="text-md mb-2">{spa.description}</p>
                                    <p className="text-sm text-gray-600">{spa.place}</p>
                                    <p className="text-sm text-gray-600">{spa.name}</p>
                                </div>
                        ))}
                        {Basen.map((item, index) => (
                                <div key={index} className="text-center mb-8 p-4 border rounded-lg shadow-lg bg-white w-full md:w-1/2 lg:w-1/3 xl:w-1/4 m-2">
                                    <FaSwimmingPool className="text-5xl mb-4 mx-auto" />
                                    <h1 className="text-xl font-bold mb-2">{item.title}</h1>
                                    <p className="text-md mb-2">{item.description}</p>
                                    <img className="w-full h-48 object-cover rounded-lg mt-4" src={`img/${index === 0 ? "20" : "14"}.jpg`} alt={item.title} />
                                </div>
                        ))}
                        {Gabinet.map((item, index) => (
                                <div key={index} className="text-center mb-8 p-4 border rounded-lg shadow-lg bg-white w-full md:w-1/2 lg:w-1/3 xl:w-1/4 m-2">
                                    <FaLeaf className="text-5xl mb-4 mx-auto" />
                                    <h1 className="text-xl font-bold mb-2">{item.title}</h1>
                                    <p className="text-md mb-2">{item.description}</p>
                                    <img className="w-full h-48 object-cover rounded-lg mt-4"
                                         src={`img/${index === 0 ? "21" : index === 1 ? "22" : "15"}.jpg`}
                                         alt={item.title}/>
                                </div>
                        ))}
                        {Wlosy.map((item, index) => (
                                <div key={index} className="text-center mb-8 p-4 border rounded-lg shadow-lg bg-white w-full md:w-1/2 lg:w-1/2 xl:w-1/3 m-2">
                                    <FaCut className="text-5xl mb-4 mx-auto" />
                                    <h1 className="text-xl font-bold mb-2">{item.title}</h1>
                                    <p className="text-md mb-2 whitespace-pre-line">{item.description}</p>
                                    <p className="text-md font-semibold">{item.time}</p>
                                    <p className="text-md font-semibold">{item.price}</p>
                                    <img className="w-full h-48 object-cover rounded-lg mt-4" src={`img/włosyN${index + 1}.jpg`} alt={item.title} />
                                </div>
                        ))}
                    </div>
                </div>
            </div>
                </>
    );
};
