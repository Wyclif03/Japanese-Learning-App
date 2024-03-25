import { NextPage } from "next";
import Link from 'next/link';

const LoginPage: NextPage = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-5">Login Page</h2>
      <form className="flex flex-col space-y-4">
        <input 
          type="email" 
          placeholder="Email" 
          className="border p-2" 
          required
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="border p-2" 
          required
        />
        <button type="submit" className="bg-blue-500 text-white rounded px-4 py-2">Login</button>
      </form>
      <Link href="/register" className="text-sm text-blue-500 mt-4">
        Don't have an account? Register
      </Link>
    </main>
  );
}

export default LoginPage;