import { useState, useEffect } from 'react';

const useWidthRwd = () => {
    const [width, setWidth] = useState(document.documentElement.clientWidth)
    const getWidth = () => setWidth(document.documentElement.clientWidth)
    useEffect(() => {
        getWidth()
        window.addEventListener('resize', getWidth);
        return (() => {
            window.removeEventListener('resize', getWidth);
        })
    }, []);
    return width;
}

export default useWidthRwd;