import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/home';
import { Login } from './pages/login';
import { Logout } from './pages/logout';
import { Register } from './pages/register';
import { NotFound } from './pages/notfound';
import { Layout } from './components/layout';

function App() {
   return (
      <>
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route index element={<Home />}></Route>
               <Route path="login" element={<Login />}></Route>
               <Route path="register" element={<Register />}></Route>
               <Route path="logout" element={<Logout />}></Route>
               <Route path="*" element={<NotFound />}></Route>
            </Route>
         </Routes>
      </>
   );
}

export default App;
