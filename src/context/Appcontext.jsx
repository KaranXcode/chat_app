import { createContext, useState } from "react";

export const Appcontext = createContext();
const AppContextProvider = (props) => {
    const [userData, setUserData] = useState(null);
    const [chatData, setchatData] = useState(null);
    const value = {
        userData, setUserData,
        chatData,setchatData
    }
    return (
        <AppContextProvider value={value}>
            {props.children}
        </AppContextProvider>
    )
}
export default AppContextProvider