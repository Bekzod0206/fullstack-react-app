function Input({label, type = 'text', state, setState}) {
  return (
    <div>
      <label for="input" class="sr-only">{label}</label>
      <input
        type={type}
        id="input"
        class="form-control"
        placeholder={label}
        required=""
        autofocus=""
        value={state}
        onChange={e => setState(e.target.value)}
      />
    </div>
  )
}

export default Input