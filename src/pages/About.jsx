// About.jsx
import { SpaOferts } from "../components/SpaOferts.jsx";
import { DetalSpa, DetalBasen, DetalGabinet, DetalWlosy } from "../Text.js";
import { FaSwimmingPool, FaSpa, FaCut, FaLeaf } from 'react-icons/fa'; // Import ikon

const renderDetails = (details) => {
    return (
            <ul className="list-disc list-inside text-left">
                {Object.entries(details).map(([key, value], index) => (
                        <li key={index} className="mb-1">
                            <strong>{key.replace(/([A-Z])/g, ' $1')}: </strong>
                            {Array.isArray(value) ?
                                    <ul className="list-disc ml-6">
                                        {value.map((item, i) => <li key={i}>{item}</li>)}
                                    </ul> :
                                    value}
                        </li>
                ))}
            </ul>
    );
};

export const About = () => {
    return (
            <>
                <div className="container mx-auto px-4 py-8">
                    <h2 className="text-3xl font-semibold mb-6">Nasze Detale</h2>

                    <div className="w-full flex flex-wrap justify-center">
                        {DetalSpa.map((item, index) => (
                                <div key={index} className="text-center mb-8 p-4 border rounded-lg shadow-lg bg-white w-full md:w-1/2 lg:w-1/3 xl:w-1/4 m-2">
                                    <FaSpa className="text-5xl mb-4 mx-auto" />
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-md mb-2">{item.description}</p>
                                    <p className="text-sm text-gray-600">Lokalizacja: {item.place}</p>
                                    <p className="text-sm text-gray-600">Hotel: {item.name}</p>
                                    {renderDetails(item.additionalDetails)}
                                </div>
                        ))}

                        {DetalBasen.map((item, index) => (
                                <div key={index} className="text-center mb-8 p-4 border rounded-lg shadow-lg bg-white w-full md:w-1/2 lg:w-1/3 xl:w-1/4 m-2">
                                    <FaSwimmingPool className="text-5xl mb-4 mx-auto" />
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-md mb-2">{item.description}</p>
                                    <img className="w-full h-48 object-cover rounded-lg mt-4" src={`img/2${index + 1}.jpg`} alt={item.title} />
                                    {renderDetails(item.additionalDetails)}
                                </div>
                        ))}

                        {DetalGabinet.map((item, index) => (
                                <div key={index} className="text-center mb-8 p-4 border rounded-lg shadow-lg bg-white w-full md:w-1/2 lg:w-1/3 xl:w-1/4 m-2">
                                    <FaLeaf className="text-5xl mb-4 mx-auto" />
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-md mb-2">{item.description}</p>
                                    <img className="w-full h-48 object-cover rounded-lg mt-4"
                                         src={`img/${[14, 17, 7][index]}.jpg`} alt={item.title}/>
                                    {renderDetails(item.additionalDetails)}
                                </div>
                        ))}

                        {DetalWlosy.map((item, index) => (
                                <div key={index} className="text-center mb-8 p-4 border rounded-lg shadow-lg bg-white w-full md:w-1/2 lg:w-1/2 xl:w-1/3 m-2">
                                    <FaCut className="text-5xl mb-4 mx-auto" />
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-md mb-2 whitespace-pre-line">{item.description}</p>
                                    <p className="text-md font-semibold">{item.time}</p>
                                    <p className="text-md font-semibold">{item.price}</p>
                                    <img className="w-full h-48 object-cover rounded-lg mt-4" src={`img/włosyN${index + 1}.jpg`} alt={item.title} />
                                    {renderDetails(item.additionalDetails)}
                                </div>
                        ))}
                    </div>
                </div>
            </>
    );
};
