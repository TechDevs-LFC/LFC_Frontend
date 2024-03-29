import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './components/pages/Home.jsx'
import Layout from "./components/HOC/Layout.jsx";
import TestLogin from "./components/pages/TestLogin.jsx";
import Profile from "./components/pages/Profile";
import Register from "./components/pages/Register";
import PDF from "./components/pages/PDF";

const App = () => {
  return (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/register' element={<Register/>}/>
                <Route path='/login' element={<TestLogin/>} />
                <Route path='/profile/:userId' element={<Profile/>}/>

                <Route path='/apply' element={<PDF/>}/>
                <Route path='/dashboard'/>
                <Route path='/mission'/>
                <Route path='/recruitment'/>
                <Route path='/staff'/>
                <Route path='/contact'/>
                <Route path='/admin'/>
                <Route path='/account-verification-message/:id'/>

                <Route path='/error'/>
                <Route path='*' element={<h1>Page not found</h1>} />
            </Routes>
        </Layout>
    </BrowserRouter>
  );
}

export default App;
