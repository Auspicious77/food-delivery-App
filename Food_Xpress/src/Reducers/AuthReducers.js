import React from "react"

export const SignInReducers = (state, action) =>{
switch (action.type) {
    case 'UPDATE_SIGN_IN':
        
       return{
        userToken:action.payload.userToken
       }
 
    default:
        return state
}
}