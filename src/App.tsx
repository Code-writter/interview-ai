import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PublicLayout from '@/Layouts/PublicLayout'
import Home from '@/routes/home'



import AuthenticationLayout from './Layouts/AuthLayout'
import SignInPage from './routes/sign-in'
import SingUpPage from './routes/sign-up'
import ProtectedLayout from './Layouts/ProtectedLayout'
import MainLayout from './Layouts/main-layout'

export default function App(){
    return(
        <Router>
            <Routes>

            {/* Public Routes */}
            <Route element={<PublicLayout />}>
                <Route index element={<Home />} />
            </Route>

            {/* Authentication Routes */}
            <Route element={<AuthenticationLayout />} >
                <Route path='/signin/*' element={<SignInPage />} />
                <Route path='/signup/*' element={<SingUpPage />} />
            </Route>

            {/* Private Routes */}

            <Route element={
                <ProtectedLayout>
                    <MainLayout />
                </ProtectedLayout>
            }>

            </Route>

            </Routes>
        </Router>
    )
}