import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';
import Products from './pages/Products';
import Blog from './pages/Blog';
import User from './pages/User';
import NotFound from './pages/Page404';
import RegisterChild from './pages/RegisterChild';
import RegisterControl from './pages/RegisterControl';
import MyChildren from './pages/MyChildren';
import Landing from './pages/Landing';
import RegisterVaccine from './pages/RegisterVaccine';
import DashboardChild from './pages/DashboardChild';
import CheckControls from './pages/CheckControls';
import Vaccine from './pages/Vaccine';
import Percentil from './pages/Percentil';
import Index from './onepirate/Home';
import EditChild from './pages/EditChild';
import CheckVaccines from './pages/CheckVaccines';
import ReadControl from './pages/ReadControl';
import ReadVaccine from './pages/ReadVaccine';
import EditProfile from './pages/EditProfile';
import ChangePassword from './pages/ChangePassword';
import ForgetPassword from './pages/ForgetPassword';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    { path: 'landing', element: <Index /> },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { index: true, element: <Navigate to="/dashboard/app" replace /> },
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'products', element: <Products /> },
        { path: 'blog', element: <Blog /> },
        { path: 'registerChild', element: <RegisterChild /> },
        { path: 'registerControl', element: <RegisterControl /> },
        { path: 'mychild', element: <MyChildren /> },
        { path: 'registerVaccine', element: <RegisterVaccine /> },
        { path: 'DashboardChild', element: <DashboardChild /> },
        { path: 'checkControls', element: <CheckControls /> },
        { path: 'vaccine', element: <Vaccine /> },
        { path: 'percentil', element: <Percentil /> },
        { path: 'editChild', element: <EditChild /> },
        { path: 'checkVaccines', element: <CheckVaccines /> },
        { path: 'readControl', element: <ReadControl /> },
        { path: 'readVaccine', element: <ReadVaccine /> },
        { path: 'editProfile', element: <EditProfile /> }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: 'changePassword', element: <ChangePassword /> },
        { path: 'forgetPassword', element: <ForgetPassword /> },
        // { path: 'landing', element: <Index /> },
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/landing" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },

    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
