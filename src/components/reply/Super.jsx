import { useContext, useRef, useState } from "react"
import { globalStore } from "../../App"
import { removeUsername, saveLocally } from "../../../utils/helpers"

import Poster from "../poster"
import Modal from "../modal"

function Super(props) {
  const { comments, setComments } = useContext(globalStore)
  const [ showEditForm, setShowEditForm ] = useState(false)
  const [ showModal, setShowModal ] = useState(false)
  const formRef = useRef()

  function controlEdit(event) {
    event.preventDefault()

    const host = comments.find(comment => comment.id === props.hostId)
    const target = host.replies.find(reply => reply.id === props.id)

    //cut out the user's name before updating the reply
    target.content = removeUsername(formRef.current.value)

    const current = [...comments]

    saveLocally('comments', current)
    setComments(current)

    setShowEditForm(false)
  }

  function controlDelete() {
    const host = comments.find(comment => comment.id === props.hostId)
    const target = host.replies.find(reply => reply.id === props.id)

    host.replies = host.replies.filter(reply => reply !== target)

    const current = [...comments]
    
    saveLocally('comments', current)
    setComments(current)
  }

  return (
    <>
      <Poster 
        content={props.content}
        created={props.createdAt}
        score={props.score}
        username={props.user.username}
        image={props.user.image.png}
        to={props.replyingTo}
        signed={true}
        showModal={() => setShowModal(true)}
        showEditForm={showEditForm}
        controlScore={props.controlScore}
        controlUnscore={props.controlUnscore}
        toggleEditForm={() => setShowEditForm(!showEditForm)}
        formRef={formRef}
        controlEdit={controlEdit}
      />
      { showModal && <Modal closeModal={() => setShowModal(false)} controlDelete={controlDelete} />}
    </>
  )
}

export default Super