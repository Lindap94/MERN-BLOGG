import logo from './logo.svg';
import './App.css';
import Post from "./post.js" ;
import { Header } from './header.js';
//import {Routes} from "react-router-dom";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Layout from './layout.js';
import IndexPages from './pages/IndexPages.js';
import LoginPage from './pages/LoginPage.js';
import RegistrePage from './pages/RegistrePage.js';


function App() {
  return (
   <BrowserRouter>
{<Routes>
  <Route  path='/' element={<Layout />}>
   <Route index element={<IndexPages /> }/>  
  <Route path={'/login'} element={<LoginPage />} />
  <Route path={'/Registre'} element={<RegistrePage />} />

   
  </Route>

</Routes>




/* <Routes>
  <Route index element={
      <main>
      <Header />
    <Post />
    <Post />
      <Post />
      </main>
  } />

<Route path={"/login"} element={
  <main>
      <Header />
    <div>Login page</div>
      </main>}/>
  <Route path={"/Registre"} element={
    <div>Registree</div>
  }/> */}



</BrowserRouter>

   
 
  );

}
export default App;
