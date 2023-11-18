import { useState, createContext } from 'react';

export const UserContext = createContext({});

function UserProvider({ children }) {
    const [name, setName] = useState("Undefined")
    const [curso, setCurso] = useState("Curso React JS")
    
    return(
        <UserContext.Provider value={{ name, setName, curso, setCurso }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;