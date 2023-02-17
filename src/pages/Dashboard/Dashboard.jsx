
import React, { useState, useContext } from "react"
import { Auth } from "aws-amplify"
import { DataContext } from "../../context/DataContext.js"

const Dashboard = () => {

    const {userData, setUserData} = useContext(DataContext)

    // Provitional function to singOut, only for proobs
    const signOut = async () => {
        await Auth.signOut()
        setUserData(null)
    }

    return (
        <div>
            <h1>Hello desde Dashboard</h1>
            <hr />
            <button onClick={signOut}>Cerrar sesión</button>
        </div>
    )
}

export default Dashboard;