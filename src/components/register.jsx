import { useState } from "react"
import { registerLogo } from "../constants"
import { Input } from "../ui-components"
import { useDispatch, useSelector } from "react-redux";
import { registerUserFailure, registerUserStart, registerUserSuccess } from "../slice/auth";
import AuthService from "../service/auth";

function Register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch()
  const {isLoading} = useSelector(state => state.auth)
  const registerHandler = (e) => {
    e.preventDefault()
    dispatch(registerUserStart())

    const user = {username: name, email, password}

    try {
      const response = AuthService.userRegister(user)
      console.log(response, 'response')
      dispatch(registerUserSuccess())
    } catch (error) {
      dispatch(registerUserFailure())
    }
  }



  return (
    <div className="text-center mt-5">
      <form className="form-signin w-25 m-auto">
        <img className="mb-2" src={registerLogo} alt="" width="72" height="72" />
        <h1 className="h3 mb-3 font-weight-normal">Please register</h1>
        
        <Input label={'Username'} state={name} setState={setName} />
        
        <Input label={'Email address'} type={'email'} state={email} setState={setEmail}/>
        
        <Input label={'Password'} type={'password'} state={password} setState={setPassword}/>

        <button className="btn btn-lg btn-primary btn-block mt-2" type="submit" onClick={registerHandler} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Register'}
        </button>
        <p className="mt-5 mb-3 text-muted">© 2024</p>
      </form>
    </div>
  )
}

export default Register