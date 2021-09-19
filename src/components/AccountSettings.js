import React, {useState} from 'react'
import { Container, Form } from "semantic-ui-react";
import { TextField } from "./TextField";
import {FaUserEdit} from 'react-icons/fa'

import './AccountSettings.scss';

const AccountSettings = ({loading, onSave, error}) => {

    //   resolves to new value in 2 sec
      const mockSave = (val) => {
          new Promise(resolve => setTimeout(() => resolve(val), 2000))
      }
    return (
        <>
        <div className="wrapper">
            <h2 className='user-account-header'>Account settings</h2>
            {/* <div className="inner-profile-photo">
                <img className="img-profile" src='https://images.fandango.com/cms/assets/a2f0b9d0-cf84-11eb-a507-3be98bb99253--actordefaulttmb.gif' alt />

                <div className="inner-img-section">
                    <b>Profile Photo</b>
                    <p>Accepted file type .png. Less than 1MB</p>
                    <button className="btn button">Upload</button>
                </div>
            </div> */}
            <Container>
                <Form>
                    <TextField
                        width={8}
                        icon="user"
                        label="Username"
                        placeholder="John Doe"
                        onSave={mockSave}
                    />
                </Form>
            </Container>
            
        </div>
        
        </>
    )
}

export default AccountSettings