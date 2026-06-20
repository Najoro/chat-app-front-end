import { ButtonFullWidth } from '../../components/ui/Buttons'
import { paths } from '../../routes/paths'

const registerFields = [
  {
    id: 'username',
    label: 'Username',
    type: 'text',
    placeholder: 'Choose your username',
    autoComplete: 'off',
  },
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
    placeholder: 'Create a password',
    autoComplete: 'new-password',
  },
]

function RegisterPage() {
  return (
    <>
      <h1 className="mt-3 text-3xl font-light leading-tight tracking-tight lg:mt-0 lg:text-[2.75rem] lg:leading-[1.05]">
        Join the conversation
      </h1>
      <p className="mt-3 max-w-md text-sm leading-7 text-white/70 lg:text-base">
        Start with a simple profile and connect with your friends in just a few steps.
      </p>

      <form autoComplete="off" className="mt-7 space-y-4 lg:mt-6 lg:space-y-3.5">
        {registerFields.map(({ id, label, type, placeholder, autoComplete }) => (
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

        <div className="pt-2 lg:pt-1">
          <ButtonFullWidth
            path={paths.auth.login}
            label="Create account"
            classes="bg-white text-slate-950 shadow-lg shadow-black/25 hover:bg-white/90"
          />
        </div>
      </form>
    </>
  )
}

export default RegisterPage
