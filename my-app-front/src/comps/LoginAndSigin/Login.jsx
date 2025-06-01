import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {



    const enttyCheck = useRef(true);

    const nav = new useNavigate();

    function navToSign() {
        nav("/Signin")
    }

    function loginCheck(e) {
        // //test start 
        // nav("/TeacherAndStudentHome");
        // return 
        // //test end
        e.preventDefault();

        if (!enttyCheck.current) return;

        enttyCheck.current = false;
        setTimeout(() => enttyCheck.current = true, 2000);

        const username = document.getElementById("emailUsername").value;
        const password = document.getElementById("pass").value;

        fetch("http://localhost:9090/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": username,
                "password": password
            })
        }).then(r => {
            return r.json()
        }).then(d => {
            if (d.ok) {
                const data = new Date();
                const expDate = new Date(data.getTime() + (60 * 60 * 1000));
                document.cookie = `${JSON.stringify(d.payload.userData)}; expires=Sun, ${expDate.toUTCString()}; path =/`
                nav("/Home");
            } else {
                alert(d.payload.message);
            }
        }
        )

    }

    return (
        <div className="login-box">
            <form onSubmit={loginCheck}>
                <h1>Username</h1>
                <input id="emailUsername" type="text" required />
                <h1>Password</h1>
                <input id="pass" type="password" required />
                <button type="submit">Login</button>
            </form>
            <button onClick={navToSign}>sigin</button>
        </div>
    );
}

export default Login;
