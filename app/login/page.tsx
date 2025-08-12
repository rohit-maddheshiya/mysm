"use client";

import { useState } from "react";

export default function LoginPage() {
    // these are use to store values 
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");



    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
        // Here we'll later connect to API for authentication
    };


    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit}
             className="bg-white p-6 rounded-xl shadow-md w-80 h-120"
            >

                <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>

                <input type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                 className="w-full p-2 border rounded mb-2 "
                 required/>


                <input type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                 className="w-full border rounded p-2 mb-2 "
                 required/>


                 <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
               

            </form>
        </div>

    );

}