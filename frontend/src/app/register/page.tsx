import Link from "next/link";
import AuthForm from "../../components/AuthForm";

export default function RegisterPage() {
  return (
    <main className="container">
      <h1>Register</h1>
      <AuthForm mode="register" />
      <p>
        Already have an account? <Link href="/login">Login</Link>
      </p>
    </main>
  );
}
