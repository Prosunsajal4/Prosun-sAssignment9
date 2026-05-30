import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes'
import AuthProvider from './providers/AuthProvider'
import { DashboardProvider } from './providers/DashboardProvider'
import { ThemeProvider } from './providers/ThemeProvider'

const AppLoader = () => (
  <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-50 to-pink-50 dark:from-slate-900 dark:to-slate-800">
    <div className="text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-pink-500 text-white shadow-lg">
        <svg className="h-8 w-8 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </div>
      <div className="h-2 w-32 mx-auto overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
        <div className="h-full w-1/3 animate-[shimmer_1.5s_ease-in-out_infinite] bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full" />
      </div>
    </div>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <DashboardProvider>
          <React.Suspense fallback={<AppLoader />}>
            <RouterProvider router={router} />
          </React.Suspense>
        </DashboardProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
