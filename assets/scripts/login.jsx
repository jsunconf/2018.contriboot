import React from 'react';

export default ({ loginWithGithub }) => (
  <div className='user'>
    <div className="user__message">
      Log in to contribute
    </div>
    <button
      type='button'
      className='button button--small button--login user__button-login'
      onClick={loginWithGithub}>
      Login with github
    </button>
  </div>
)
