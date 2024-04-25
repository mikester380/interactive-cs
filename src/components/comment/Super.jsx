import { useContext, useState, useRef } from "react"
import { globalStore } from "../../App"
import { saveLocally } from "../../../utils/helpers"

import Poster from "../poster"
import Modal from "../modal"

function Super(props) {
  const { comments, setComments } = useContext(globalStore)
  const [ showEditForm, setShowEditForm ] = useState(false)
  const [ showModal, setShowModal ] = useState(false)
  const formRef = useRef()

  function controlEdit(event) {
    event.preventDefault()

    const target = comments.find(comment => comment.id === props.id)
    target.content = formRef.current.value

    saveLocally('comments', [...comments])
    setComments([...comments])
    setShowEditForm(false)
  }

  function controlDelete() {
    //find the comment
    const target = comments.find(comment => comment.id === props.id)

    //delete the comment
    const current = [...comments.filter(comment => comment !== target)]

    saveLocally('comments', current)
    setComments(current)
  }

  return (
    <>
      <Poster
        content={props.content}
        created={props.createdAt}
        username={props.user.username}
        image={props.user.image.png}
        score={props.score}
        signed={true}
        showEditForm={showEditForm}
        toggleEditForm={() => setShowEditForm(!showEditForm)}
        showModal={() => setShowModal(true)}
        controlEdit={controlEdit}
        controlScore={props.controlScore}
        controlUnscore={props.controlUnscore}
        formRef={formRef}
      />
      { showModal && <Modal closeModal={() => setShowModal(false)} controlDelete={controlDelete} /> }
    </>
  )
}

export default Super