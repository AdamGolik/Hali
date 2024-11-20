// components/CookiesConsent.jsx
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export const CookiesConsent = () => {
    const [showConsent, setShowConsent] = useState(false);

    useEffect(() => {
        // Sprawdź czy użytkownik już zaakceptował cookies
        const userConsent = Cookies.get('cookies-accepted');
        if (!userConsent) {
            setShowConsent(true);
        }
    }, []);

    const acceptCookies = () => {
        // Zapisz zgodę na cookies i zamknij pasek zgody
        Cookies.set('cookies-accepted', 'true', { expires: 365 });
        setShowConsent(false);
    };

    const declineCookies = () => {
        // Zapisz brak zgody na cookies i zamknij pasek zgody
        Cookies.set('cookies-accepted', 'false', { expires: 365 });
        setShowConsent(false);
    };

    if (!showConsent) {
        return null;
    }

    return (
            <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-between items-center z-50">
                <p>Ta strona używa plików cookie, aby zapewnić najlepszą jakość usług. Kontynuując przeglądanie strony, wyrażasz zgodę na ich użycie.</p>
                <div>
                    <button onClick={acceptCookies} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                        Akceptuję
                    </button>
                    <button onClick={declineCookies} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Nie akceptuję
                    </button>
                </div>
            </div>
    );
};
