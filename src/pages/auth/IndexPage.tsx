import { FaApple, FaFacebookF, FaGoogle } from 'react-icons/fa'
import { paths } from '../../routes/paths'
import { ButtonFullWidth } from '../../components/ui/Buttons'

const socialButtons = [
  { icon: FaFacebookF, label: 'Continuer avec Facebook' },
  { icon: FaGoogle, label: 'Continuer avec Google' },
  { icon: FaApple, label: 'Continuer avec Apple' },
]

function IndexPage() {
  return (
    <>
      <h1 className="mt-3 text-3xl font-light leading-tight tracking-tight lg:mt-0 lg:text-[2.75rem] lg:leading-[1.05]">
        Enter Chatbox your way
      </h1>
      <p className="mt-3 max-w-md text-sm leading-7 text-white/70 lg:text-base">
        Continue with a social account or use your email to create an account and
        start chatting in seconds.
      </p>

      <div className="mt-8">
        <div className="flex items-center justify-center gap-4 pt-1 lg:justify-start">
          {socialButtons.map(({ icon: Icon, label }) => (
            <button
              key={label}
              type="button"
              aria-label={label}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/6 text-xl text-white transition hover:bg-white/12"
            >
              <Icon />
            </button>
          ))}
        </div>

        <div className="my-6 flex items-center gap-4 text-sm text-white/70">
          <span className="h-px flex-1 bg-white/20" />
          <span>OR</span>
          <span className="h-px flex-1 bg-white/20" />
        </div>

        <ButtonFullWidth
          path={paths.auth.register}
          label="Sign up with mail"
          classes="bg-white text-slate-950 shadow-lg shadow-black/20 hover:bg-white/90"
        />
        <ButtonFullWidth
          path={paths.auth.login}
          label="Login"
          classes="border border-white/35 bg-transparent text-white hover:bg-white/10"
        />
      </div>
    </>
  )
}

export default IndexPage
