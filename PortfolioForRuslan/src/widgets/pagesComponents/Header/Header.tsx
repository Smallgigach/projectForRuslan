import cl from "./Header.module.css"
import logo from "../../../assets/img/Header/Logo.png"
import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";
import backgroundLigth from "../../../assets/changeBackground/icons8-day-and-night-50.png";
import backgroundDark from '../../../assets/changeBackground/icons8-день-и-ночь-50.png';
export function Header() {
    let [backgroundFon, setBackgroundFon] = useState(() => {
        const saved: boolean = localStorage.getItem('background');
        const initialValue = JSON.parse(saved);
        return initialValue || false;
    });
    const [isModalVisible, setModalVisible] = useState(false);
    const changeBackground = () => {
        setBackgroundFon(!backgroundFon);
    };
    useEffect(() => {
        if (backgroundFon) {
            localStorage.setItem('background', JSON.stringify(backgroundFon));
            document.body.style.backgroundColor = '#909090';
            document.body.style.color = 'white';

        } else {
            localStorage.setItem('background', JSON.stringify(backgroundFon));
            document.body.style.backgroundColor = 'white';
            document.body.style.color = '#6F4C3E';
        }
    }, [backgroundFon]);
    return (
        <>
            <div className={cl['container-header']}>
                <div className={cl['header-container__logo']}>
                    <img src={logo} alt={'logo-png'}/>
                </div>
                <span className={cl['header-container__nav']}>
                    <NavLink to={'/'} className={cl['header-container__nav-title']}>Home</NavLink>
                </span>
                    <span className={cl['header-container__nav']}>
                        <NavLink to={'/favoutitePlaces'} className={cl['header-container__nav-title']}>Favourite places</NavLink>
                    </span>
                    <span className={cl['header-container__nav']}>
                        <NavLink to={'/album'} className={cl['header-container__nav-title']}>My album</NavLink>
                    </span>
                <span className={cl['header-container__bakground']} onClick={changeBackground}>
                   {
                       !backgroundFon ?
                           <>
                               <img src={backgroundDark} />

                           </>
                           : (
                               <img src={backgroundLigth} />
                           )
                   }
                </span>
            </div>
        </>
    )
}