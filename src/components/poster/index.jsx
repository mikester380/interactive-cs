import PosterScore from "./PosterScore"
import PosterHeader from "./PosterHeader"
import PosterContent from "./PosterContent"
import PosterForm from "./PosterForm"
import PosterFooter from "./PosterFooter"

import s from "./poster.module.css"

function Poster(props) {
  return (
    <div className={s.poster}>
      <div className={s.column}>
        <PosterScore
          score={props.score}
          v={true}
          controlScore={props.controlScore}
          controlUnscore={props.controlUnscore}
        />
      </div>
      <div className={s.column}>
        <PosterHeader
          signed={props.signed}
          username={props.username}
          image={props.image}
          created={props.created}
          toggleReply={props.toggleReply}
          toggleEditForm={props.toggleEditForm}
          showDeleteModal={props.showModal}
        />
        {!props.showEditForm && (
          <PosterContent
            content={props.content}
            to={props.to}
          />
        )}
        {props.showEditForm && (
          <PosterForm
            to={props.to}
            content={props.content}
            handler={props.controlEdit}
            formRef={props.formRef}
          />
        )}
        <PosterFooter
          signed={props.signed}
          score={props.score}
          toggleReply={props.toggleReply}
          toggleEditForm={props.toggleEditForm}
          controlScore={props.controlScore}
          controlUnscore={props.controlUnscore}
          showDeleteModal={props.showModal}
        />
      </div>
    </div>
  )
}

export default Poster
