import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo_index.png'
import {paths} from '../../routes/paths'

export default function IndexPage() {
  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const timeout = window.setTimeout(() => {
      navigate(paths.auth.index)
    }, 5000)

    return () => window.clearTimeout(timeout)
  }, [navigate])

  return (
    <section className="flex min-h-screen items-center justify-center bg-white text-center">
      <div
        className={`flex flex-col items-center gap-2 transition-all duration-[3000ms] ${
          isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
        }`}
      >
        <img src={logo} alt="Logo Chatbox" className="h-auto w-24" />
        <h1 className="text-4xl font-semibold italic text-slate-900">Chatbox</h1>
      </div>
    </section>
  )
}
