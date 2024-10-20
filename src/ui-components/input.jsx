function Input({label, type = 'text', state, setState}) {
  return (
    <div>
      <input
        type={type}
        className="form-control"
        placeholder={label}
        required=""
        autoFocus=""
        value={state}
        onChange={e => setState(e.target.value)}
      />
    </div>
  )
}

export default Input