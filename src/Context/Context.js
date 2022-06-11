import React, { useState } from 'react'
export const AppContext = React.createContext();

export const AppState = (props) => {
    const [filterName, setfilterName] = useState("Nothing");
    return (
        <AppContext.Provider value={{ filterName, setfilterName }}>
            {props.children}
        </AppContext.Provider>
    )
}