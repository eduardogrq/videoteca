
import { Auth } from "aws-amplify";
import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

const useUserData = () => {
    
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try{
                let response = await Auth.currentAuthenticatedUser();
                setUserData(response)
            } catch(e){
                console.log("🚀 ~ file: dataContext.js:16 ~ useUserData ~ e", e)
            }
        };
        fetchData();
    }, []);

    return {userData, setUserData};
}

export const DataProvider = ({children}) => {
    const {userData, setUserData} = useUserData();
    return (
        <DataContext.Provider value={ {userData, setUserData} }>
            { children }
        </DataContext.Provider>
    )
}
