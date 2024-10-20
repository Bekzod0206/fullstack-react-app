import { useSelector } from "react-redux"
import { Input, Textarea } from "../ui-components"

function ArticleForm(props) {
  const {title, setTitle, description, setDescription, body, setBody, btnText, formSubmit} = props
  const {isLoading} = useSelector(state => state.article)
  return (
    <div>
      <form className="w-75 mx-auto" onSubmit={formSubmit}>
        <Input label={'Title'} state={title} setState={setTitle} />
        <Textarea label={'Description'} state={description} setState={setDescription} />
        <Textarea label={'Body'} state={body} setState={setBody} height="300px" />
        <button className="btn btn-lg btn-primary btn-block mt-2" disabled={isLoading} type="submit">
          {isLoading ? 'Loading...' : btnText}
        </button>
      </form>
    </div>
  )
}

export default ArticleForm