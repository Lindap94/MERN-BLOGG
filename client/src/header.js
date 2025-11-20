import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export function Header(){
  const [username,setUsername]=useState(null);
    useEffect(()=>{
      fetch('http://localhost:4000/pro',
        {credentials: 'include'},
      ).then(res => res.json())
  
.then(userInfo=>{setUsername(userInfo.username);})
    },[])
    function logout(){

    }
    return(  <header>
          <Link to="/" className="logo">Myblog</Link>
          <nav>
            {username &&(<>
            <Link to="/creat">creat new post</Link>
            <a onClick={logout}>logout</a>

            </>)}
            {!username && (<>
            <Link to="/login">Login</Link>
            <Link to="/Registre">Registre</Link></>
            )}
          </nav>
         
        </header>);
}