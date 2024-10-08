import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./App.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import Clicker from "./components/pages/clicker/Clicker.tsx";
import Store from "./components/pages/store/Store.tsx";
import Upgrade from "./components/pages/upgrade/Upgrade.tsx";
import Tasks from "./components/pages/tasks/Tasks.tsx";

const queryClient = new QueryClient()
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <Clicker/>,
            },
            {
                path: "store",
                element: <Store/>,
            },
            {
                path: "upgrade",
                element: <div>
                    <Upgrade/>
                </div>,
    },
    {
        path: "tasks",
                element: <Tasks/>,
            },
        ],
    },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
      </QueryClientProvider>
  </React.StrictMode>,
)
