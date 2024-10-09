import { useCallback } from "react"
import { useSelector } from "react-redux"

const ValidationError = () => {

  const {error} = useSelector(state => state.auth)
  console.log(error, 'error')
  
  const errorMsg = useCallback(() => {
    return Object.keys(error).map(name => {
      const msg = error[name].join(', ')
      return `${name} - ${msg}`
    })
  }, [error])

  console.log(error && errorMsg())

  return error && errorMsg().map(err => (
    <div className="alert alert-warning m-1 p-1" role="alert" key={err}>
      {err}
    </div>
  ))
}

export default ValidationError