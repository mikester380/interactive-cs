import PosterScore from "./PosterScore"
import PosterAction from './PosterAction'

import s from './footer.module.css'

import update from '../../../assets/images/icon-edit.svg'
import trash from '../../../assets/images/icon-delete.svg'
import reply from '../../../assets/images/icon-reply.svg'

function PosterFooter(props) {
  return (
    <div className={s.footer}>
      <PosterScore score={props.score} controlScore={props.controlScore} controlUnscore={props.controlUnscore} />
      <div className={s.actions}>
        { props.signed && <PosterAction title='Edit' icon={update} handler={props.toggleEditForm} /> }
        { props.signed && <PosterAction title='Delete' icon={trash} danger={true} handler={props.showDeleteModal} /> }
        { !props.signed && <PosterAction title='Reply' icon={reply} handler={props.toggleReply} /> }
      </div>
    </div>
  )
}

export default PosterFooter