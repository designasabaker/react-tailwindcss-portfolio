import {Link} from "react-router-dom";
import {FiChevronLeft, FiChevronUp} from "react-icons/fi";
import {useEffect, useState} from "react";

export const BackToProjects = () => {
    const [showScroll, setShowScroll] = useState(false);

    const scrollToTop = () => {
        if (!showScroll && window.pageYOffset > 100) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 100) {
            setShowScroll(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', scrollToTop);
        return function cleanup() {
            window.removeEventListener('scroll', scrollToTop);
        };
    });

    return (
        <div
            className="text-white dark:text-white px-3 py-1 border rounded-lg"
            style={{
                opacity: showScroll ? 1 : 0,
                position: "fixed",
                bottom: '50vh',
                left: 10,
                zIndex: 100,
                transition: "all 0.3s ease-in-out",
                border: 'none',
        }}>
            <Link to="/projects">
                <FiChevronLeft
                    style={{
                        height: 45,
                        width: 45,
                        border: '1px solid white',
                        borderRadius: 50,
                        right: 50,
                        bottom: 50,
                        display: showScroll ? 'flex' : 'none',
                        padding: 5,
                        transition: 'all 0.3s ease-in-out',
                    }}
                    //className="dark:text-primary-light dark:hover:bg-white dark:border-white cursor-pointer hover:animate-ping fixed z-50"
                />
            </Link>
        </div>
    );
}