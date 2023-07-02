import React, {useEffect, useMemo, useState} from "react";
import './style.css';

//const textContents = ["Hello World", "Good Appetite", "Ciao"];
const textStates = {isTyping: "isTyping", isDeleting: "isDeleting"};

export const TypeWriter = (props) => {
    const textContents = props?.textContents || ["Hello World", "Good Appetite", "Ciao"];
    const typeTimeGap = props?.typeTimeGap || 200;

    const [textState, setTextState] = useState(textStates.isTyping);
    const [textIndex, setTextIndex] = useState(0);
    const textContent = useMemo(()=> textContents[textIndex], [textContents,textIndex]);

    const [textDisplay, setTextDisplay] = useState('');

    useEffect(() => {
        const timeout = setTimeout(() => {
            if(textState === textStates.isTyping && textDisplay !== textContent) {
                setTextDisplay(textContent.slice(0, textDisplay.length + 1));
            }
            else if(textState === textStates.isTyping && textDisplay === textContent) {
                // type out all text, then wait, and then delete
                sleep(2000).then(()=>{
                    setTextState(textStates.isDeleting);
                })
            }
            else if(textState === textStates.isDeleting) {
                setTextDisplay(textDisplay.slice(0, textDisplay.length - 1));
                if(textDisplay === '') {
                    // delete all text, then type
                    setTextIndex((textIndex + 1) % textContents.length); // switch to next text
                    setTextState(textStates.isTyping);
                }
            }
        }, typeTimeGap);
        return () => clearTimeout(timeout);
    }, [textDisplay, textState]);

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    return (
        <div
            className={"text-white"}
            style={{
                textEllipsis: "clip",
                overflow: "hidden",
            }}
            // style={{
            // display: 'flex',
            // justifyContent: 'center',
            // alignItems: 'center',
            // width: '100vw',
            // height: '100vh'}}
        >
            <p className={"blink"}>{textDisplay}</p>
        </div>
    );
}

export  default TypeWriter;