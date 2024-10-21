import { useDispatch, useSelector } from "react-redux"
import { Loader } from "../ui-components"
import { useEffect } from "react"
import { getArticleStart, getArticleSuccess } from "../slice/article"
import ArticleService from "../service/article"
import ArticleCard from "./article-card"

function Main() {

  const {articles, isLoading} = useSelector(state => state.article)
  const dispatch = useDispatch()

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
    getArticle()
  }, [])

  return isLoading ? <Loader /> : (
    <>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {articles && articles.map(item => (
          <ArticleCard item={item} getArticle={getArticle} />
        ))}
      </div>


    </>
  )
}

export default Main