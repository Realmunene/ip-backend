import React from 'react'
// import { faUser } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./all.css";
function Login() {
  function signupFn(){
      console.log("hellow world")
  }
  return (
    <div className='form_container'>
      <div className='form'>
      <div className='sub_form'>
          <h2>Welcome to</h2>
          <h1>Learn Online app</h1>
            {/* <div>
              <FontAwesomeIcon className='fonticon' icon={faUser} />
            </div> */}
          <input type="text" placeholder="email/username"/><br/>
          <input type="text" placeholder="Password"/><br/>
          <input type="text" placeholder="Confirm Password"/><br/>
          <button>Signin</button>
          <p>or</p>
          <button>Continue with Google</button>
        </div>
          <div className='option'>
            <p>Have an account?</p>
            <a href='#' onClick ={signupFn}>Login</a>
          </div>
      </div>
      {/* <div className='form'>
          <h3>Welcome to</h3>
          <h2>Learn Online app</h2>
          <img alt='user'/>
          <input type="text" placeholder="email/username"/>
          <input type="text" placeholder="Password"/>
          <button>Login</button>
        
          <div className='option'>
            <p>Forget password?</p>
            <a href='#'>Signin</a>
          </div>
      </div> */}

    </div>
  )
}

export default Login