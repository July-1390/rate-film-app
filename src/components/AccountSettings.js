import React, {useState} from 'react'
import { Container, Form } from "semantic-ui-react";
import { TextField } from "./TextField";
import {changeDisplayName} from '../apiServices'
import {getUserToken} from '../localStorageUserServices'
import {FaCheckCircle} from 'react-icons/fa'

import './AccountSettings.scss';

const AccountSettings = () => {
    const updateDisplayName = (newName) => {
        changeDisplayName(newName, getUserToken()).then((r) => {})    
    }

    return (
        <>
        <div className="wrapper">
            <h2 className='user-account-header'>Account settings</h2>
            <Container>
                <p>Here you can change some information about your account</p>
                <Form className="form-account-settings-manage">
                    <div className="input-container">                   
                        <TextField
                            width={8}
                            icon="user"
                            label="Display name"
                            placeholder="John Doe"
                            onSave={updateDisplayName}
                        />
                        {/* <FaCheckCircle className="check-icon" /> */}
                    </div>                  
                </Form>
            </Container>  
        </div>
        
        </>
    )
}

export default AccountSettings