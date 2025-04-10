export default function Signup() {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-pink-800 via-purple-900 to-black p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
            Criar Conta no Feelio
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nome</label>
              <input
                type="text"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
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
              Cadastrar
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-500">
            Já tem uma conta?{" "}
            <a href="/login" className="text-purple-600 hover:underline">Entrar</a>
          </p>
        </div>
      </div>
    );
  }
