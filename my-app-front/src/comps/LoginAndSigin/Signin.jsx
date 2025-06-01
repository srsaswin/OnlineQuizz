import { useNavigate } from "react-router-dom";



function Signin() {
  const nav = new useNavigate();
  function signin(e) {
    e.preventDefault();
    const username = document.getElementById('userName').value;
    const name = document.getElementById('name').value;
    const password = document.getElementById('pass').value;
    const email = document.getElementById('email').value;

    fetch("http://localhost:9090/signup",
      {
        method: "POST",
        headers:
        {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {
            "username": username,
            "email": email,
            "name": name,
            "password": password
          })
      }).then(r => {
        return r.json()
      }).then(d => {
        if (d.ok) {
          navigation.back();
        } else {
          alert(d.payload.message);
        }
      });
  }
  return (
    <div className='signin-box'>
      <form onSubmit={signin}>
        <h1>Username</h1>
        <input id='userName' type='text' required />
        <h1>name</h1>
        <input id='name' type='text' required />
        <h1>password</h1>
        <input id='pass' type='password' required />
        <h1>email</h1>
        <input id='email' type='email' required />
        <button type='label'>signin</button>
      </form>
    </div>
  );
}

export default Signin;