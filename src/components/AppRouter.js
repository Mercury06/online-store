import React, { useContext } from "react"
import {Route, Redirect, Routes} from "react-router-dom"
import { Context } from "./../index"
import { authRoutes, publicRoutes } from "../routes"

const AppRouter = () => {
    
    const {user} = useContext(Context)
    console.log(user)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) => 
                <Route key={path} path={path} component={Component} exact />
            )}
            {publicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} component={Component} exact />
            )}   
        </Routes>
    )
}

export default AppRouter;

