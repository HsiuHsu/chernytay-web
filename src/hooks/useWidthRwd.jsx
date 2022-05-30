import { useState, useEffect } from 'react';

const useWidthRwd = () => {
    const [width, setWidth] = useState(document.documentElement.clientWidth)
    const handleWidth = () => setWidth(document.documentElement.clientWidth)
    useEffect(() => {
        handleWidth()
        window.addEventListener('resize', handleWidth);
        return (() => {
            window.removeEventListener('resize', handleWidth);
        })
    }, []);

    return width;
}

export default useWidthRwd;