import { useEffect, useState } from 'react';
import LightButton from '../../assets/website/light-mode-button.png';
import DarkButton from '../../assets/website/dark-mode-button.png';

const DarkMode = () => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    const [theme, setTheme] = useState(storedTheme);
    const element = document.documentElement;

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };

    useEffect(() => {
        if (theme === 'dark') {
            element.classList.add('dark');
        } else {
            element.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme, element]);

    return (
        <div className='relative'>
            <img
                src={LightButton}
                alt="Light Mode"
                onClick={toggleTheme}
                className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 
                ${theme === 'dark' ? 'opacity-0' : 'opacity-100'}`}
            />
            <img
                src={DarkButton}
                alt="Dark Mode"
                onClick={toggleTheme}
                className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 
                ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}
            />
        </div>
    );
};

export default DarkMode;
