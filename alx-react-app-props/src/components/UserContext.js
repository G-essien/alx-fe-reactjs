import { createContext, useState } from "react";

const UserContent = createContext(null);

export const UserProvider = ({chidren, userData}) => {
    const [user, setUser] = useState(userData);

    return(
        <UserContent.Provider value={{user, setUser}}>
            {chidren}
        </UserContent.Provider>
    )
}

export default UserContent;