import './SubHeader.css';

export const SubHeader = () => {
    return(
        <>
            <div className="sub-header">
                <div className="sub-header-box">
                    <div className="sub-header-img">
                        <img src="/images/logo.png" alt="logo"/>
                    </div>
                    <ul className="sub-header-nav">
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Enlorment</a>
                        </li>
                        <li>
                            <a href="#">Learning</a>
                        </li>
                        <li>
                            <a href="#">Student Live</a>
                        </li>
                        <li>
                            <a href="#">Community</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}