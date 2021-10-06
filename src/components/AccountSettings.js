import React, {useState} from 'react'
import { Container, Form } from "semantic-ui-react";
import { TextField } from "./TextField";
import {FaCheckCircle} from 'react-icons/fa'
// import { BsFillCheckCircleFill } from "react-icons/bs";

import './AccountSettings.scss';

const AccountSettings = () => {

    //   resolves to new value in 2 sec
      const mockSave = (val) => {
          new Promise(resolve => setTimeout(() => resolve(val), 2000))
      }
    return (
        <>
        <div className="wrapper">
            <h2 className='user-account-header'>Account settings</h2>
            <Container>
                <Form className="form-account-settings-manage">
                    <div className="input-container">                   
                        <TextField
                            width={8}
                            icon="user"
                            label="Username"
                            placeholder="John Doe"
                            onSave={mockSave}
                        />
                        <FaCheckCircle className="check-icon" />
                    </div>
                    
                    <TextField
                        width={8}
                        icon="user"
                        label="Password"
                        onSave={mockSave}
                    />
                </Form>
            </Container>
            
        </div>
        
        </>
    )
}

export default AccountSettings