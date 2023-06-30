import React, {useEffect, useState} from 'react';
import {motion} from "framer-motion";
import zoomIcon from "../../assets/zoom.ico";
import {CircularProgress} from "@material-ui/core";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import {CloseOutlined, CloseCircleOutlined} from "@ant-design/icons";

export const ClickableImage = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const {src, alt, id, isLarge=false} = props;
    const [isOpen, setIsOpen] = useState(false);
    // const [zoom, setZoom] = useState(1);
    const [T, setT] = useState(null);

    function handleSmallImageClick(e) {
        e.stopPropagation();
        setIsOpen(true);
        const t =setTimeout(() => {
            setIsOpen(false);
        }, 5000);
        setT(t);
    }

    function handleLargeImageClick(e) {
        e.stopPropagation();
        setIsOpen(false);
    }

    useEffect(() => {
        return () => {
            clearTimeout(T);
        }
    },[])


    console.log('id isOpen:', id, isOpen)

    return (
        <>
        <div className={"hover-zoom"}>
            <div
                style={{
                    display: isLoading ? "block" : "none",
                    width: "100%",
                    height: "240px",
                    objectFit: "cover",
                    borderRadius: "0.5rem",
                    cursor: "wait",
                    transition: "all 0.5s ease-in-out",
            }}><CircularProgress /></div>
            <img
                key={`${id}-small`}
                // className="hover-zoom max-h-screen max-w-screen-md object-fill rounded-xl shadow-lg sm:shadow-none hover:scale-125 cursor-pointer"
                style={{
                    display: isLoading ? "none" : "block",
                    width: "100%",
                    height: "240px",
                    objectFit: "cover",
                    borderRadius: "0.5rem",
                    cursor: "pointer",
                    transition: "all 0.5s ease-in-out",
                }}
                src={src}
                alt={alt}
                onClick={handleSmallImageClick}
                onLoad={() => {setIsLoading(false)}}
            />
        </div>

        {/*  larger view */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        ease: 'easeInOut',
                    }}
                    style={{
                        width:'100vw',
                        height:'100vh',
                        position:'fixed',
                        top:0,
                        left:0,
                        zIndex: 1000,  // ensure this is on top
                    }}
                    // onClick={handleLargeImageClick}  // bind click event here
                >
                    <div
                        style={{
                            width:'100%',
                            height:'100%',
                            backgroundColor:'rgba(0,0,0,0.5)',
                            position: "relative",
                        }}>
                        <p>Large</p>
                        <div
                            className={"flex flex-row justify-center items-center align-top"}
                            style={{width:'100%', height:'100%'}}>
                            <div className={"flex flex-row items-start"}>
                                <TransformWrapper>
                                    <TransformComponent >
                                        <img
                                            key={`${id}-large`}
                                            className=""
                                            src={src}
                                            alt={alt}
                                            style={{
                                                maxHeight: isLarge ? "90vh" : "66vh",
                                                maxWidth: isLarge ? "90vw" : "66vw",
                                            }}
                                        />
                                    </TransformComponent>
                                    <button
                                        style={{
                                            width: "40px",
                                            height: "40px",
                                            color:'white',
                                        }}
                                        onClick={handleLargeImageClick}>
                                        <CloseCircleOutlined />
                                    </button>
                                </TransformWrapper>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </>
    )
}

export default ClickableImage;