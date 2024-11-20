// src/components/SpaOferts.jsx
import { Card } from "./Card.jsx";
import { Masaze, ZabiegiNaTwarz, ZabiegiNaCialo } from "../Text.js";

export const SpaOferts = () => {
    return (
            <div className="flex flex-col items-center justify-center mt-6 lg:mx-6">
                <div className="gap-4 flex flex-col lg:flex-row lg:space-x-4">
                    <div className="flex flex-col items-center w-full lg:w-1/3">
                        <div className="gap-4 flex flex-col items-center">
                            <h2 className="text-2xl font-bold">Masaże</h2>
                            <img src="/img/3.jpg" alt="Masaze" className="w-full h-64 object-cover rounded-lg shadow-md" />
                            {Masaze.map((masaże, index) => (
                                    <Card
                                            rank={5}
                                            key={index}
                                            title={masaże.title}
                                            desc={masaże.description}
                                            time={masaże.time}
                                            price={masaże.price}
                                    />
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col items-center w-full lg:w-1/3">
                        <div className="gap-4 flex flex-col items-center">
                            <h2 className="text-2xl font-bold">Zabiegi na Twarz</h2>
                            <img src="/img/3.jpg" alt="Zabiegi na Twarz" className="w-full h-64 object-cover rounded-lg shadow-md" />
                            {ZabiegiNaTwarz.map((zabieg, index) => (
                                    <Card
                                            rank={5}
                                            key={index}
                                            title={zabieg.title}
                                            desc={zabieg.description}
                                            time={zabieg.time}
                                            price={zabieg.price}
                                    />
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col items-center w-full lg:w-1/3">
                        <div className="gap-4 flex flex-col items-center">
                            <h2 className="text-2xl font-bold">Zabiegi na Ciało</h2>
                            <img src="/img/3.jpg" alt="Zabiegi na Ciało" className="w-full h-64 object-cover rounded-lg shadow-md" />
                            {ZabiegiNaCialo.map((zabieg, index) => (
                                    <Card
                                            rank={5}
                                            key={index}
                                            title={zabieg.title}
                                            desc={zabieg.description}
                                            time={zabieg.time}
                                            price={zabieg.price}
                                    />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
    );
};
