import React, {useState} from 'react';
import {motion} from "framer-motion";
import zoomIcon from "../../assets/zoom.ico";

export const ClickableImage = (props) => {
    const {src, alt, id} = props;
    const [isOpen, setIsOpen] = useState(false);

    function handleSmallImageClick(e) {
        e.stopPropagation();
        setIsOpen(true);
    }

    function handleLargeImageClick() {
        setIsOpen(false);
    }

    console.log('id isOpen:', id, isOpen)

    return (
        <>
        <div className={"hover-zoom"}>
            <img
                key={`${id}-small`}
                // className="hover-zoom max-h-screen max-w-screen-md object-fill rounded-xl shadow-lg sm:shadow-none hover:scale-125 cursor-pointer"
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "0.5rem",
                    cursor: "pointer",
                    transition: "all 0.5s ease-in-out",
                }}
                src={src}
                alt={alt}
                onClick={handleSmallImageClick}
            />
        </div>
        {/*  larger view */}
        {isOpen && (
            <motion.div
                animate={{
                    x: 0,
                    backgroundColor: "rgba(0,0,0,0.75)",
                    position: "fixed",
                    transitionEnd: {
                        boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
                    },
                }}
                key={`${id}-largeBox`}
                style={{
                    position: "fixed",
                    width: "100vw",
                    height: "100vh",
                    top: 0,
                    left: 0,
                    zIndex: 100,
                }}
                // className={"fixed top-0 left-0 z-100 w-full h-full bg-black bg-opacity-75 flex justify-center items-center"}
                onClick={handleLargeImageClick}
            >
                {/*<p>Large</p>*/}
                <div className={"w-full h-full flex flex-row justify-center items-center"}>
                    <img
                        key={`${id}-large`}
                        className="block mx-auto contain rounded-lg"
                        src={src}
                        alt={alt}
                        style={{
                            maxHeight: "66vh",
                            maxWidth: "66vw",
                        }}
                    />
                </div>
            </motion.div>
        )}
        </>
    )
}

export default ClickableImage;