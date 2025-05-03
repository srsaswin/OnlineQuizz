import { useContext, useEffect, useState } from "react";  


function TeacherAndStudentHome() {   
    function hi(){
        const userData = JSON.parse(document.cookie)[0];
        console.log(userData);
        
        document.getElementById("hi").innerText = userData.isStudent;
    }
    return (
        
        <>
        <h1 id="hi"></h1>
        <h1>
            <button onClick={hi}>egjkrn</button>
        </h1>
        </>
    )
}

export default TeacherAndStudentHome;
