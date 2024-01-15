import React ,{ useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from "react-router-dom";
import FetchUserData from './modules/user/components/FetchUserData.tsx';
import PaginationComponent from './modules/user/components/PaginationComponent.tsx';
import Header from './modules/user/components/header.component.tsx'
import Pagination from './modules/user/components/Pagination.tsx'



const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Header />}>
    <Route path="users" element={<App />} />
    <Route path="pagination" element={<PaginationComponent />} />
    {/* 
    <Route path="register" element={<Register />} /> */}
  </Route>
));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)

