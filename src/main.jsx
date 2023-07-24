import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './api/Router/Router.jsx'
import ThemeProvider from './Context/ThemeProvider.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AuthProvider from './Context/AuthProvider.jsx'
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
      <ReactNotifications />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router}>
            <App />
          </RouterProvider>
        </QueryClientProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
