import { useState } from "react"
import ArticleForm from "./article-form"

function CreateArticle() {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [body, setBody] = useState('')

  return (
    <div className="text-center">
      <h1 className="fs-2">Create article</h1>
      <ArticleForm
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        body={body}
        setBody={setBody}
        btnText={'Create'}
      />
    </div>
  )
}

export default CreateArticle