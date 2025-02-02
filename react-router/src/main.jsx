import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Routes, Route, createRoutesFromElements, RouterProvider } from "react-router";
import './index.css'
import Layout from './components/Layout/Layout.jsx';
import { Home, About, Contact, User, Github } from './components/index.js';
import { GithubLoader } from './components/Github/Github.jsx';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} >
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/user/:userId" element={<User />}></Route>
        <Route loader={GithubLoader} path="/github" element={<Github />}></Route>
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
)
