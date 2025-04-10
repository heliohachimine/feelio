import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {

    const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = { name: "Feelio User" }; // pode ser vindo da API
    login(user);
    navigate("/home");
  };

    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-800 via-purple-900 to-black p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
            Entrar no Feelio
          </h2>
          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Senha</label>
              <input
                type="password"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md transition"
            >
              Entrar
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-500">
            Ainda não tem uma conta?{" "}
            <Link to="/signup">
            <a href="#" className="text-purple-600 hover:underline">Cadastre-se</a>

            </Link>
          </p>
        </div>
      </div>
    );
  }
