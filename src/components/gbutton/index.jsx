import s from './gbutton.module.css'

function GButton({ title, type = 'norm', className = '', ...otherProps }) {
  return (
    <button className={
      `${s.button} ${s[type]} ${className}`
    } type="submit" {...otherProps}>
      { title }
    </button>
  )
}

export default GButton