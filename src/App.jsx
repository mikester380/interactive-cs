import GProvider from "./context/global/provider"
import Comments from "./components/comments"
import CreateForm from "./components/createForm"

import s from "./App.module.css"

function App() {
  return (
    <div className={s.cs}>
      <GProvider>
        <Comments />
        <CreateForm />
      </GProvider>
    </div>
  )
}

export default App
