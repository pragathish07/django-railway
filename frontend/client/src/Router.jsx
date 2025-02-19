import { Routes, Route, Navigate } from "react-router-dom";
import { SignedIn, SignedOut, useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Onboarding from "./pages/Onboarding";

const ProtectedRoute = ({ children }) => {
  const { user } = useUser();
  const [isOnboarded, setIsOnboarded] = useState(null);

  useEffect(() => {
    if (user?.id) {
      const onboarded = localStorage.getItem("onboarded") === "true";
      setIsOnboarded(onboarded);
    }
  }, [user?.id]);

  if (isOnboarded === null) {
    return null; // Loading state or spinner
  }

  return isOnboarded ? children : <Navigate to="/onboarding" replace />;
};

const OnboardingRoute = () => {
  const { user } = useUser();
  const [isOnboarded, setIsOnboarded] = useState(null);

  useEffect(() => {
    if (user?.id) {
      const onboarded = localStorage.getItem("onboarded") === "true";
      setIsOnboarded(onboarded);
    }
  }, [user?.id]);

  if (isOnboarded === null) {
    return null; // Loading state or spinner
  }

  return isOnboarded ? <Navigate to="/dashboard" replace /> : <Onboarding />;
};

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <SignedIn>
              <Navigate to="/dashboard" replace />
            </SignedIn>
            <SignedOut>
              <Navigate to="/login" replace />
            </SignedOut>
          </>
        }
      />
      <Route
        path="/login"
        element={
          <SignedOut>
            <Login />
          </SignedOut>
        }
      />
      <Route
        path="/onboarding"
        element={
          <SignedIn>
            <OnboardingRoute />
          </SignedIn>
        }
      />
      <Route
        path="/dashboard"
        element={
          <SignedIn>
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          </SignedIn>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Router;
