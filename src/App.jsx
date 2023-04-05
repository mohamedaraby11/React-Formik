import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Carts from './components/Carts/Carts';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Notfound from './components/Notfound/Notfound';


const router = createBrowserRouter([
  { path: '',element:<Layout/>,children:[
    {path:'',element:<Home/>},
    {path:'home',element:<Home/>},
    {path:'products',element:<Products/>},
    {path:'carts',element:<Carts/>},
    {path:'login',element:<Login/>},
    {path:'register',element:<Register/>},
    {path:'*',element:<Notfound/>}
  ]}
])

function App() {
  return (
    
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
