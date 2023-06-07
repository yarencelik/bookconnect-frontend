import { useState } from "react";

const Login = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const handleSubmit = (e: any) => {
      e.preventDefault();

      // Handle login logic here
   };

   return (
      <div>
         <h1>Login</h1>
         <form onSubmit={handleSubmit}>
            <label>Email:</label>
            <input
               type="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password:</label>
            <input
               type="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
         </form>
      </div>
   );
};

export default Login;
