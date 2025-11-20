const express = require('express');
const cors = require('cors');
const mongoose=require('mongoose');
const User=require('./models/User');
const app=express();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser'); // ✅ pour lire les cookies



const salt = bcrypt.genSaltSync(10);
const secret = 'mernbloG_secret_key_123';
//const salt='aslvdkdkffddf';

//app.use(cookieParser());

//const cookieParser=require('cookie-parser');//1 23 54



app.use(cors({
  origin: 'http://localhost:3000', credentials: true, }
));           // autoriser les appels de localhost:3000
app.use(cookieParser()); // ✅ indispensable pour req.cookies


app.use(express.json()); 
 //mongoose.connect("mongodb+srv://dinadinatest2019_db_user:XzrvEmtX2XSaid0R@cluster0.wsgyavo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

mongoose.connect('mongodb+srv://dinadinatest2019_db_user:XzrvEmtX2XSaid0R@cluster0.wsgyavo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connecté à MongoDB"))
.catch(err => console.error("❌ Erreur MongoDB :", err));




app.post('/register',async(req,res)=>{
//      res.json({message: "test ok3",req.body});
//      console.log("test");
// });
 // tu peux changer cette clé

    const { username, password } = req.body;
  console.log("📩 Données reçues :",req.body);

try{
  const UserDoc =await User.create({username,
    password:bcrypt.hashSync(password,salt),});

  // Réponse envoyée au frontend
  res.json({ UserDoc });
}catch(e)
 {console.log("errrro",e);
  res.status(400).json(e);
}
 //res.json({ message: 'Utilisateur reçu ✅', user: username });
});

app.post('/log',async(req,res)=>{
 try{
  const { username,password }=req.body;
  console.log('donnez recu ',req.body);
  const UserDoc = await User.findOne({username});
      if (!UserDoc) {
      return res.status(400).json({ message: "Utilisateur introuvable ❌" });
    }
  const passOk = bcrypt.compareSync(password,UserDoc.password);
  console.log('message passok ',passOk);
  //res.json({message:'passwor',passOk});
  if(passOk)
  {
    
jwt.sign({username,id:UserDoc._id},secret,{},(err,token)=>
{
if(err) throw err;
//res.json(token);
res
    
  .cookie('tokenn', token, { httpOnly: true })
  .json({
    message: 'ok',
    token: token
  });

 //     .cookie('tokenn', token)
   // .cookie('tokenn',token).json('ok');
}
);
     /* jwt.sign(
      { username: UserDoc.username, id: UserDoc._id },
      secret,
      { expiresIn: '1h' },
      (err, token) => {
        if (err) throw err;
        res.json({
          message: "Connexion réussie ✅",
          token,
          user: { username: UserDoc.username, id: UserDoc._id },
        });
      }
    );*/



  }else{
    res.status(400).json('wrong credential')
  }

  //res.json(UserDoc);

}catch (err)
{
    console.error("❌ Erreur backend :", err);
    res.status(500).json({ message: "Erreur serveur ⚠️" });
  }}
)
//XzrvEmtX2XSaid0R
//mongodb+srv://dinadinatest2019_db_user:XzrvEmtX2XSaid0R@cluster0.wsgyavo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

  app.get('/pro',(req,res)=>{
    const {tokenn}=req.cookies;
    if (!tokenn) {
      return res.status(401).json({ message: 'Token manquant' });
    }

    jwt.verify(tokenn,secret,{},(err,info)=>{
      if(err)throw err;
      res.json(info);
    });
    //res.json(req.cookies);
  })

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
