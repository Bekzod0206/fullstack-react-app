import { Input, Textarea } from "../ui-components"

function ArticleForm({title, setTitle, description, setDescription, body, setBody, btnText}) {
  return (
    <div>
      <form className="w-75 mx-auto">
        <Input label={'Title'} state={title} setState={setTitle} />
        <Textarea label={'Description'} state={description} setState={setDescription} />
        <Textarea label={'Body'} state={body} setState={setBody} height="300px" />
        <button className="btn btn-lg btn-primary btn-block mt-2" type="submit">
          {btnText}
        </button>
      </form>
    </div>
  )
}

export default ArticleForm