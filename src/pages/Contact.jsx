// Contact.jsx
import { FaFacebook, FaInstagram, FaMapMarkedAlt, FaPhone, FaEnvelope } from 'react-icons/fa'; // Import ikon

const contactDetails = [
    {
        type: 'Email',
        icon: FaEnvelope,
        value: 'HalinaSzturc@gmail.com',
        link: 'mailto:halinka503@gmail.com',
        color: 'bg-gradient-to-r from-blue-500 to-blue-700',
    },
    {
        type: 'Telefon',
        icon: FaPhone,
        value: '503 026 660',
        link: 'tel:503026660',
        color: 'bg-gradient-to-r from-green-500 to-green-700',
    },
    {
        type: 'Facebook',
        icon: FaFacebook,
        value: 'facebook.com',
        link: 'https://www.facebook.com/hotelnewwave',
        color: 'bg-gradient-to-r from-indigo-500 to-indigo-700',
    },
    {
        type: 'Instagram',
        icon: FaInstagram,
        value: 'instagram.com',
        link: 'https://www.instagram.com/spanewwave/',
        color: 'bg-gradient-to-r from-pink-500 to-pink-700',
    },
];

export const Contact = () => {
    return (
            <div className="container mx-auto px-4 py-12">
                <h2 className="text-4xl font-semibold mb-10 text-center">Kontakt</h2>

                <div className="grid gap-8 mb-12 sm:grid-cols-2 lg:grid-cols-4">
                    {contactDetails.map((contact, index) => (
                            <a key={index} href={contact.link} target="_blank" rel="noopener noreferrer" className={`text-center p-8 border rounded-lg shadow-lg ${contact.color} text-white transform hover:scale-105 transition-transform duration-300 cursor-pointer`}>
                                <contact.icon className="text-6xl mb-4 mx-auto" />
                                <p className="text-xl font-semibold mb-2">{contact.type}</p>
                                <p className="text-lg break-words">{contact.value}</p>
                            </a>
                    ))}
                </div>

                <div className="text-center mb-10">
                    <p className="text-2xl font-semibold mb-2"><a href="https://newwave.pl">newwave.pl</a></p>
                </div>

                <div className="text-center mb-10 cursor-pointer" onClick={() => window.open('https://www.google.com/maps/place/Wis%C5%82a/', '_blank')}>
                    <FaMapMarkedAlt className="text-6xl mb-4 mx-auto text-green-700" />
                    <p className="text-xl font-semibold mb-4">Wisła</p>
                    <iframe className="w-full rounded-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2574.6083928188327!2d18.865717316114063!3d49.64727447936627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4714082824105f17%3A0x3e4d87613787e823!2sWis%C5%82a!5e0!3m2!1spl!2spl!4v1673544539070!5m2!1spl!2spl" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div className="text-center mb-10">
                    <h3 className="text-3xl font-semibold mb-4">Godziny Otwarcia</h3>
                    <p className="text-xl">Od Poniedziałku do Piątku: 8:00 - 18:00</p>
                    <p className="text-xl">Sobota: 9:00 - 14:00</p>
                    <p className="text-xl">Niedziela: Zamknięte</p>
                </div>

                <div className="text-center mb-10">
                    <div className="max-w-lg mx-auto p-6 border rounded-lg shadow-lg bg-gradient-to-r from-purple-500 to-purple-700 text-white">
                        <h4 className="text-2xl font-semibold mb-4">Nasze Usługi</h4>
                        <ul className="mb-4 text-left list-disc list-inside">
                            <li>Relaksacyjne masaże</li>
                            <li>Sauny i jacuzzi</li>
                            <li>Siłownia i fitness</li>
                            <li>Podstawowe i specjalistyczne zabiegi kosmetyczne</li>
                        </ul>
                        <a href="/services" className="text-lg underline">Zobacz pełną ofertę</a>
                    </div>
                </div>
            </div>
    );
};
