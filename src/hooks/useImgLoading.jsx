import React, { useState, useEffect } from 'react'

function useImgLoading() {
    // 圖片加載時
    const [imageIsLoading, setImageIsLoading] = useState(true);
    const [image, setImage] = useState({});
    const handleImageLoaded = () => {
        setImageIsLoading(false);
    };
    useEffect(() => {
        const image = new Image();
        image.onload = handleImageLoaded;
        image.src = '/image/分離式冷氣室外機.jpg'
        setImage(image);
    }, []);
    return imageIsLoading
}

export default useImgLoading