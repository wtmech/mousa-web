import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Amplify } from 'aws-amplify';
import { signIn, signOut as amplifySignOut, getCurrentUser, confirmSignIn, updateUserAttributes } from 'aws-amplify/auth';

// Configure Amplify
Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: 'us-east-2_87DAlf6V4',
      userPoolClientId: '7hq5poljek5fl2u4e4pii0rapq',
      signUpVerificationMethod: 'code',
      identityPoolId: 'us-east-2:56c49cac-6d19-4fd9-8cbf-30aee2464076',
    },
  },
});

interface AuthContextType {
  isAuthenticated: boolean;
  signIn: (identifier: string, password: string) => Promise<void>;
  confirmNewPassword: (newPassword: string) => Promise<void>;
  updatePhoneNumber: (phoneNumber: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUsername, setCurrentUsername] = useState<string | null>(null);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      await getCurrentUser();
      setIsAuthenticated(true);
    } catch (error) {
      setIsAuthenticated(false);
    }
  };

  const handleSignIn = async (identifier: string, password: string) => {
    try {
      console.log('Attempting to sign in...');
      setCurrentUsername(identifier); // Store the identifier
      const result = await signIn({
        username: identifier, // Cognito accepts either username or email as the username field
        password,
      });
      console.log('Sign in result:', result);

      if (result.isSignedIn) {
        setIsAuthenticated(true);
      } else if (result.nextStep?.signInStep === 'CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED') {
        throw new Error('NEW_PASSWORD_REQUIRED');
      }
    } catch (error) {
      console.error('Sign in error:', error);
      if (error instanceof Error) {
        if (error.message === 'NEW_PASSWORD_REQUIRED') {
          throw error;
        }
        // Provide more specific error messages
        if (error.message.includes('User does not exist')) {
          throw new Error('Username or email not found');
        }
        if (error.message.includes('Incorrect username or password')) {
          throw new Error('Incorrect username/email or password');
        }
      }
      throw new Error('Failed to sign in');
    }
  };

  const handleConfirmNewPassword = async (newPassword: string) => {
    try {
      if (!currentUsername) {
        throw new Error('No username found');
      }

      console.log('Confirming new password...');
      const result = await confirmSignIn({
        challengeResponse: newPassword,
      });
      console.log('Confirm result:', result);

      if (result.isSignedIn) {
        setIsAuthenticated(true);
      } else {
        throw new Error('Failed to confirm new password');
      }
    } catch (error) {
      console.error('Error confirming new password:', error);
      throw new Error('Failed to set new password');
    }
  };

  const handleUpdatePhoneNumber = async (phoneNumber: string) => {
    try {
      if (!currentUsername) throw new Error('No username found');
      await updateUserAttributes({
        userAttributes: {
          phone_number: phoneNumber
        }
      });
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Error updating phone number:', error);
      throw error;
    }
  };

  const handleSignOut = async () => {
    try {
      await amplifySignOut();
      setIsAuthenticated(false);
      setCurrentUsername(null);
    } catch (error) {
      console.error('Error signing out:', error);
      throw new Error('Failed to sign out');
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        signIn: handleSignIn,
        confirmNewPassword: handleConfirmNewPassword,
        updatePhoneNumber: handleUpdatePhoneNumber,
        signOut: handleSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };