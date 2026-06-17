import { useNavigate } from 'react-router-dom'
import { paths } from '../../routes/paths'

type ButtonProps = {
  path?: string
  label?: string
  classes?: string
}

export const ButtonFullWidth = ({
  path,
  label,
  classes = 'bg-white text-slate-950',
}: ButtonProps) => {
  const navigate = useNavigate()

  const navigateTo = () => {
    if (path && path !== '') {
      navigate(path)
    } else {
      navigate(paths.index)
    }
  }

  return (
    <button
      type="button"
      className={`my-1 w-full cursor-pointer rounded-2xl px-6 py-4 text-lg font-semibold transition ${classes}`}
      onClick={navigateTo}
    >
      {label}
    </button>
  )
}
