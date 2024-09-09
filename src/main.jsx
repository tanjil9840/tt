import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Rooot from './components/Rooot/Rooot';
import Home from './components/Home/Home';
import AppliadJobs from './components/AppliadJobs/AppliadJobs';
import ErrorPage from './components/ErrorPage/ErrorPage';
import JobDetails from './components/JobDetails/JobDetails';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Rooot> </Rooot> ,
    errorElement: <ErrorPage> </ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home> </Home>
      },
      {
        path: "/Applied",
        element: <AppliadJobs> </AppliadJobs>,
        loader:()=>fetch('../jobs.json')
      },
      {
        path:'/job/:id',
        element:<JobDetails> </JobDetails>,
        loader:()=>fetch('../jobs.json')
      }
    ]
    
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
