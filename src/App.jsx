import { createContext, useState, useRef } from 'react'
import { getLocallySaved, getnextid, saveLocally } from '../utils/helpers'
import data from '../store/data'

import Comments from './components/comments'
import SuperForm from './components/superform'

import s from './App.module.css'

export const globalStore = createContext()
const ProvideStore = globalStore.Provider

function App() {
  const [ comments, setComments ] = useState(() => {
    const fromStorage = getLocallySaved('comments')
    
    return fromStorage || data.comments
  })

  const [ loggedInUser, setLoggedInUser ] = useState(data.currentUser)
  const formInputRef = useRef(null)

  function controlSubmit(event) {
    event.preventDefault()

    //if the comment form is empty, do nothing by "doing" an early return. weird right? lol
    if (!formInputRef.current.value) return
    
    const comment = {
      content: formInputRef.current.value,
      createdAt: Date.now(),
      score: 0,
      user: loggedInUser,
      id: getnextid(comments),
      replies: []
    }

    formInputRef.current.value = ""
    const currentComments = [...comments, comment]

    saveLocally('comments', currentComments)
    setComments(currentComments)
  }

  return (
    <div className={s.cs}>
      <ProvideStore value={{ comments, setComments, loggedInUser, setLoggedInUser }}>
        <Comments />
        <SuperForm 
          formTitle='Send'
          placeholder='Add a comment...'
          valueRef={formInputRef}
          onSubmit={controlSubmit}
        />
      </ProvideStore>
    </div>
  )
}

export default App