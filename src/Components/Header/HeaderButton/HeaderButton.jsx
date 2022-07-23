import './HeaderButton.css'
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const HeaderButton = () => {
        return (
            <button className='header-button'>
                <a href="#">
                    <FontAwesomeIcon
                        icon={faPaperPlane}
                        color='#BCD4E9'
                        className="icon"
                    />
                    My ISWA</a>
            </button>
        )
}