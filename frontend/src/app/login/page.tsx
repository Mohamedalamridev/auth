import Link from "next/link";
import AuthForm from "../../components/AuthForm";

export default function LoginPage() {
  return (
    <main className="container">
      <h1>Login</h1>
      <AuthForm mode="login" />
      <p>
        No account? <Link href="/register">Register</Link>
      </p>
    </main>
  );
}
