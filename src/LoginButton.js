import React from 'react';
  import config from './config';

const LoginButton = () => {
  return (
    <div>
      <a href={`${config.endpoint}/auth/google`}>Login with Google</a>
    </div>
  )
}

export default LoginButton
