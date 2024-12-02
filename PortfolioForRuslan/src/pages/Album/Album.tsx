import  { useState, useEffect } from "react";
import  cl from "./Album.module.css";
import img1 from '../../assets/img/Album/1.jpg'
import img2 from '../../assets/img/Album/2(1).jpg'
import img3 from '../../assets/img/Album/3.jpg'
import img4 from '../../assets/img/Album/4.jpg'
import img5 from '../../assets/img/Album/5.jpg'
import img6 from '../../assets/img/Album/6.jpg'
import img7 from '../../assets/img/Album/7.jpg'
import img8 from '../../assets/img/Album/8.jpg'
import img9 from '../../assets/img/Album/9.jpg'
import img11 from '../../assets/img/Album/10.jpg'
import img12 from '../../assets/img/Album/11.jpg'
import img13 from '../../assets/img/Album/12.jpg'
import img14 from '../../assets/img/Album/13.jpg'
import img15 from '../../assets/img/Album/14.jpg'
import img16 from '../../assets/img/Album/15.jpg'
import img17 from '../../assets/img/Album/16.jpg'
import img22 from '../../assets/img/Album/17.jpg'
import img33 from '../../assets/img/Album/33.jpg'
import {Header} from "../../widgets/pagesComponents/Header/Header.tsx";

export function MyAlbum() {
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img11, img11 ,img12 , img13, img14, img15, img16, img17,  img22, img33]; // Массив с изображениями
    const [currentIndex, setCurrentIndex] = useState(0);

    // Меняет изображение каждые 3 секунды
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval); // Очистка интервала при размонтировании
    }, [images.length]);

    return (
        <>
        <Header></Header>
        <div className={cl['carousel-container']}>
            <img
                src={images[currentIndex]}
                alt={`Picture-${currentIndex + 1}`}
                className={cl["carousel-image"]}
            />
        </div>
        </>
    );
}
