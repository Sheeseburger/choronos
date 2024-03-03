import {
	BrowserRouter as Router,
	Routes,
	Navigate,
	Route,
} from 'react-router-dom';
import Register from './pages/auth/register';
import Login from './pages/auth/login';
import HomePage from './pages/homepage/HomePage';


export const ChronosRoutes = () => {
	return (
		<Router>
			<Routes>
                <Route path='/' element={<Navigate to='/homePage' />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/homePage" element={<HomePage />} />
			</Routes>
		</Router>
	);
};
