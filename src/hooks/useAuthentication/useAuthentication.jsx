
import { Auth } from "aws-amplify"
import { useState, useEffect } from "react"

const useAuthentication = () => {
    
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isAuthenticating, setIsAuthenticating] = useState(true)

    useEffect(() => {
        checkAuthStatus();
    }, [])
        
    const checkAuthStatus = async() => {
        try{
            await Auth.currentAuthenticatedUser()
            setIsAuthenticated(true)
        } catch(err){
            console.error(err)
        } finally{
            setIsAuthenticating(false)
        }
    }

    return{
        isAuthenticated,
        isAuthenticating
    }

}

export default useAuthentication