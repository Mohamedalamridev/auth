"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000/api";

interface DashboardResponse {
  message: string;
  role: string;
  widgets: string[];
}

export default function DashboardClient() {
  const router = useRouter();
  const [data, setData] = useState<DashboardResponse | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/dashboard`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        const json = await response.json();

        if (!response.ok) {
          setError(json.message || "Could not load dashboard");
          return;
        }

        setData(json);
      } catch (_error) {
        setError("Server is unreachable");
      }
    };

    void fetchData();
  }, [router]);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    router.push("/login");
  };

  if (error) {
    return (
      <div className="container">
        <h1>Dashboard</h1>
        <p style={{ color: "red" }}>{error}</p>
        <button onClick={logout}>Back to Login</button>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Role-Based Dashboard</h1>
      <p>{data?.message ?? "Loading dashboard..."}</p>
      <div className="grid">
        {data?.widgets?.map((widget) => (
          <div key={widget} className="card">
            {widget}
          </div>
        ))}
      </div>
      <button onClick={logout} style={{ marginTop: "20px" }}>
        Logout
      </button>
    </div>
  );
}
