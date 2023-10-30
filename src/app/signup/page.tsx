'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Axios } from 'axios';

function SignupPage() {
  const [user, setUser] = useState({
    email: '',
    password: '',
    username: '',
  });

  const onSignup = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-4">
      <h1>Signup</h1>
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
        className="p-2 border border-gray-300 rounded-md my-4 focus:outline-none focus:border-gray-600"
      >
        Signup Here
      </button>
      <Link href="/login">Visit login page</Link>
    </div>
  );
}

export default SignupPage;
