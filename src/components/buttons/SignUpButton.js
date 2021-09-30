import React from 'react'
import './SignUpButton.scss'

const SignUpButton = ({setIsSignUpWindowVisible}) => {

    const handleShowSignUpWindow = () => setIsSignUpWindowVisible(true);


    return (
        <>
            <button className="btn btn-primary" onClick={handleShowSignUpWindow}>
                 Sign Up
            </button>
        </>
    )
}

export default SignUpButton;