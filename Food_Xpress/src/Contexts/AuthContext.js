import React, { createContext, useReducer } from 'react'
import { SignInReducers } from '../Reducers/AuthReducers'

export const SignInContext = createContext()

export const SignInContextProvider = (props) => {
    const [signedIn, dispatchSignedIn] = useReducer(SignInReducers, {
        userToken: null,
    })

    return (
        <SignInContext.Provider value={{ signedIn, dispatchSignedIn }}>
           {props.children}
        </SignInContext.Provider>
    )
}
