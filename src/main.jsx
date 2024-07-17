import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import myRoutes from './Routes/Routes'
import { HelmetProvider } from "react-helmet-async"
import AuthProvider from './Components/Provider/AuthProvider'
import {  QueryClient, QueryClientProvider, } from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={myRoutes} />
      </AuthProvider>
    </QueryClientProvider>
  </HelmetProvider>
)
