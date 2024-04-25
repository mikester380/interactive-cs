import s from './action.module.css'

function Action(props) {
  return (
    <button className={`${s.button} ${props.danger ? s.danger : ''}`} onClick={props.handler}>
      <img src={props.icon} alt=''/>
      <span>{ props.title }</span>
    </button>
  )
}

export default Action