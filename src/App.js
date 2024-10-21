import { Routes, Route, Router } from "react-router-dom"
import { ArticleDetail, CreateArticle, EditArticle, Login, Main, Navbar, Register } from "./components"
import AuthService from "./service/auth"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { signUserSuccess } from "./slice/auth"
import { getItem } from "./helpers/persistance-storage"

function App() {

  const dispatch = useDispatch()
  const getUser = async () => {
    try {
      const response = await AuthService.getUser()
      dispatch(signUserSuccess(response.user))
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    const token = getItem('token')
    // console.log(token, "token")
    if(token){
      getUser()
    }
  }, [])

  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/article/:slug' element={<ArticleDetail />} />
          <Route path='/create-article' element={<CreateArticle />} />
          <Route path='/edit-article/:slug' element={<EditArticle />} />
        </Routes>
      </div>
    </div>
  )
}

export default App