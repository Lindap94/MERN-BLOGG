import { use, useState } from "react";
import { Navigate } from "react-router-dom";


export default function LoginPage()
{
    const[username,setUsername]=useState('');
    // const [password,setPassword]=useState(); 
    const[password,setPassword]=useState('');
    const[redirect,setRedirect]=useState(false);
   async function login(ev)
   {
    ev.preventDefault();
     const response = await fetch('http://localhost:4000/log',{
        method:'POST',
        body: JSON.stringify({username,password}),
        headers:{'Content-Type':'application/json'},
        credentials:'include'
    })  
    const data = await response.json();
       console.log("✅ Réponse du serveur :", data.token);

       if(response.ok)
       {
       setRedirect(true);
       }
       else{alert('worng credential');}

    //    if(redirect){ console.log("redirect");
    //     return <Navigate to={'/'} />
    //    }
   
   }
         if (redirect) {
    console.log("redirect triggered ✅");
    return <Navigate to="/" />;
  } 
   
   
    return (   
    <form className="login" onSubmit={login}>
        
        <h1>Login</h1>
        <input type="text" placeholder="username" value={username} 
        onChange={ev=>setUsername(ev.target.value)}/>
        <input type="password" placeholder="password" value={password} 
        onChange={ev=>setPassword(ev.target.value)}/>
        <button>Login</button>
      
    </form>
    );
}