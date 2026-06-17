import { Outlet } from 'react-router-dom'

export function IndexLayout() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <Outlet />
    </main>
  )
}
