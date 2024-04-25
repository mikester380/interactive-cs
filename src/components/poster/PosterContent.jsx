import s from './content.module.css'

function PosterContent(props) {
  return (
    <p className={s.content}>
      { props.to && <span className={s.to}>@{props.to}</span> } {' '}
      { props.content.split('').map((e, index) => /\n/.test(e) ? <br key={index} /> : e) }
    </p>
  )
}

export default PosterContent