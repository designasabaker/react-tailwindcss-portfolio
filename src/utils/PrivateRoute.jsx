import { useAuth } from '../context/AuthProvider'; // 你的认证context
import { Routes, Route, useNavigate } from 'react-router-dom';

function PrivateRoute({ children, ...rest }) {
    const navigate = useNavigate();
    const { currentUser } = useAuth();

    if (!currentUser) {
        navigate("/login");
        return null;
    }

    return <Route {...rest}>{children}</Route>;
}

export default PrivateRoute;
