import { useContext, useRef, useState } from "react"

import { ctx as global } from "../../context/global"
import { ID, removeUsername } from "../../../utils/helpers"

import PosterAndForm from "../posterandform"

function Weak(props) {
  const { comments, setComments, currentUser } = useContext(global)
  const [showReplyForm, setShowReplyForm] = useState(false)
  const formRef = useRef()

  function controlReply(e) {
    e.preventDefault()
    const { current } = formRef

    if (!current.value) {
      return
    }

    const target = comments.find((comment) => comment.id === props.hostId)

    const reply = {
      content: removeUsername(current.value),
      createdAt: Date.now(),
      score: 0,
      id: ID(comments),
      replyingTo: props.user.username,
      user: currentUser,
    }

    target.replies.push(reply)

    setComments([...comments])
    setShowReplyForm(false)
  }

  return (
    <PosterAndForm
      created={props.createdAt}
      content={props.content}
      username={props.user.username}
      image={props.user.image.png}
      score={props.score}
      to={props.replyingTo}
      valueRef={formRef}
      showReplyForm={showReplyForm}
      toggleReplyForm={() => setShowReplyForm(!showReplyForm)}
      formHandler={controlReply}
      controlScore={props.controlScore}
      controlUnscore={props.controlUnscore}
    />
  )
}

export default Weak
