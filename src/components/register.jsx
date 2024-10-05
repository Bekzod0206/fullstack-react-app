import { useState } from "react"
import { registerLogo } from "../constants"
import { Input } from "../ui-components"

function Register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <div className="text-center mt-5">
      <form class="form-signin w-25 m-auto">
        <img class="mb-2" src={registerLogo} alt="" width="72" height="72" />
        <h1 class="h3 mb-3 font-weight-normal">Please register</h1>
        
        <Input label={'Username'} state={name} setState={setName} />
        
        <Input label={'Email address'} type={'email'} state={email} setState={setEmail}/>
        
        <Input label={'Password'} type={'password'} state={password} setState={setPassword}/>

        <button class="btn btn-lg btn-primary btn-block mt-2" type="submit">Register</button>
        <p class="mt-5 mb-3 text-muted">© 2024</p>
      </form>
    </div>
  )
}

export default Register