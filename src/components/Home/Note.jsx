import React, {useEffect, useState} from 'react';
import './Note.css';

function Note() {
    const [showNote, setShowNote] = useState(true);

    useEffect(() => {
        const T =setTimeout(() => {
            setShowNote(false);
        }, 5000);
        return () => {
            clearTimeout(T);
        }
    }, []);

    const timelyCloseNote = () => {
        setTimeout(() => {
            setShowNote(false);
        }, 5000);
    }

    return (
        <div className="note">
            <p className={`${showNote ? 'show-note' : 'hide-note'}`}>
                Hi, welcome. Now I am working on 2 projects: <br/>
                One is a indie MERN full-stack app, calculating date: <br />
                <a href="https://opt-cal-mern-front.onrender.com/" target="_blank" rel="noopener noreferrer">opt app here</a>.<br />
                The other one is a website for a new startup called WanderFlow:<br />
                <a href="https://wandeflowv2.vercel.app/" target="_blank" rel="noopener noreferrer">WanderFlow here</a>.<br />
                Please feel free to check :)
            </p>
            <button
                onClick={() => {
                    setShowNote(prevState => !prevState)
                    timelyCloseNote();
                }}
                className={`note-btn ${showNote ? 'open' : ''}`}
            >
                Notes
            </button>
        </div>
    );
}

export default Note;