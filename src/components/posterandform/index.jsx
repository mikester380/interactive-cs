import Poster from '../poster'
import SuperForm from '../superform'

import s from './posterandform.module.css'

function PosterAndForm(props) {
  return (
    <div className={s.container}>
      <Poster
        username={props.username}
        image={props.image}
        created={props.created}
        content={props.content}
        score={props.score}
        to={props.to}
        toggleReply={props.toggleReplyForm}
        controlScore={props.controlScore}
        controlUnscore={props.controlUnscore}
      />
      {props.showReplyForm && 
        <SuperForm
          formTitle='Reply'
          defaultValue={'@' + props.username + ', '}
          valueRef={props.valueRef}
          handler={props.formHandler}
        />
      }
    </div>
  )
}

export default PosterAndForm