import logo from '../../assets/logo_index.png'

export default function IndexPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-2 bg-white text-center">
      <img src={logo} alt="Logo Chatbox" className="w-24 h-auto" />
      <h1 className="text-4xl font-semibold italic text-slate-900">Chatbox</h1>
    </section>
  )
}
