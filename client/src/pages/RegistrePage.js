// import { useState } from "react";

// export default function RegistrePage()
// {
//     const[username, setUsername]=useState('');
//     const[password,setPassword]=useState('');

//     async function Register(ev)
//         {
//             ev.preventDefault();
            
//            await fetch('http://localhost:4000/register',{
//                 method: 'POST',
//                 body: JSON.stringify({username,password}),
//                 headers: {'Content-Type':'application/json'},
//             })
//         }
//     return (<form className="registre" onSubmit={Register}>
//         <h1>Registre</h1>
//         <input type="text" 
//         placeholder="username"
//         value={username}
//         onChange={ev=>setUsername(ev.target.value)}
//         />
//         <input type="password" placeholder="password"
//         value={password}
//         onChange={ev=>setPassword(ev.target.value)}
// /> 
      
//          <button>Registre</button>
     
      
//     </form>);
// }



import { useState } from "react";

export default function RegistrePage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function Register(ev) {
    ev.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/register', {
        method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      // Vérifier si le serveur répond bien
      if (!response.ok) {
        throw new Error("Erreur lors de la requête : " + response.status);
      }

      // const data = await response.json();
      // console.log("✅ Réponse du serveur :", data);
      alert("Inscription réussie !");
    } catch (err) {
      console.error("❌ Erreur de connexion :", err);
      alert("Impossible de contacter le serveur !");
    }
  }

  return (
    <form className="registre" onSubmit={Register}>
      <h1>Registre</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(ev) => setUsername(ev.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
      />
      <button>Registre</button>
    </form>
  );
}
