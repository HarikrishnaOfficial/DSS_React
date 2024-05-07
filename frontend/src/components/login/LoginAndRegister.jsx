import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import  { useEffect } from 'react';
import './login.css'

function LoginAndRegister() {
  useEffect(() => {
    $(document).ready(function () {
      $('#goRight').on('click', function () {
        $('#slideBox').animate({
          'marginLeft': '0'
        });
        $('.topLayer').animate({
          'marginLeft': '100%'
        });
      });

      $('#goLeft').on('click', function () {
        $('#slideBox').animate({
          'marginLeft': '50%'
        });
        $('.topLayer').animate({
          'marginLeft': '0'
        });
      });
    });
  }, []); 

  return (
    <>
      <div id="back">
        <div className="backRight"></div>
        <div className="backLeft"></div>
      </div>

      <div id="slideBox">
        <div className="topLayer">
          <div className="left">
            <div className="content">
              <h2>Sign Up</h2>

              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <input className='userinput' type="text" placeholder="username" />
                  <input className='userinput' type="text" placeholder="Email" />
                  <input className='userinput' type="password" placeholder="Password" />
                  <input className='userinput' type="password" placeholder="Confirm Password" />
                </div>
                <div className="form-group"></div>
                <div className="form-group"></div>
                <div className="form-group"></div>
              </form>

              <button id="goLeft" className="off">
                Login
              </button>
              <button>Sign up</button>
            </div>
          </div>


          <div className="right">
            <div className="content">
              <h2>Login</h2>

              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <input className='userinput' placeholder='Enter Your Email' type="text" />
                  <input className='userinput' placeholder='Enter Your Password' type="password" />
                </div>
                <p className='ForgotPassword'>Forgot Password?</p>
                <button id="goRight" className="off">
                  Sign Up
                </button>
                <button type="submit" id="login">
                  Login
                </button>
              </form>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginAndRegister;
