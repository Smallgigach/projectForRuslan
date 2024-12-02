import cl from './FavPlaces.module.css';
import moscowCity from '../../assets/img/FavPlaces/Moscow City.jpg';
import moscowSquare from '../../assets/img/FavPlaces/img.png'
import moscowMetro from '../../assets/img/FavPlaces/metro_img.png'
import {Header} from "../../widgets/pagesComponents/Header/Header.tsx";

export function FavouritePlaces() {
    return (
        <>
        <Header></Header>
        <div className={cl['container-fav-places-wrapper']}>
            <div className={cl['container-fav-places_block']}>
                <img src={moscowCity} alt="Moscow" className={cl['img']} />
                <span className={cl['container-fav-places__title']}>Moscow City</span>
                <div className={cl['container-fav-places_text']}>
                    Moscow City is a modern business district in the center of Moscow, located on Presnenskaya
                    Embankment. There are offices of large companies, residential apartments and entertainment
                    complexes. The area is actively developing and becoming a popular tourist destination.
                </div>
            </div>
            <div className={cl['container-fav-places_block']}>
                <img src={moscowSquare} alt="Moscow" className={cl['img']} />
                <span className={cl['container-fav-places__title']}>Red Squarey</span>
                <div className={cl['container-fav-places_text']}>
                    Red Square is the main square of Moscow and Russia, located between the Moscow Kremlin and Kitay-Gorod. It serves as a venue for military parades, demonstrations and social events. There are historical sights on the square, such as the Frontal Place, the monument to Minin and Pozharsky and the Mausoleum of Vladimir Lenin.
                </div>
            </div>
            <div className={cl['container-fav-places_block']}>
                <img src={moscowMetro} alt="Moscow" className={cl['img']} />
                <span className={cl['container-fav-places__title']}>Moscow Metro</span>
                <div className={cl['container-fav-places_text']}>
                    The Moscow Metro is one of the largest and most beautiful subways in the world. It consists of 14 lines with a total length of about 350 kilometers and carries more than 7.5 million passengers daily. The metro is an important transport artery of the capital and plays a significant role in ensuring the mobility of residents and visitors of the city.
                </div>
            </div>
        </div>
        </>
    );
}
