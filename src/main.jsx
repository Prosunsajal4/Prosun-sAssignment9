import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes'
import AuthProvider from './providers/AuthProvider'
import { DashboardProvider } from './providers/DashboardProvider'
import { ThemeProvider } from './providers/ThemeProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <DashboardProvider>
          <RouterProvider router={router} />
        </DashboardProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
