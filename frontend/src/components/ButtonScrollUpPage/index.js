import React from 'react';
import './ButtonScrollUpPage.scss'


const ButtonScrollUpPage = () => {
    const [scroll, setScroll] = React.useState(0);

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    const handleUpButton = () => {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            window.scrollBy(0, -100);
            setTimeout(handleUpButton, 5);
        }
    };

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="btn-scroll">
            <button
                className={scroll < 300 ? "" : "show"}
                onClick={handleUpButton}
            >
            </button>
            <div>
                <p>
                </p>
            </div>
        </div>
    )
}

export default ButtonScrollUpPage;
