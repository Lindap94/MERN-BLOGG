const express = require('express');
const cors = require('cors');
const mongoose=require('mongoose');
const User=require("./models/user");
const app=express();


app.use(cors());           // autoriser les appels de localhost:3000
app.use(express.json()); 
 //mongoose.connect("mongodb+srv://dinadinatest2019_db_user:XzrvEmtX2XSaid0R@cluster0.wsgyavo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

// mongoose.connect('mongodb+srv://dinadinatest2019_db_user:XzrvEmtX2XSaid0R@cluster0.wsgyavo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log("✅ Connecté à MongoDB"))
// .catch(err => console.error("❌ Erreur MongoDB :", err));




app.post('/register',async(req,res)=>{
//      res.json({message: "test ok3",req.body});
//      console.log("test");
// });
    const { username, password } = req.body;
  console.log("📩 Données reçues :",req.body);


 // const UserDoc =await User.create({username,password});

  // Réponse envoyée au frontend
 // res.json({ UserDoc });
 res.json({ message: 'Utilisateur reçu ✅', user: username });
});
//XzrvEmtX2XSaid0R
//mongodb+srv://dinadinatest2019_db_user:XzrvEmtX2XSaid0R@cluster0.wsgyavo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
app.listen(4000, () => {
    console.log("✅ Serveur démarré sur http://localhost:4000");
});




// const express = require('express');
// const cors = require('cors');

// const app = express();

// // Middleware
// app.use(cors());           
// app.use(express.json()); 

// // Route POST /register
// app.post('/register', (req, res) => {
//     const { username, password } = req.body;
//     console.log("📩 Données reçues :", username, password);
//     res.json({ message: 'Utilisateur reçu ✅', user: username });
// });

// // Lancer le serveur
// app.listen(4000, () => {
//     console.log("✅ Serveur démarré sur http://localhost:4000");
// });
