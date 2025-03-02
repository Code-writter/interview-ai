import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PublicLayout from '@/Layouts/PublicLayout'
import {HomePage} from '@/routes/home'



import AuthenticationLayout from './Layouts/AuthLayout'
import SignInPage from './routes/sign-in'
import SingUpPage from './routes/sign-up'
import ProtectedLayout from './Layouts/ProtectedLayout'
import MainLayout from './Layouts/main-layout'
import Generate from './components/genrate'
import Dashboard from './routes/dashboard'
import CreateEditPage from './routes/create-edit-page'

export default function App(){
    return(
        <Router>
            <Routes>

                {/* Public Routes */}
                <Route element={<PublicLayout />}>
                    <Route index element={<HomePage />} />
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
                    <Route element={<Generate />} path='/generate' > 
                        <Route index element={<Dashboard />} />
                        <Route path=':interviewId' element={<CreateEditPage />} />
                    </Route>
                </Route>
            </Routes>
        </Router>
    )
}