import { useEffect } from "react"
import { useParams } from "react-router-dom"
import ArticleService from "../service/article"
import { useDispatch, useSelector } from "react-redux"
import { getArticleDetailFailure, getArticleDetailStart, getArticleDetailSuccess } from "../slice/article"
import moment from "moment"
import { Loader } from "../ui-components"

function ArticleDetail() {

  const {slug} = useParams()
  const dispatch = useDispatch()
  const { articleDetail, isLoading } = useSelector(state => state.article)

  const getArticleDetail = async () => {
    dispatch(getArticleDetailStart())
    try {
      const response = await ArticleService.getArticleDetail(slug)
      dispatch(getArticleDetailSuccess(response.article))
    } catch (error) {
      dispatch(getArticleDetailFailure())
    }
  }
  
  useEffect(() => {
    getArticleDetail()
  }, [slug])

  return isLoading ? <Loader /> : articleDetail && (
    <div className="jumbotron">
      <div className="container">
        <h1 className="display-3">{ articleDetail.title }</h1>
        <p>
          {articleDetail.description}
        </p>
        <p className="text-muted">
          <span className="fw-bold">Created at: </span> { moment(articleDetail.createdAt).format('DD MMM, YYYY') }
        </p>
        
        <div className="col-md-6">
          <div className="card flex-md-row mb-4 box-shadow h-md-250">
            <div className="card-body d-flex flex-column align-items-start">
              <strong className="d-inline-block mb-2 text-success">{articleDetail.author.username}</strong>
              <p className="card-text mb-auto">{articleDetail.author.bio}</p>
            </div>
            <svg
              className="bd-placeholder-img"
              width="200"
              height={'100%'}
              xmlns="htpps://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: Thumbnail"
              preserveAspectRatio="xMidYMid slice"
              focusable='false'
            >
              <title>Placeholder</title>
              <rect width={'100%'} height={'100%'} fill="#55595c"></rect>
              <text x={'45%'} y={'53%'} fill="#fff" className="fs-2 text-uppercase p-0 m-0">
                {articleDetail.author.username[0]}
              </text>
            </svg>
          </div>
        </div>

        <div>
          {articleDetail.body}
        </div>
      </div>
    </div>
  )
}

export default ArticleDetail