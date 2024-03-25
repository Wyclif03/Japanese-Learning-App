import { NextPage } from "next";
import Link from 'next/link';

const registration: NextPage = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-5">Registration Page</h2>
      <form className="flex flex-col space-y-4">
        <input 
          type="email" 
          placeholder="Email" 
          className="border p-2" 
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          required
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="border p-2" 
          pattern="(?=.*\d)(?=.*[!@#$%^&*]).{8,}"
          required
        />
        <input 
          type="password" 
          placeholder="Confirm Password" 
          className="border p-2" 
          required
        />
        <button type="submit" className="bg-blue-500 text-white rounded px-4 py-2">Register</button>
      </form>
      <Link href="/login" className="text-sm text-blue-500 mt-4">
        Already have an account? Login
      </Link>
    </main>
  );
}

export default registration;