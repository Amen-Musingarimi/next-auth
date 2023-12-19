'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios, { Axios } from 'axios';
import toast from 'react-hot-toast';

function SignupPage() {
  const router = useRouter();

  const [user, setUser] = useState({
    email: '',
    password: '',
    username: '',
  });

  const [buttonDisabled, setButtonDisappled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post('api/users/signup', user);
      console.log('Signup Success', response.data);
      router.push('/login');
    } catch (error) {
      console.log('signup Failed', error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisappled(false);
    } else {
      setButtonDisappled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-4">
      <h1 className="text-blue-950 font-semibold text-xl">Sign Up</h1>
      <hr />
      <div className="flex flex-col gap-1">
        <label htmlFor="username">username</label>
        <input
          className="p-2 rounded-md border outline-none border-gray-300"
          id="username"
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="username"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email">email</label>
        <input
          className="p-2 rounded-md border outline-none border-gray-300"
          id="email"
          type="text"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="email"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password">password</label>
        <input
          className="p-2 rounded-md border outline-none border-gray-300"
          id="password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="password"
        />
      </div>
      <button
        onClick={onSignup}
        className="py-2 px-4 border bg-blue-950 text-white hover:bg-blue-900 rounded-md my-4"
      >
        Signup Here
      </button>
      <Link href="/login" className="text-blue-800 hover:text-blue-700">
        Visit login page
      </Link>
    </div>
  );
}

export default SignupPage;
