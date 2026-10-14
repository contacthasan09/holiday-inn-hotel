export default function Card({ children, className = '', flat = false }) {
  return <div className={`${flat ? 'card-flat' : 'card'} ${className}`}>{children}</div>
}