import Link from "next/link";

export default function HomePage() {
  return (
    <main className="container">
      <h1>Express + MongoDB + Next.js Auth System</h1>
      <p>Use JWT authentication and role-based authorization dashboard.</p>
      <div className="link-row">
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </main>
  );
}
