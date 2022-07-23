import './HeaderSearch.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

export const HeaderSearch = () => {
    return (
        <>
            <div className="search-wrapper">
                <input
                    className="header-search"
                    type="text"
                    placeholder="Search this site"
                />
                <FontAwesomeIcon
                    icon={faSearch}
                    className="icon-search"
                />
            </div>
        </>
    )
}