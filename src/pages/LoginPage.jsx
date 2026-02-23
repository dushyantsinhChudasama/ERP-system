import { useNavigate } from "react-router-dom";
import { FiLayers } from "react-icons/fi";
import "./LoginPage.css";

const LoginPage = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Static redirect to dashboard
        navigate("/dashboard");
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <div className="login-logo">
                        <FiLayers size={28} />
                    </div>
                    <h1 className="login-title">ERP System</h1>
                    <p className="login-subtitle">Sign in to your account</p>
                </div>

                <form className="login-form" onSubmit={handleLogin}>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" placeholder="name@company.com" defaultValue="admin@serenity.tech" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" placeholder="••••••••" defaultValue="password" />
                    </div>

                    <button type="submit" className="login-button">
                        Sign In
                    </button>
                </form>

                <div className="login-footer">
                    Don't have an account? <a href="#">Contact Support</a>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
