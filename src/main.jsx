import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './RootLAyout/RootLayout.jsx';
import AllApps from './Components/All Apps/AllApps.jsx';
import InstalledApp from './Components/Installed App/InstalledApp.jsx';
import Error404 from './Components/ErrorFetch/Error404.jsx';

import HomePage from './Components/HomrPage/HomePage.jsx';
import AppDetails from './Components/App Details/AppDetails.jsx';
import ContextApps from './Components/ContextApps/ContextApps.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/apps',
        element: <AllApps></AllApps>
      },
      {
        path: '/installedapps',
        element: <InstalledApp></InstalledApp>
      }, {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: '/apps/:id',
        element: <AppDetails />
      }
    ],
    errorElement: <Error404 />
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextApps>
      <RouterProvider router={router}></RouterProvider>
    </ContextApps>
  </StrictMode>,
)
