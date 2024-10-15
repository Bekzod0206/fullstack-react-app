import { useCallback } from "react"
import { useSelector } from "react-redux"

const ValidationError = () => {

  const {error} = useSelector(state => state.auth)
  
  const errorMsg = useCallback(() => {
    return Object.keys(error).map(name => {
      const msg = error[name].join(', ')
      return `${name} - ${msg}`
    })
  }, [error])

  return error && errorMsg().map(err => (
    <div className="alert alert-warning m-1 p-1" role="alert" key={err}>
      {err}
    </div>
  ))
}

export default ValidationError