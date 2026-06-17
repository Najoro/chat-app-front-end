import logo from '../assets/logo_index.png'
import { FaArrowLeft } from 'react-icons/fa'
import { Outlet, useMatches, useNavigate } from 'react-router-dom'

type AuthFeatureCard = {
  title: string
  description: string
  classes?: string
}

export type AuthLayoutConfig = {
  introEyebrow: string
  introTitle: string
  introDescription: string
  mobileEyebrow: string
  featureCards: AuthFeatureCard[]
  showBackButton?: boolean
}

type AuthRouteHandle = {
  authLayout?: AuthLayoutConfig
}

export function AuthLayout() {
  const navigate = useNavigate()
  const matches = useMatches()
  const activeMatch = matches[matches.length - 1] as { handle?: AuthRouteHandle } | undefined
  const authLayout = activeMatch?.handle?.authLayout
  const showBackButton = authLayout?.showBackButton ?? true

  if (!authLayout) {
    return (
      <main>
        <Outlet />
      </main>
    )
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top,_rgba(75,32,122,0.45),_transparent_42%),linear-gradient(180deg,_#231336_0%,_#171717_58%,_#1d1d1d_100%)] px-6 py-6 text-white lg:h-screen lg:overflow-hidden lg:px-4 lg:py-6 xl:px-6">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-[1480px] flex-col lg:h-full lg:min-h-0 lg:grid lg:grid-cols-[1.08fr_0.92fr] lg:grid-rows-[auto_1fr_auto] lg:gap-x-6 lg:gap-y-4 xl:gap-x-8">
        <div className="mb-8 flex items-center justify-center gap-2 lg:col-span-2 lg:mb-0 lg:justify-start lg:pl-2 xl:pl-0">
          <img src={logo} alt="Logo Chatbox" className="h-auto w-8 lg:w-10" />
          <span className="text-lg font-medium tracking-tight lg:text-2xl">Chatbox</span>
        </div>

        <div className="hidden self-center lg:block lg:-translate-x-6 lg:pl-0 xl:-translate-x-10">
          {showBackButton ? (
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="mb-14 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/6 text-sm text-white/85 transition hover:bg-white/12"
              aria-label="Go back"
            >
              <FaArrowLeft />
            </button>
          ) : null}

          <p className="text-sm uppercase tracking-[0.45em] text-white/45">
            {authLayout.introEyebrow}
          </p>
          <h1 className="mt-5 max-w-lg text-5xl font-light leading-[0.98] tracking-tight xl:text-6xl">
            {authLayout.introTitle}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/68 xl:text-lg">
            {authLayout.introDescription}
          </p>

          <div className="mt-7 grid max-w-xl grid-cols-2 gap-4">
            {authLayout.featureCards.map(({ title, description, classes }) => (
              <div
                key={title}
                className={`rounded-[1.75rem] border border-white/10 p-5 backdrop-blur-sm ${classes ?? 'bg-white/6'}`}
              >
                <p className="text-3xl font-light">{title}</p>
                <p className="mt-2 text-sm leading-6 text-white/60">{description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full self-center rounded-[2rem] border border-white/10 bg-white/8 p-6 shadow-2xl shadow-black/20 backdrop-blur-sm sm:p-8 lg:justify-self-stretch lg:w-full lg:max-w-none lg:rounded-[2.25rem] lg:p-7 xl:mr-4 xl:p-8">
          {showBackButton ? (
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/6 text-sm text-white/85 transition hover:bg-white/12 lg:hidden"
              aria-label="Go back"
            >
              <FaArrowLeft />
            </button>
          ) : null}

          <p className="text-sm uppercase tracking-[0.35em] text-white/45 lg:hidden">
            {authLayout.mobileEyebrow}
          </p>
          <Outlet />
        </div>

        <p className="mt-6 text-center text-sm text-white/55 lg:col-span-2 lg:mt-0 lg:self-end">
          By continuing, you agree to our Terms & Privacy Policy.
        </p>
      </div>
    </main>
  )
}
