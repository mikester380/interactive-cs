import { useMemo, useState } from "react"
import { Provider } from "."
import { useLocalStorage } from "../../hooks/useLocalStorage"
import initialState from "../../../store/data"

const { comments: c, currentUser: cu } = initialState

function GProvider(props) {
  const { children } = props
  const [comments, setComments] = useLocalStorage("comments", Array.from(c))
  const [currentUser, setCurrentUser] = useState({ ...cu })

  const values = useMemo(
    () => ({ comments, setComments, currentUser, setCurrentUser }),
    [comments, setComments, currentUser]
  )

  return <Provider value={values}>{children}</Provider>
}

export default GProvider
