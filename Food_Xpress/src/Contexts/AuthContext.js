import React, { createContext, useReducer, useState } from 'react'
import { SignInReducers } from '../Reducers/AuthReducers'

export const SignInContext = createContext()

export const SignInContextProvider = (props) => {
    let [stateCart, setStateCart]= useState([])
    const [signedIn, dispatchSignedIn] = useReducer(SignInReducers, {
        userToken: null,
    })

    return (
        <SignInContext.Provider value={{ signedIn, dispatchSignedIn, stateCart, setStateCart }}>
           {props.children}
        </SignInContext.Provider>
    )
}
