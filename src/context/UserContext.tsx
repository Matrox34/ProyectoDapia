"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { User } from "@/types/types";

interface UserContextType {
  user: User | null;
  register: (user: User) => void;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [registeredUsers, setRegisteredUsers] = useState<User[]>([]);

  const register = (newUser: User) => {
    setRegisteredUsers(prev => [...prev, newUser]);
    setUser(newUser);
  };

  const login = (email: string, password: string) => {
    const found = registeredUsers.find(
      u => u.email === email && u.password === password
    );
    if (found) {
      setUser(found);
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, register, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used inside UserProvider");
  return context;
};
