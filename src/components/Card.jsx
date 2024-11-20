import { FaStar, FaThumbsUp, FaClock, FaTag, FaHeart } from 'react-icons/fa';
import { useState } from 'react';

export const Card = ({ price, time, desc, title, rank}) => {
    const [liked, setLiked] = useState(false);
    const [favourited, setFavourited] = useState(false);

    const masaze = () => (
            <div className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-md rounded-2xl lg:h-[24rem] sm:h-[20rem] shadow-lg p-2 w-[28rem] border border-white/20 hover:shadow-2xl transition-all ease-in-out duration-300 transform hover:-translate-y-2 max-w-xs mx-auto sm:max-w-sm lg:max-w-md flex flex-col items-center">
                {/* Tytuł */}
                <div className="text-center w-full">
                    <h1 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center justify-center gap-2">
                        <FaTag className="text-gray-500" />
                        {title}
                    </h1>
                </div>

                {/* Ocena (gwiazdki) */}
                <div className="flex justify-center items-center mb-3">
                    {[...Array(rank)].map((_, i) => (
                            <FaStar
                                    key={i}
                                    className="text-yellow-400 text-lg animate-bounce"
                                    style={{animationDelay: `${i * 0.1}s`}}
                            />
                    ))}
                </div>
{/*
                 Polubienia
                <div className="flex justify-center items-center text-gray-600 mb-3">
                    <FaThumbsUp className="text-blue-500 mr-2 text-lg"/>
                    <span className="text-sm">{likes} likes</span>
                </div>*/}

                {/* Opis */}
                <p className="text-sm text-gray-700 leading-relaxed text-center">{desc}</p>
                {/* Przyciski Like i Favourite */}
                <div className="flex gap-4 mt-6">
                    <button
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                                    liked ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                            }`}
                            onClick={() => setLiked(!liked)}
                    >
                        <FaThumbsUp className={liked ? 'text-white' : 'text-blue-500'} />
                        {liked ? 'Lubię to' : 'Lubię'}
                    </button>
                    <button
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                                    favourited ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                            }`}
                            onClick={() => setFavourited(!favourited)}
                    >
                        <FaHeart className={favourited ? 'text-white' : 'text-red-500'} />
                        {favourited ? 'Ulubione' : 'Ulubiony'}
                    </button>
                </div>
                <div className="w-full mt-auto flex justify-between px-4">
                    {/* Cena */}
                    <div className="flex justify-center items-center">
        <span className="text-lg font-medium text-gray-800 flex items-center gap-2">
            <FaTag className="text-green-500"/>
            {price}
        </span>
                    </div>

                    {/*Czas*/}
                    <div className="flex items-center">
                        <span className="text-lg mt-1 mr-2">{time}</span>
                        <FaClock className="text-gray-500 text-xl "/>
                    </div>
                </div>
            </div>
    );
    return masaze();
};
