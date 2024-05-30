import { useContext, useRef } from "react"

import { ctx as global } from "../../context/global"
import { ID } from "../../../utils/helpers"

import SuperForm from "../superform"

function CreateForm() {
  const { comments, setComments, currentUser } = useContext(global)
  const formRef = useRef(null)

  function EventHandler(event) {
    event.preventDefault()
    const { current } = formRef

    if (!current.value) {
      return
    }

    setComments([
      ...comments,
      {
        content: current.value,
        createdAt: Date.now(),
        score: 0,
        user: currentUser,
        id: ID(comments),
        replies: [],
      },
    ])

    current.value = ""
  }

  return (
    <SuperForm
      formTitle="Send"
      placeholder="Add a comment..."
      valueRef={formRef}
      onSubmit={EventHandler}
    />
  )
}

export default CreateForm
