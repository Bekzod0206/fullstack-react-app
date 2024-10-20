import { useState } from "react"
import ArticleForm from "./article-form"
import ArticleService from "../service/article"
import { useDispatch } from "react-redux"
import { postArticleFailure, postArticleStart, postArticleSuccess } from "../slice/article"
import { useNavigate } from "react-router-dom"

function CreateArticle() {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [body, setBody] = useState('')
  const btnText = 'Create'

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const formSubmit = async (e) => {
    e.preventDefault()
    const article = {title, description, body}
    dispatch(postArticleStart())
    try {
      await ArticleService.postArticle(article)
      dispatch(postArticleSuccess())
      navigate('/')
    } catch (error) {
      dispatch(postArticleFailure())
    }
  }

  const propsObj = {title, setTitle, description, setDescription, body, setBody, btnText, formSubmit}

  return (
    <div className="text-center">
      <h1 className="fs-2">Create article</h1>
      <ArticleForm
        {...propsObj}
      />
    </div>
  )
}

export default CreateArticle