import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

const Login = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const [step, setStep] = useState<'login' | 'newPassword'>('login');
  const { signIn, confirmNewPassword } = useAuth();
  const navigate = useNavigate();
  const { isDark } = useTheme();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      await signIn(identifier, password);
      navigate('/');
    } catch (err) {
      if (err instanceof Error) {
        if (err.message === 'NEW_PASSWORD_REQUIRED') {
          setStep('newPassword');
        } else {
          setError(err.message);
        }
      }
    }
  };

  const handleNewPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      await confirmNewPassword(newPassword);
      navigate('/');
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className={`max-w-md w-full space-y-8 p-8 rounded-lg ${isDark ? 'bg-primary' : 'bg-white'} shadow-lg`}>
        <div>
          <h2 className={`mt-6 text-center text-3xl font-extrabold ${isDark ? 'text-stone-200' : 'text-gray-900'}`}>
            {step === 'login' ? 'Sign in to your account' : 'Set new password'}
          </h2>
        </div>

        {step === 'login' && (
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="identifier" className="sr-only">
                  Username or Email
                </label>
                <input
                  id="identifier"
                  name="identifier"
                  type="text"
                  required
                  className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                    isDark ? 'border-stone-700 bg-stone-800 text-stone-200' : 'border-gray-300 bg-white text-gray-900'
                  } placeholder-gray-500 rounded-t-md focus:outline-none focus:ring-accent focus:border-accent focus:z-10 sm:text-sm`}
                  placeholder="Username or Email"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                    isDark ? 'border-stone-700 bg-stone-800 text-stone-200' : 'border-gray-300 bg-white text-gray-900'
                  } placeholder-gray-500 rounded-b-md focus:outline-none focus:ring-accent focus:border-accent focus:z-10 sm:text-sm`}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-accent hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
              >
                Sign in
              </button>
            </div>
          </form>
        )}

        {step === 'newPassword' && (
          <form className="mt-8 space-y-6" onSubmit={handleNewPassword}>
            <div>
              <label htmlFor="newPassword" className="sr-only">
                New Password
              </label>
              <input
                id="newPassword"
                name="newPassword"
                type="password"
                required
                className={`appearance-none rounded relative block w-full px-3 py-2 border ${
                  isDark ? 'border-stone-700 bg-stone-800 text-stone-200' : 'border-gray-300 bg-white text-gray-900'
                } placeholder-gray-500 focus:outline-none focus:ring-accent focus:border-accent focus:z-10 sm:text-sm`}
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>

            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-accent hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
              >
                Set New Password
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;