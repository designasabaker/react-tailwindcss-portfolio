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
    const [isGrabbing, setIsGrabbing] = useState(false);

    function handleSmallImageClick(e) {
        e.stopPropagation();
        setIsOpen(true);
        // const t =setTimeout(() => {
        //     setIsOpen(false);
        // }, 5000);
        // setT(t);
    }

    function handleLargeImageClick(e) {
        e.stopPropagation();
        const target = e.target;
        //console.log('e target: ',target);
        //console.log('e target id: ',target.getAttribute('id'));
        const id = target.getAttribute('id');
        //console.log('child name', target.children);

        if(id !== 'div2') return;
        setIsOpen(false);
    }

    function handleCloseBtnClick(){
        setIsOpen(false);
    }

    useEffect(() => {
        return () => {
            clearTimeout(T);
        }
    },[])


    //console.log('id isOpen:', id, isOpen)

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
                    onClick={(e)=>handleLargeImageClick(e)}  // bind click event here
                >
                    <div
                        id={"div"}
                        style={{
                            width:'100%',
                            height:'100%',
                            backgroundColor:'rgba(0,0,0,0.5)',
                            position: "relative",
                            cursor: isGrabbing ? "grabbing" : "grab",
                        }}
                        onMouseDown={()=>setIsGrabbing(true)}
                        onMouseUp={()=>setIsGrabbing(false)}
                    >
                        <p>Large</p>
                        <div
                            id={"div2"}
                            className={"flex flex-row justify-center items-center align-top"}
                            style={{width:'100%', height:'100%'}}>
                            <div id={"nonC"} className={"flex flex-row items-start"}>
                                <TransformWrapper name={"largeImage"} onMouseDown={(e)=>e.stopPropagation()}>
                                    <TransformComponent name={"largeImage"}>
                                        <img
                                            id="largeImage"
                                            name={"largeImage"}
                                            key={`${id}-large`}
                                            src={src}
                                            alt={alt}
                                            style={{
                                                maxHeight: isLarge ? "99vh" : "66vh",
                                                maxWidth: isLarge ? "99vw" : "66vw",
                                            }}
                                            onMouseDown={(e)=>e.stopPropagation()}
                                        />
                                    </TransformComponent>
                                    <button
                                        style={{
                                            width: "40px",
                                            height: "40px",
                                            color:'white',
                                        }}
                                        onClick={handleCloseBtnClick}>
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