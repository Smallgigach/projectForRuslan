import {Header} from "../../widgets/pagesComponents/Header/Header.tsx";
import cl from './MainPage.module.css'
import mainAvatar from '../../assets/img/Main/Photo.jpg'
import {Link} from "react-router-dom";
export function MainPage() {
return (
    <>
        <Header />
        <div className={cl['container-information']}>
            <div className={cl['container-information__image']}>
                <img src={mainAvatar} className={cl['mainAvatar']} alt={'mainAvatar'}/>
            </div>
            <div className={cl['container-information__title']}>
                Arseniy Byzov
            </div>
            <div className={cl['container-information__subtitle']}>
                But every dark night is necessarily followed by a bright morning dawn, staining the darkness with bright colors. It always happens that way. Our life is a cycle. Everything ends, and even darkness becomes light.
            </div>
            <div className={cl['container-information__links']}>
                <Link to="https://t.me/anon3gim" className={cl['link']}>Telegram channel of our school</Link>
                <Link to="https://gimnazia3okt.02edu.ru/" className={cl['link']}>Our school's website</Link>
                <Link to="https://dobro.ru/organizations/920668/info" className={cl['link']}>The volunteer squad of our school</Link>
            </div>
        </div>
    </>
)
}