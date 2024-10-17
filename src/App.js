import { Routes, Route } from "react-router-dom"
import { ArticleDetail, Login, Main, Navbar, Register } from "./components"
import AuthService from "./service/auth"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { signUserSuccess } from "./slice/auth"
import { getItem } from "./helpers/persistance-storage"
import ArticleService from "./service/article"
import { getArticleStart, getArticleSuccess } from "./slice/article"

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

  const getArticle = async () => {
    dispatch(getArticleStart())
    try {
      const response = await ArticleService.getArticles()
      dispatch(getArticleSuccess(response.articles))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const token = getItem('token')
    console.log(token, "token")
    if(token){
      getUser()
    }
    getArticle()
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
        </Routes>
      </div>
    </div>
  )
}

export default App