import { Outlet } from 'react-router-dom'
import background from '../assets/background.svg'

export function Root() {
  return (
    <main className="flex h-screen w-full flex-col items-center overflow-x-hidden bg-base-background pb-8 font-body">
      <div className="max-w-background">
        <img src={background} alt="" className="bg-cover" />
      </div>

      <Outlet />
    </main>
  )
}
