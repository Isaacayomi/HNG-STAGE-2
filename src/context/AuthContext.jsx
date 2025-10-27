import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Load session on mount
  useEffect(() => {
    const session = localStorage.getItem("ticketapp_session");
    if (session) {
      const parsed = JSON.parse(session);
      setUser(parsed.user);
    }
  }, []);

  // Simulate Signup
  const signup = (data) => {
    const users = JSON.parse(localStorage.getItem("ticketapp_users")) || [];

    // Check if email already exists
    if (users.find((u) => u.email === data.email)) {
      throw new Error("Email already registered. Please log in.");
    }

    const newUser = { ...data };
    users.push(newUser);
    localStorage.setItem("ticketapp_users", JSON.stringify(users));

    // Auto login after signup
    const session = { token: Date.now().toString(), user: newUser };
    localStorage.setItem("ticketapp_session", JSON.stringify(session));
    setUser(newUser);
    navigate("/dashboard");
  };

  //  Simulate Login
  const login = (data) => {
    const users = JSON.parse(localStorage.getItem("ticketapp_users")) || [];
    const existing = users.find(
      (u) => u.email === data.email && u.password === data.password
    );

    if (!existing) {
      throw new Error("Invalid credentials. Please check and try again.");
    }

    const session = { token: Date.now().toString(), user: existing };
    localStorage.setItem("ticketapp_session", JSON.stringify(session));
    setUser(existing);
    navigate("/dashboard");
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("ticketapp_session");
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
