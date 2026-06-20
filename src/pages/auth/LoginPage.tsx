import { useLogin } from '../../hooks/auth/useLogin'

const loginFields = [
  {
    id: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
    autoComplete: 'off',
  },
  {
    id: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    autoComplete: 'new-password',
  },
]

const LoginPage = () => {
  const { isLoading, error, handleSubmit } = useLogin()

  return (
    <>
      <h1 className="mt-3 text-3xl font-light leading-tight tracking-tight lg:mt-0 lg:text-[2.75rem] lg:leading-[1.05]">
        Login to Chatbox
      </h1>
      <p className="mt-3 max-w-md text-sm leading-7 text-white/70 lg:text-base">
        Enter your account details and continue your messaging experience.
      </p>

      <form
        autoComplete="off"
        className="mt-7 space-y-4 lg:mt-6 lg:space-y-3.5"
        onSubmit={handleSubmit}
      >
        {loginFields.map(({ id, label, type, placeholder, autoComplete }) => (
          <label key={id} htmlFor={id} className="block">
            <span className="mb-2 block text-sm font-medium text-white/80">{label}</span>
            <input
              id={id}
              name={id}
              type={type}
              placeholder={placeholder}
              autoComplete={autoComplete}
              defaultValue=""
              className="w-full rounded-2xl border border-white/15 bg-black/20 px-4 py-4 text-base text-white outline-none transition placeholder:text-white/35 focus:border-white/35 focus:bg-black/30 lg:py-3.5"
            />
          </label>
        ))}

        {error ? <p className="text-sm text-red-300">{error}</p> : null}

        <div className="pt-2 lg:pt-1">
          <button
            type="submit"
            disabled={isLoading}
            className="my-1 w-full cursor-pointer rounded-2xl bg-white px-6 py-4 text-lg font-semibold text-slate-950 shadow-lg shadow-black/25 transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </div>
      </form>
    </>
  )
}

export default LoginPage
