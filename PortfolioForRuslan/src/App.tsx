import {Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage/MainPage.tsx";
import './index.css'
import {FavouritePlaces} from "../src/pages/FavouritePlaces/FavPlaces.tsx";
import {MyAlbum} from "./pages/Album/Album.tsx";
function App() {
    return (
        <>
            <Routes>

            <Route path={'/'} element={<MainPage/>} />
                <Route path={"/favoutitePlaces"} element={<FavouritePlaces/>}></Route>
                <Route path={"/album"} element={<MyAlbum/>}></Route>
            </Routes>
        </>
    )
}

export default App
