import React from 'react'
import './SignIn.css'
import { Nav } from '../../Components'
const SignIn = () => {
  return (
    <>
    <Nav/>
    <div className='sign_in section__padding'>
        <div className="sign_in_form">
        <form action="">
            <h1><span>K</span>rishna Restaurent</h1>
<input type="text" placeholder='User Name' />
<input type="password" placeholder='Password' />

        <button>Sign In</button>
        <div className="sign_in_form_forgot_password">
            <span>Frogot Password?</span>
            <span>SignUp</span>
        </div>
        </form>

        </div>
      
    </div>
    </>
  )
}

export default SignIn
