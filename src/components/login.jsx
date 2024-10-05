import { useState } from "react"
import { registerLogo } from "../constants"
import { Input } from "../ui-components"
import { useDispatch, useSelector } from "react-redux";
import { loginUserStart } from "../slice/auth";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch()
  const {isLoading} = useSelector(state => state.auth)
  const loginHandler = (e) => {
    e.preventDefault()
    dispatch(loginUserStart())
  }

  return (
    <div className="text-center mt-5">
      <form className="form-signin w-25 m-auto">
        <img className="mb-2" src={registerLogo} alt="" width="72" height="72" />
        <h1 className="h3 mb-3 font-weight-normal">Please login</h1>
        <Input label={'Email address'} type={'email'} state={email} setState={setEmail}/>
        
        <Input label={'Password'} type={'password'} state={password} setState={setPassword}/>

        <button className="btn btn-lg btn-primary btn-block mt-2" disabled={isLoading} type="submit" onClick={loginHandler}>
          {isLoading ? 'Loading...' : 'Login'}
        </button>
        <p className="mt-5 mb-3 text-muted">© 2024</p>
      </form>
    </div>
  )
}

export default Login