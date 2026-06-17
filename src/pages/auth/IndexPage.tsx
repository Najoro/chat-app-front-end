import logo from '../../assets/logo_index.png'
import { FaApple, FaFacebookF, FaGoogle } from 'react-icons/fa'

const socialButtons = [
  { icon: FaFacebookF, label: 'Continuer avec Facebook' },
  { icon: FaGoogle, label: 'Continuer avec Google' },
  { icon: FaApple, label: 'Continuer avec Apple' },
]

function IndexPage() {
  return (
    <section className="flex min-h-screen w-full flex-col bg-[radial-gradient(circle_at_top,_rgba(75,32,122,0.45),_transparent_45%),linear-gradient(180deg,_#231336_0%,_#171717_58%,_#1d1d1d_100%)] px-6 py-5 text-white shadow-2xl">
      <div className="mb-12 flex items-center justify-center gap-2">
        <img src={logo} alt="Logo Chatbox" className="w-8 h-auto" />
        <span className="text-lg font-medium tracking-tight">Chatbox</span>
      </div>

      <div className="mx-auto flex max-w-md flex-col items-center space-y-5 text-center">
        <h1 className="text-5xl leading-[0.95] font-light tracking-tight">
          Connect friends
          <br />
          <span className="font-semibold">easily & quickly</span>
        </h1>

        <p className="max-w-xs text-lg leading-8 text-white/70">
          Our chat app is the perfect way to stay connected with friends and family.
          <span className="text-red-500">.</span>
        </p>
      </div>

      <div className="mt-auto">
        <div className="flex items-center justify-center gap-5 pt-3">
          {socialButtons.map(({ icon: Icon, label }) => (
            <button
              key={label}
              type="button"
              aria-label={label}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 text-xl text-white transition"
            >
              <Icon />
            </button>
          ))}
        </div>

        <div className="my-4 flex items-center gap-4 text-sm text-white/70">
          <span className="h-px flex-1 bg-white/20" />
          <span>OR</span>
          <span className="h-px flex-1 bg-white/20" />
        </div>

        <button
          type="button"
          className="w-full rounded-2xl bg-white px-6 py-4 text-lg font-semibold text-slate-900"
        >
          Sign up withn mail
        </button>

        <p className="pt-10 text-center text-base text-white/70">
          Existing account? <span className="font-semibold text-white">Log in</span>
        </p>
      </div>
    </section>
  )
}

export default IndexPage
