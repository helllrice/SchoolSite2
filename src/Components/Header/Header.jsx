import './Header.css'
import {Navigation} from "./Navigation/Navigation";
import {HeaderButton} from "./HeaderButton/HeaderButton";
import {HeaderSearch} from "./HeaderSearch/HeaderSearch";
import {SubHeader} from "./SubHeader/SubHeader";


export const Header = () => {
    return (
        <>
            <div className="header-wrapper">
                <div className="header-box">
                    <Navigation />
                    <HeaderButton />
                    <HeaderSearch />
                </div>
            </div>
            <SubHeader />
        </>
    )
}
