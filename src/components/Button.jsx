import { Link } from 'react-router-dom'

export default function Button({ to, href, variant = 'green', children, className = '' }) {
  const variants = {
    green: 'btn-green',
    outline: 'btn-outline',
    primary: 'btn-primary',
    ghost: 'btn-ghost',
  }
  const cls = `${variants[variant]} ${className}`

  if (to) return <Link to={to} className={cls}>{children}</Link>
  if (href) return <a href={href} className={cls}>{children}</a>
  return <button className={cls}>{children}</button>
}