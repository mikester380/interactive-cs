import s from './layer.module.css'

function Layer(props) {
  return (
    <div className={s.layer}>
      { props.children }
    </div>
  )
}

export default Layer