// Button.jsx
export const Button = ({ onClick, children, className, href }) => {
    const buttonStyle = "bg-white bg-opacity-30 backdrop-filter backdrop-blur-md rounded-2xl shadow-lg p-2 border border-white/20 hover:shadow-2xl transition-all ease-in-out duration-300 transform hover:-translate-y-2 flex items-center justify-center text-gray-800";

    const btn = () => (
            <div className={`${buttonStyle} ${className}`}>
                <button onClick={onClick} className="dark:hover:text-gray-600 hover:text-neutral-300">{children}</button>
            </div>
    );

    const a = () => (
            <div className={`${buttonStyle} ${className}`}>
                <a href={href} className="dark:hover:text-gray-600 hover:text-neutral-300">{children}</a>
            </div>
    );

    return href ? a() : btn();
};
