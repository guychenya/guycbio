import React, { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.body.setAttribute('data-theme', newTheme);
    };

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <button onClick={toggleTheme} style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            padding: '10px',
            borderRadius: '8px',
            border: '1px solid var(--border-color)',
            background: 'var(--card-background)',
            color: 'var(--text-primary)',
            cursor: 'pointer',
        }}>
            Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
        </button>
    );
};

export default ThemeSwitcher;
