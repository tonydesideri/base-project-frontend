export default function LoginPage() {
  return (
    <main className="h-screen flex justify-center items-center">
      <div className="w-full max-w-lg p-3">
        <form className="bg-primary-500 rounded-3xl shadow-2xl py-12 px-8">
          <h1 className="text-white font-bold text-2xl mb-6">LOGO</h1>
          <p className="text-sm font-normal text-white mb-8">
            Digite seus dados para acessar sua conta
          </p>
          <div className="mb-6">
            <div className="flex items-center bg-primary-200 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-primary-700 mx-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                id="email"
                className="w-full py-2 bg-primary-200 rounded-md text-primary-700 placeholder-white focus:outline-none"
                type="email"
                name="email"
                placeholder="E-mail"
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="flex items-center bg-primary-200 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-primary-700 mx-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="w-full py-2 bg-primary-200 rounded-md text-primary-700 placeholder-white focus:outline-none"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full h-10 bg-primary-700 rounded-md text-white font-semibold mb-4"
          >
            ENTRAR
          </button>
          <div className="flex justify-between text-xs font-normal text-white">
            <a href="#" className="cursor-pointer hover:font-bold">
              Esqueci minha senha?
            </a>
            <p>
              Não possui cadastro?{' '}
              <a href="#" className="font-semibold hover:font-extrabold">
                Cadastrar-se
              </a>
            </p>
          </div>
          <div className="my-8 text-white flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p className="mx-4 mb-0 text-center font-semibold">ou</p>
          </div>
          <a
            className="flex items-center justify-center h-10 bg-white text-sm font-normal uppercase text-primary-700 rounded-md"
            href="#!"
            role="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-primary-700 pr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
            Continue com o Google
          </a>
        </form>
      </div>
    </main>
  )
}
