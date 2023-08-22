import React, {useEffect, useState} from 'react';
import { auth } from '../firebase'; // 请确保你在这个文件中导出了你的 Firebase 配置和初始化
import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth, setPersistence, browserSessionPersistence } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import {useAuth} from "../context/AuthProvider";

function Login() {
    const [email, setEmail] = useState('???@gmail.com');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const allowedEmail = "xuyihao342@gmail.com";
    const {currentUser} = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(email !== allowedEmail) {
            setError('登录失败: ' + "Email is not allowed");
            return;
        }
        try {
            // 设置 session persistence
            await setPersistence(auth, browserSessionPersistence);
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/log'); // 登录成功后重定向到主页或其他页面
        } catch (err) {
            setError('登录失败: ' + err.message);
        }
    };

    return (
        <div className={'text-center text-white'}>
            {error && <p>{error}</p>}
            {currentUser ? <p>Logged in as {currentUser.email}</p> : <p>Not logged in</p>}
            {!currentUser &&
                <>
                    <h2>Admin Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Email:</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className={'text-black'}
                            />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className={'text-black'}
                            />
                        </div>
                        <button type="submit">Login</button>
                    </form>
                </>}
            {currentUser && <button onClick={() => auth.signOut()}>Logout</button>}
        </div>
    );
}

export default Login;
