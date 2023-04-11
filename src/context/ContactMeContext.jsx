import { useState, createContext } from 'react';
import {throttle} from "./throttle";


const ContactMeContext = createContext();

export const ContactMeProvider = ({ children }) => {
    return (
        <ContactMeContext.Provider
            value={{
                throttle,
            }}
        >
            {children}
        </ContactMeContext.Provider>
    );
};