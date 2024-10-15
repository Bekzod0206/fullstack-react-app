import { useCallback, useEffect, useState } from "react"
import { registerLogo } from "../constants"
import { Input } from "../ui-components"
import { useDispatch, useSelector } from "react-redux";
import { signUserFailure, signUserStart, signUserSuccess } from "../slice/auth";
import AuthService from "../service/auth";
import { ValidationError } from "./";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const {isLoading, loggedIn} = useSelector(state => state.auth)
  console.log(loggedIn, 'loggedIn')
  const loginHandler = async (e) => {
    e.preventDefault()
    dispatch(signUserStart())
    const user = {
      email,
      password
    }
    try {
      const response = await AuthService.userLogin(user)
      dispatch(signUserSuccess(response.user))
      navigate('/')
    } catch (error) {
      dispatch(signUserFailure(error.response.data.errors))
    }
  }

  useEffect(() => {
    if(loggedIn){
      navigate('/')
      console.log('hello world')
    }
  }, [loggedIn])

  return (
    <div className="text-center mt-5">
      <form className="form-signin w-25 m-auto">
        <img className="mb-2" src={registerLogo} alt="" width="72" height="72" />
        <h1 className="h3 mb-3 font-weight-normal">Please login</h1>

        <ValidationError />

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