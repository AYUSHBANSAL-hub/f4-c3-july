import React, { useState } from "react";

const LoginPage = ({setLoginStatus}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const loginUser = async () => {
    console.log(username,password)
    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
      })
    })

    const data= await response.json();
    // this line converts the response body to JSON and assigns it to a variable 'data'

    if(response.status===200){
        // this is checking if the response is 200 which would mean success
        // localStorage.setItem('token',data.token);
        localStorage.setItem('id',data.id);
        // storing data in local storage
        setLoginStatus(true);
        // updating state to true since we are now logged in
    }else{
        setError(data.error);
        // since there was an error I want to show it to the user
    }
  };
  return (
    <div>
      <input
        type="text"
        value={username}
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        value={password}
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={loginUser}>Login</button>
      {error ? <p>{error}</p> : null}
    </div>
  );
};

export default LoginPage;
