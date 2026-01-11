import { useState, useEffect } from 'react';
import { Logo } from './components/common/Logo';
import { AuthLayout } from './components/common/AuthLayout';
import { Input } from './components/common/Input';
import { Button } from './components/common/Button';
import SignupFlow from './components/SignupFlow';
import { Dashboard } from './components/Dashboard';
import { api, tokenManager } from '../services/api';

function App() {
  const [view, setView] = useState<'login' | 'signup'>('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Check if user is already authenticated on mount
  useEffect(() => {
    const token = tokenManager.getToken();
    const user = tokenManager.getUser();
    if (token && user) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = async () => {
    if (!mobile || !password) {
      setError('Please enter mobile number and password');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await api.login({ mobile, password });

      // Store token and user data
      tokenManager.setToken(response.data.token);
      tokenManager.setUser(response.data.user);

      // Set authenticated state
      setIsAuthenticated(true);

      // Clear form
      setMobile('');
      setPassword('');
    } catch (err: any) {
      console.error('Login error:', err);
      setError(err.message || 'Invalid credentials. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = () => {
    alert('Password reset link sent to your registered mobile number!');
  };

  const handleSignupComplete = (data: any) => {
    console.log('Signup data:', data);
    alert(`Account created successfully! Welcome ${data.name} ${data.surname}! 🎉`);
    setView('login');
  };

  // Show dashboard if authenticated
  if (isAuthenticated) {
    return <Dashboard />;
  }

  if (view === 'signup') {
    return (
      <SignupFlow
        onComplete={handleSignupComplete}
        onLoginClick={() => setView('login')}
      />
    );
  }

  return (
    <AuthLayout>
      <div className="flex flex-col gap-8 items-center w-full">
        <Logo />

        <div className="flex flex-col gap-6 w-full">
          <div className="text-center">
            <h2 className="text-[28px] font-bold text-black mb-1">Welcome back</h2>
            <p className="text-[13px] text-gray-500">Enter your details to login</p>
          </div>

          <div className="flex flex-col gap-4">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <Input
              type="tel"
              placeholder="Mobile number"
              value={mobile}
              onChange={setMobile}
            />

            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={setPassword}
            />

            <div className="flex items-center justify-between">
              <button
                onClick={() => setRememberMe(!rememberMe)}
                className="flex items-center gap-2 cursor-pointer group"
              >
                <div className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-all ${rememberMe ? 'bg-[#FF9933] border-[#FF9933]' : 'border-gray-300 group-hover:border-gray-400'
                  }`}>
                  {rememberMe && (
                    <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className="text-[13px] text-gray-600">Remember me</span>
              </button>

              <button
                onClick={handleForgotPassword}
                className="text-[13px] text-[#FF9933] hover:text-[#e68a2e] transition-colors"
              >
                Forgot password?
              </button>
            </div>

            <Button onClick={handleLogin} disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </Button>
          </div>

          <div className="text-center text-[13px]">
            <span className="text-gray-600">Don't have an account?</span>{' '}
            <button
              onClick={() => setView('signup')}
              className="text-[#FF9933] hover:text-[#e68a2e] transition-colors font-medium underline"
            >
              Signup here
            </button>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}

export default App;
